import { describe, expect, test } from 'vitest'
import { menuCategories, menuPageCopy } from './menuContent'
import { getProductImage } from './productImages'

describe('owner-supplied full menu', () => {
  test('preserves all 25 products, category counts, and the poster prices', () => {
    expect(menuCategories.map((category) => category.products.length)).toEqual([
      10, 5, 6, 4,
    ])
    expect(
      menuCategories.map((category) =>
        category.products.map((product) => product.price),
      ),
    ).toEqual([
      [16, 14, 19, 17, 16, 7, 8, 12, 18, 22],
      [34, 32, 42, 38, 36],
      [19, 20, 19, 17, 18, 20],
      [32, 28, 30, 30],
    ])
    const products = menuCategories.flatMap((category) => category.products)
    expect(new Set(products.map((product) => product.id)).size).toBe(25)
    expect(
      products
        .filter((product) => product.perPiece)
        .map((product) => product.name),
    ).toEqual(['Honey Madeleines', 'Honey Almond Bites'])
  })

  test('provides both languages without duplicating product identities or prices', () => {
    for (const category of menuCategories) {
      expect(category.subtitle.ro).toBeTruthy()
      expect(category.subtitle.en).toBeTruthy()
      for (const product of category.products) {
        expect(product.description.ro).toBeTruthy()
        expect(product.description.en).toBeTruthy()
      }
    }
    expect(menuPageCopy.ro.perPiece).toBe('/ buc.')
    expect(menuPageCopy.en.perPiece).toBe('/ piece')
  })

  test('uses a separate product image for every item, without poster crops', () => {
    const sources = menuCategories
      .flatMap((category) => category.products)
      .map((product) => {
        const source = getProductImage(product.id)
        expect(
          source,
          `${product.name} is missing its product asset`,
        ).toBeTruthy()
        expect(source).not.toContain('menu-poster')
        return source
      })
    expect(new Set(sources).size).toBe(25)
  })
})
