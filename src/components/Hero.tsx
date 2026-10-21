import heroImage from '../assets/coffee-hero.webp'
import type { SiteContent } from '../content'

interface HeroProps {
  content: SiteContent
}

export function Hero({ content }: HeroProps) {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-copy">
        <h1 id="hero-title">{content.hero.title}</h1>
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
    </section>
  )
}
