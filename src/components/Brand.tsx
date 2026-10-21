import mascot from '../assets/buzzy-mascot.webp'

export function Brand({ wordmarkOnly = false }: { wordmarkOnly?: boolean }) {
  return (
    <span
      className={`brand-lockup${wordmarkOnly ? ' brand-lockup-wordmark' : ''}`}
      aria-hidden="true"
    >
      {!wordmarkOnly && (
        <img
          className="brand-mascot"
          src={mascot}
          width="900"
          height="900"
          alt=""
        />
      )}
      <span className="brand-lettering">
        <span className="brand-name">
          Buzzy<span>Bean</span>
        </span>
        <span className="brand-subtitle">Café &amp; Bistro</span>
      </span>
    </span>
  )
}
