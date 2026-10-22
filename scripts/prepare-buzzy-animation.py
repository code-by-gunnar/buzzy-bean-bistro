"""Create a transparent mascot animation without changing the source video.

Usage: python prepare-buzzy-animation.py SOURCE OUTPUT_DIRECTORY
Requires FFmpeg, NumPy, and Pillow with animated WebP support.
"""

import json
from pathlib import Path
import subprocess
import sys

import numpy as np
from PIL import Image, ImageDraw, ImageFilter, features

source = Path(sys.argv[1]).resolve()
output = Path(sys.argv[2]).resolve()
output.mkdir(parents=True, exist_ok=True)
verify = output / 'verify'
verify.mkdir(exist_ok=True)
assert features.check('webp'), 'Pillow needs WebP support'

size = 512
fps = 20
decoder = subprocess.Popen([
    'ffmpeg', '-v', 'error', '-i', str(source),
    '-vf', f'fps={fps},scale={size}:{size}:flags=lanczos',
    '-f', 'rawvideo', '-pix_fmt', 'rgb24', 'pipe:1',
], stdout=subprocess.PIPE)
encoder = subprocess.Popen([
    'ffmpeg', '-v', 'error', '-n', '-f', 'rawvideo', '-pix_fmt', 'rgba',
    '-s', f'{size}x{size}', '-r', str(fps), '-i', 'pipe:0',
    '-an', '-c:v', 'libvpx-vp9', '-pix_fmt', 'yuva420p',
    '-b:v', '0', '-crf', '27', '-auto-alt-ref', '0',
    str(output / 'buzzy-mascot-transparent.webm'),
], stdin=subprocess.PIPE)
frames = []
alpha_stats = []

while True:
    raw = decoder.stdout.read(size * size * 3)
    if not raw:
        break
    if len(raw) != size * size * 3:
        raise RuntimeError('Truncated decoded frame')
    rgb = np.frombuffer(raw, dtype=np.uint8).reshape(size, size, 3).copy()
    low = rgb.min(axis=2)
    high = rgb.max(axis=2)
    # Flood only neutral near-white pixels connected to the canvas boundary.
    # Pale enclosed details remain opaque even when they match the background.
    candidates = (low >= 232) & ((high.astype(int) - low) <= 16)
    region = Image.fromarray(np.where(candidates, 255, 0).astype(np.uint8)).copy()
    for seed in [(0, 0), (size - 1, 0), (0, size - 1), (size - 1, size - 1)]:
        if region.getpixel(seed) == 255:
            ImageDraw.floodfill(region, seed, 128, thresh=0)
    background = np.asarray(region) == 128
    # Two enclosed pockets are background too: the cup handle and left elbow.
    # Classify whole components by bounds, never key all pale mascot details.
    # These normalised bounds are specific to this supplied Buzzy animation.
    while np.any(np.asarray(region) == 255):
        before = np.asarray(region).copy()
        y, x = np.argwhere(before == 255)[0]
        ImageDraw.floodfill(region, (int(x), int(y)), 127, thresh=0)
        component = (before == 255) & (np.asarray(region) == 127)
        ys, xs = np.where(component)
        if not len(xs):
            raise RuntimeError('Could not label enclosed matte component')
        left, right = xs.min() / size, xs.max() / size
        top, bottom = ys.min() / size, ys.max() / size
        cup_handle = left > .90 and top > .26 and bottom < .50
        elbow = left > .20 and right < .36 and top > .56 and bottom < .66
        if cup_handle or elbow:
            pocket = np.asarray(Image.fromarray(component.astype(np.uint8) * 255)
                                .filter(ImageFilter.MaxFilter(3))) > 0
            background[pocket & (low > 180)] = True
    assert .5 < background.mean() < .8, 'Unexpected background matte area'
    # Keep a soft, decontaminated one-pixel boundary around the dark outlines.
    expanded = np.asarray(Image.fromarray(background.astype(np.uint8) * 255)
                          .filter(ImageFilter.MaxFilter(3))) > 0
    edge = expanded & ~background
    alpha = (~background).astype(np.float32)
    alpha[edge] = np.clip((249.0 - low[edge].astype(float)) / 190.0, 0, 1)
    fg = rgb.astype(np.float32)
    partial = (alpha > 0) & (alpha < 1)
    fg[partial] = np.clip((fg[partial] - 249 * (1 - alpha[partial, None]))
                          / alpha[partial, None], 0, 255)
    fg[background] = 0
    rgba = np.dstack([fg.astype(np.uint8), np.round(alpha * 255).astype(np.uint8)])
    frame = Image.fromarray(rgba)
    encoder.stdin.write(rgba.tobytes())
    frames.append(frame)
    alpha_stats.append(float(background.mean()))
    if len(frames) % 20 == 0:
        print(f'Masked {len(frames)} frames', flush=True)

decoder.stdout.close()
assert decoder.wait() == 0, 'FFmpeg decode failed'
encoder.stdin.close()
assert encoder.wait() == 0, 'FFmpeg alpha encode failed'
assert frames, 'No frames decoded'

frames[0].save(output / 'buzzy-mascot-transparent.png')
packaging = subprocess.check_output([
    sys.executable, str(Path(__file__).with_name('package-buzzy-loop.py')),
    str(output / 'buzzy-mascot-transparent.webm'),
    str(output / 'buzzy-mascot-animated.webp'),
], text=True)

for index in [0, len(frames) // 4, len(frames) // 2,
              3 * len(frames) // 4, len(frames) - 1]:
    frames[index].save(verify / f'alpha-{index:03d}.png')
    for name, color in [('cream', '#FFF5DD'), ('brown', '#471805')]:
        composite = Image.new('RGBA', (size, size), color)
        composite.alpha_composite(frames[index])
        composite.convert('RGB').save(verify / f'{name}-{index:03d}.png')

report = {'source': str(source), 'size': size, 'fps': fps,
          'frames': len(frames), 'duration': len(frames) / fps,
          'background_fraction_range': [min(alpha_stats), max(alpha_stats)],
          'web_animation': json.loads(packaging),
          'method': 'boundary-connected near-white matte with edge decontamination'}
(output / 'report.json').write_text(json.dumps(report, indent=2) + '\n')
print(json.dumps(report), flush=True)
