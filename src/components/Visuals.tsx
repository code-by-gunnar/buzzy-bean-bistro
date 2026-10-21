export function BrushHeading({
  title,
  leadingWords,
  id,
}: {
  title: string
  leadingWords: number
  id: string
}) {
  const words = title.split(' ')
  return (
    <h2 className="brush-heading" id={id}>
      <span>{words.slice(0, leadingWords).join(' ')}</span>{' '}
      <span className="heading-accent">
        {words.slice(leadingWords).join(' ')}
      </span>
    </h2>
  )
}

export function FlightTrail({ className = '' }: { className?: string }) {
  return (
    <svg
      className={`flight-trail ${className}`}
      viewBox="0 0 600 160"
      fill="none"
      aria-hidden="true"
    >
      <path d="M4 99C74 32 133 142 222 120S358 13 333 25C315 9 286 42 310 66S382 141 460 115S547 72 596 120" />
    </svg>
  )
}

export function Sparks({ className = '' }: { className?: string }) {
  return (
    <svg
      className={`sparks ${className}`}
      viewBox="0 0 64 80"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M44 27C37 22 17 5 12 9S20 28 36 35C44 38 49 32 44 27ZM34 42C25 40 4 36 3 42S22 53 33 52C42 52 43 44 34 42ZM46 57C39 59 26 70 30 75S48 69 52 63C55 58 51 55 46 57Z" />
    </svg>
  )
}

export function Wave({ className = '' }: { className?: string }) {
  return (
    <svg
      className={`section-wave ${className}`}
      viewBox="0 0 1440 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path d="M0 40C220-35 337 99 600 53S900 5 1110 53S1320 70 1440 32V100H0Z" />
    </svg>
  )
}

export function PhotoShapes() {
  return (
    <svg
      width="0"
      height="0"
      className="photo-shape-definitions"
      aria-hidden="true"
    >
      <defs>
        <clipPath id="hero-photo-shape" clipPathUnits="objectBoundingBox">
          <path d="M.18.02C.39-.04.75.09 1 .045L1 .96C.7.93.51 1.03.2.98C-.15.93.13.77.085.5C.05.29-.06.09.18.02Z" />
        </clipPath>
        <clipPath id="story-photo-shape" clipPathUnits="objectBoundingBox">
          <path d="M0 .08C.25-.07.48.05.69.055C.89.06 1.03.015.955.39C.91.64 1.13.89.84.96C.57 1.03.22 1.03 0 .93Z" />
        </clipPath>
        <clipPath id="friends-photo-shape" clipPathUnits="objectBoundingBox">
          <path d="M0 .055C.29.01.43.025.57.065C.75.12.92.02.96.18C.98.35.90.54.95.73C.98.91.87.98.66.945C.45.89.29.99 0 .95Z" />
        </clipPath>
      </defs>
    </svg>
  )
}
