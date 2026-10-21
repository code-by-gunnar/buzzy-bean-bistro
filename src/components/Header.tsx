import logo from '../assets/buzzy-bean-logo.png'
import { siteContent, type Language, type SiteContent } from '../content'

interface HeaderProps {
  content: SiteContent
  language: Language
  setLanguage: (language: Language) => void
}

export function Header({ content, language, setLanguage }: HeaderProps) {
  return (
    <header className="site-header">
      <a className="brand-link" href="#top" aria-label="Buzzy Bean">
        <img
          className="brand-logo"
          src={logo}
          width="1254"
          height="1254"
          alt={content.accessibility.logoAlt}
        />
      </a>

      <nav className="primary-nav" aria-label={content.accessibility.mainNavigation}>
        <a href="#story">{content.nav.story}</a>
        <a href="#menu">{content.nav.menu}</a>
        <a href="#visit">{content.nav.visit}</a>
      </nav>

      <div
        className="language-switcher"
        role="group"
        aria-label={content.accessibility.chooseLanguage}
      >
        {(['ro', 'en'] as const).map((option) => {
          const isSelected = language === option
          const optionContent = siteContent[language].accessibility
          const label = `${optionContent.languageOptions[option]} — ${
            isSelected ? optionContent.selected : optionContent.notSelected
          }`

          return (
            <button
              key={option}
              type="button"
              aria-label={label}
              aria-pressed={isSelected}
              onClick={() => setLanguage(option)}
            >
              {option.toUpperCase()}
            </button>
          )
        })}
      </div>

      <a className="button button-small header-action" href="#visit">
        {content.nav.primaryAction}
      </a>
    </header>
  )
}
