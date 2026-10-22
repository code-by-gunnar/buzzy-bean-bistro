import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import { Visit } from './Visit'
import { siteContent } from '../content'

describe('visit mascot animation', () => {
  test('uses animation only for the visit mascot and offers a reduced-motion still', () => {
    const { container } = render(<Visit content={siteContent.ro} />)
    expect(container.querySelector('.visit-mascot img')).toHaveAttribute(
      'src',
      expect.stringContaining('buzzy-mascot-animated.webp'),
    )
    expect(container.querySelector('.visit-mascot source')).toHaveAttribute(
      'media',
      '(prefers-reduced-motion: reduce)',
    )
    expect(container.querySelector('.visit-mascot source')).toHaveAttribute(
      'srcset',
      expect.stringContaining('buzzy-mascot.webp'),
    )
  })

  test('lets visitors pause and restart the animation', () => {
    const { container } = render(<Visit content={siteContent.en} />)
    fireEvent.click(
      screen.getByRole('button', { name: 'Pause Buzzy animation' }),
    )
    expect(container.querySelector('.visit-mascot img')).toHaveAttribute(
      'src',
      expect.stringContaining('buzzy-mascot.webp'),
    )
    fireEvent.click(
      screen.getByRole('button', { name: 'Play Buzzy animation' }),
    )
    expect(container.querySelector('.visit-mascot img')).toHaveAttribute(
      'src',
      expect.stringContaining('buzzy-mascot-animated.webp'),
    )
  })

  test('keeps the static mascot if the animation fails to load', () => {
    const { container } = render(<Visit content={siteContent.ro} />)
    expect(
      screen.getByRole('button', {
        name: 'Oprește animația lui Buzzy',
      }),
    ).toBeInTheDocument()
    fireEvent.error(container.querySelector('.visit-mascot img')!)
    expect(container.querySelector('.visit-mascot img')).toHaveAttribute(
      'src',
      expect.stringContaining('buzzy-mascot.webp'),
    )
    expect(container.querySelector('.mascot-motion-toggle')).toBeNull()
  })
})
