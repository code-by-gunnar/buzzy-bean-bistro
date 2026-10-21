import { useCallback, useEffect, useState } from 'react'

import type { Language } from './content'

const storageKey = 'buzzy-bean-language'

const isLanguage = (value: string | null): value is Language =>
  value === 'ro' || value === 'en'

export function useLanguage(): {
  language: Language
  setLanguage: (language: Language) => void
} {
  const [language, setLanguageState] = useState<Language>(() => {
    const savedLanguage = window.localStorage.getItem(storageKey)
    return isLanguage(savedLanguage) ? savedLanguage : 'ro'
  })

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  const setLanguage = useCallback((nextLanguage: Language) => {
    window.localStorage.setItem(storageKey, nextLanguage)
    setLanguageState(nextLanguage)
  }, [])

  return { language, setLanguage }
}
