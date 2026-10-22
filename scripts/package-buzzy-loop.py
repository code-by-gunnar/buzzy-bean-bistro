"""Package the alpha WebM preview as a browser-compatible animated WebP.

Usage: python package-buzzy-loop.py INPUT.webm OUTPUT.webp
The libvpx decoder is required to retain the WebM alpha plane.
"""
import json
from pathlib import Path
import subprocess
import sys

import numpy as np
from PIL import Image

source, target = map(Path, sys.argv[1:3])
target.parent.mkdir(parents=True, exist_ok=True)
size, fps = 384, 12
decoder = subprocess.Popen([
    'ffmpeg', '-v', 'error', '-c:v', 'libvpx-vp9', '-i', str(source),
    '-vf', f'fps={fps},scale={size}:{size}:flags=lanczos',
    '-f', 'rawvideo', '-pix_fmt', 'rgba', 'pipe:1',
], stdout=subprocess.PIPE)
frames = []
while True:
    raw = decoder.stdout.read(size * size * 4)
    if not raw:
        break
    assert len(raw) == size * size * 4
    frame = Image.frombytes('RGBA', (size, size), raw)
    assert frame.getpixel((0, 0))[3] == 0, 'Alpha lost in WebM decoding'
    frames.append(frame)
assert decoder.wait() == 0 and frames
loop = frames + frames[-2:0:-1]
durations = [round((i + 1) * 1000 / fps) - round(i * 1000 / fps)
             for i in range(len(loop))]
loop[0].save(target, save_all=True, append_images=loop[1:], duration=durations,
             loop=0, quality=75, method=4, minimize_size=True)
image = Image.open(target)
assert image.n_frames == len(loop) and image.mode == 'RGBA'
alpha = np.asarray(image)[:, :, 3]
assert alpha.min() == 0 and alpha.max() == 255
print(json.dumps({'file': str(target), 'bytes': target.stat().st_size,
                  'size': size, 'fps': fps, 'frames': len(loop),
                  'duration_ms': sum(durations), 'loop': 'forward-back'}))
