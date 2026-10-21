import storyImage from '../assets/cafe-interior.webp'
import type { SiteContent } from '../content'

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
            width="2400"
            height="3000"
            alt={content.accessibility.storyImageAlt}
            loading="lazy"
          />
        </div>
        <div className="story-copy">
          <h2 id="story-title">{content.story.title}</h2>
          <p>{content.story.body}</p>
          <span className="flight-path flight-path-story" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
