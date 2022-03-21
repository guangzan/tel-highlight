import { expect, it, test } from 'vitest'
import { telHighlight } from '../../src'

test('middle number tel and number highlight 8-digit', () => {
  const input = {
    tel: 12345678,
    highlight: 56,
  }
  const output = [
    {
      num: '1234',
      isHighlight: false,
    },
    {
      num: '56',
      isHighlight: true,
    },
    {
      num: '78',
      isHighlight: false,
    },
  ]
  expect(telHighlight(input)).toEqual(output)
})
