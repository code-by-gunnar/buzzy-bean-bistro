import storyImage from '../assets/cafe-interior-concept.webp'
import mascot from '../assets/buzzy-mascot.webp'
import type { SiteContent } from '../content'
import { BrushHeading, FlightTrail, Sparks, Wave } from './Visuals'

interface StoryProps {
  content: SiteContent
}

export function Story({ content }: StoryProps) {
  return (
    <section className="story section" id="story" aria-labelledby="story-title">
      <div className="page-container section-inner story-inner">
        <div className="story-media media-frame">
          <img
            src={storyImage}
            width="1448"
            height="1086"
            alt={content.accessibility.storyImageAlt}
            loading="lazy"
          />
        </div>
        <div className="story-copy">
          <Sparks className="story-sparks" />
          <BrushHeading
            id="story-title"
            title={content.story.title}
            leadingWords={3}
          />
          <p>{content.story.body}</p>
          <a className="story-link" href="#menu">
            {content.nav.menu}
            <span aria-hidden="true">→</span>
          </a>
          <FlightTrail className="story-trail" />
        </div>
      </div>
      <img
        className="story-mascot"
        src={mascot}
        width="900"
        height="900"
        alt=""
        loading="lazy"
      />
      <Wave className="wave-to-menu" />
    </section>
  )
}
