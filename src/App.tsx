import { Atmosphere } from './components/Atmosphere'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { MenuHighlights } from './components/MenuHighlights'
import { Story } from './components/Story'
import { Visit } from './components/Visit'
import { PhotoShapes } from './components/Visuals'
import { siteContent } from './content'
import { useLanguage } from './useLanguage'

export default function App() {
  const { language, setLanguage } = useLanguage()
  const content = siteContent[language]

  return (
    <div className="site-shell">
      <PhotoShapes />
      <a className="skip-link" href="#main-content">
        {content.accessibility.skipToContent}
      </a>
      <Header content={content} language={language} setLanguage={setLanguage} />
      <main id="main-content">
        <Hero content={content} />
        <Story content={content} />
        <MenuHighlights content={content} />
        <Atmosphere content={content} />
        <Visit content={content} />
      </main>
      <Footer content={content} language={language} setLanguage={setLanguage} />
    </div>
  )
}
