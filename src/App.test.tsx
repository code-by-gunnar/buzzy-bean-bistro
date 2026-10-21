import { fireEvent, render, screen, within } from '@testing-library/react'
import { beforeEach, describe, expect, test } from 'vitest'

import App from './App'

describe('Buzzy Bean landing page', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })

  test('renders the complete Romanian page with semantic landmarks', () => {
    const { container } = render(<App />)

    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Cafea bună. Zile senine.',
    )
    expect(container.querySelector('header')).toBeInTheDocument()
    expect(container.querySelector('main')).toBeInTheDocument()
    expect(container.querySelector('footer')).toBeInTheDocument()
    expect(container.querySelector('section#story')).toBeInTheDocument()
    expect(container.querySelector('section#menu')).toBeInTheDocument()
    expect(container.querySelector('section#visit')).toBeInTheDocument()
  })

  test('provides usable section navigation and contact links', () => {
    render(<App />)

    const navigation = screen.getByRole('navigation', { name: 'Navigare principală' })
    expect(within(navigation).getByRole('link', { name: 'Poveste' })).toHaveAttribute(
      'href',
      '#story',
    )
    expect(within(navigation).getByRole('link', { name: 'Meniu' })).toHaveAttribute(
      'href',
      '#menu',
    )
    expect(
      within(navigation).getByRole('link', { name: 'Vizitează-ne' }),
    ).toHaveAttribute('href', '#visit')
    expect(screen.getAllByRole('link', { name: 'coffee@buzzybean.ro' })[0]).toHaveAttribute(
      'href',
      'mailto:coffee@buzzybean.ro',
    )
  })

  test('renders all menu categories and descriptive photography', () => {
    render(<App />)

    for (const category of [
      'Cafea & espresso',
      'Băuturi de sezon',
      'Patiserie proaspătă',
      'Bistro lejer',
    ]) {
      expect(screen.getByRole('heading', { name: category })).toBeInTheDocument()
    }

    expect(
      screen.getByAltText('Cafea cu lapte și patiserie servite la o masă de cafenea'),
    ).toBeInTheDocument()
    expect(
      screen.getByAltText('Prietene petrecând timp împreună într-o cafenea luminoasă'),
    ).toBeInTheDocument()
  })

  test('communicates language selection without relying on colour', () => {
    render(<App />)

    const romanianButton = screen.getByRole('button', {
      name: /Română.*selectată/,
    })
    const englishButton = screen.getByRole('button', {
      name: /English.*neselectată/,
    })

    expect(romanianButton).toHaveAttribute('aria-pressed', 'true')
    expect(englishButton).toHaveAttribute('aria-pressed', 'false')

    fireEvent.click(englishButton)

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Good coffee. Bright days.',
    )
    expect(
      screen.getByRole('button', { name: /English.*selected/ }),
    ).toHaveAttribute('aria-pressed', 'true')
  })
})
