import logo from '../assets/buzzy-bean-logo.png'
import type { SiteContent } from '../content'

interface VisitProps {
  content: SiteContent
}

export function Visit({ content }: VisitProps) {
  return (
    <section className="visit section" id="visit" aria-labelledby="visit-title">
      <div className="visit-intro">
        <h2 id="visit-title">{content.visit.title}</h2>
        <div className="visit-mascot" aria-hidden="true">
          <img src={logo} width="1254" height="1254" alt="" loading="lazy" />
        </div>
      </div>
      <div className="visit-details">
        <p className="location-status">{content.visit.location}</p>
        <dl className="hours-list">
          {content.visit.hours.map((hours) => (
            <div key={hours.label}>
              <dt>{hours.label}</dt>
              <dd>{hours.value}</dd>
            </div>
          ))}
        </dl>
        <a className="email-link" href={`mailto:${content.visit.email}`}>
          {content.visit.email}
        </a>
      </div>
    </section>
  )
}
