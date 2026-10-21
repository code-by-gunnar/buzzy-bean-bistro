import type { SiteContent } from '../content'

interface MenuHighlightsProps {
  content: SiteContent
}

export function MenuHighlights({ content }: MenuHighlightsProps) {
  return (
    <section className="menu section" id="menu" aria-labelledby="menu-title">
      <div className="menu-heading-row">
        <h2 id="menu-title">{content.menu.title}</h2>
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
    </section>
  )
}
