import logo from '../assets/buzzy-bean-logo.png'
import type { Language, SiteContent } from '../content'

interface FooterProps {
  content: SiteContent
  language: Language
  setLanguage: (language: Language) => void
}

export function Footer({ content, language, setLanguage }: FooterProps) {
  return (
    <footer className="site-footer">
      <a className="footer-brand" href="#top" aria-label="Buzzy Bean">
        <img src={logo} width="1254" height="1254" alt="" />
      </a>
      <nav aria-label={content.accessibility.footerNavigation}>
        <a href="#story">{content.nav.story}</a>
        <a href="#menu">{content.nav.menu}</a>
        <a href="#visit">{content.nav.visit}</a>
      </nav>
      <a className="footer-domain" href={`mailto:${content.visit.email}`}>
        {content.footer.domain}
      </a>
      <div className="footer-languages" aria-label={content.accessibility.chooseLanguage}>
        <button
          type="button"
          aria-pressed={language === 'ro'}
          onClick={() => setLanguage('ro')}
        >
          RO
        </button>
        <span aria-hidden="true">/</span>
        <button
          type="button"
          aria-pressed={language === 'en'}
          onClick={() => setLanguage('en')}
        >
          EN
        </button>
      </div>
    </footer>
  )
}
