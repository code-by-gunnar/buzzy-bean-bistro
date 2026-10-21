import { act, renderHook } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, test } from 'vitest'

import { useLanguage } from './useLanguage'

const storageKey = 'buzzy-bean-language'

describe('useLanguage', () => {
  beforeEach(() => {
    window.localStorage.clear()
    document.documentElement.lang = ''
  })

  afterEach(() => {
    window.localStorage.clear()
  })

  test('defaults to Romanian and updates the document language', () => {
    const { result } = renderHook(() => useLanguage())

    expect(result.current.language).toBe('ro')
    expect(document.documentElement.lang).toBe('ro')
  })

  test.each(['ro', 'en'] as const)('restores a saved %s selection', (savedLanguage) => {
    window.localStorage.setItem(storageKey, savedLanguage)

    const { result } = renderHook(() => useLanguage())

    expect(result.current.language).toBe(savedLanguage)
    expect(document.documentElement.lang).toBe(savedLanguage)
  })

  test('falls back to Romanian when the saved value is invalid', () => {
    window.localStorage.setItem(storageKey, 'de')

    const { result } = renderHook(() => useLanguage())

    expect(result.current.language).toBe('ro')
    expect(document.documentElement.lang).toBe('ro')
  })

  test('persists selection and keeps the document language in sync', () => {
    const { result } = renderHook(() => useLanguage())

    act(() => result.current.setLanguage('en'))

    expect(result.current.language).toBe('en')
    expect(window.localStorage.getItem(storageKey)).toBe('en')
    expect(document.documentElement.lang).toBe('en')
  })
})
