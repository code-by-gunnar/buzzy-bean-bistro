import atmosphereImage from '../assets/cafe-atmosphere.webp'
import type { SiteContent } from '../content'

interface AtmosphereProps {
  content: SiteContent
}

export function Atmosphere({ content }: AtmosphereProps) {
  return (
    <section className="atmosphere section" aria-labelledby="atmosphere-title">
      <div className="page-container section-inner atmosphere-inner">
        <div className="atmosphere-media media-frame">
          <img
            src={atmosphereImage}
            width="2400"
            height="1600"
            alt={content.accessibility.atmosphereImageAlt}
            loading="lazy"
          />
        </div>
        <div className="atmosphere-copy">
          <h2 id="atmosphere-title">{content.atmosphere.title}</h2>
          <p>{content.atmosphere.body}</p>
          <span className="flight-path flight-path-light" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
