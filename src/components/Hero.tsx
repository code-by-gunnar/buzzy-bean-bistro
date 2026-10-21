import heroImage from '../assets/coffee-hero.webp'
import type { SiteContent } from '../content'

interface HeroProps {
  content: SiteContent
}

export function Hero({ content }: HeroProps) {
  const [firstLine, secondLine] = content.hero.title.split('. ')

  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="page-container hero-inner">
        <div className="hero-copy">
          <h1 id="hero-title">
            <span>{firstLine}.</span>{' '}
            <span>{secondLine}</span>
          </h1>
          <p>{content.hero.description}</p>
          <a className="button" href="#story">
            {content.hero.action}
          </a>
          <span className="flight-path" aria-hidden="true" />
        </div>
        <div className="hero-media media-frame">
          <img
            src={heroImage}
            width="2400"
            height="3600"
            alt={content.accessibility.heroImageAlt}
          />
        </div>
      </div>
    </section>
  )
}
