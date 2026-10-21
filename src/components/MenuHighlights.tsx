import type { SiteContent } from '../content'
import menuPhoto from '../assets/coffee-menu-concept.webp'
import { BrushHeading, Sparks, Wave } from './Visuals'

interface MenuHighlightsProps {
  content: SiteContent
}

export function MenuHighlights({ content }: MenuHighlightsProps) {
  return (
    <section className="menu section" id="menu" aria-labelledby="menu-title">
      <div className="page-container section-inner menu-inner">
        <div className="menu-heading-row">
          <Sparks className="menu-sparks" />
          <BrushHeading
            id="menu-title"
            title={content.menu.title}
            leadingWords={content.languageName === 'Română' ? 2 : 3}
          />
          <div className="menu-photo media-frame" aria-hidden="true">
            <img
              src={menuPhoto}
              width="1448"
              height="1086"
              alt=""
              loading="lazy"
            />
          </div>
        </div>
        <ol className="menu-list">
          {content.menu.items.map((item, index) => (
            <li key={item.title}>
              <span className="menu-number" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </li>
          ))}
        </ol>
      </div>
      <Wave className="wave-to-atmosphere" />
    </section>
  )
}
