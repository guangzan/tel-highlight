import { telHighlight } from '../../src'
import { test, expect, it } from 'vitest'

test('middle string tel and string highlight', () => {
  const input = {
    tel: '12345678910',
    highlight: '789',
  }
  const output = [
    {
      num: '123456',
      isHighlight: false,
    },
    {
      num: '789',
      isHighlight: true,
    },
    {
      num: '10',
      isHighlight: false,
    },
  ]
  expect(telHighlight(input)).toEqual(output)
})

test('middle number tel and number highlight', () => {
  const input = {
    tel: 12345678910,
    highlight: 789,
  }
  const output = [
    {
      num: '123456',
      isHighlight: false,
    },
    {
      num: '789',
      isHighlight: true,
    },
    {
      num: '10',
      isHighlight: false,
    },
  ]
  expect(telHighlight(input)).toEqual(output)
})

test('middle number tel and string highlight', () => {
  const input = {
    tel: 12345678910,
    highlight: '789',
  }
  const output = [
    {
      num: '123456',
      isHighlight: false,
    },
    {
      num: '789',
      isHighlight: true,
    },
    {
      num: '10',
      isHighlight: false,
    },
  ]
  expect(telHighlight(input)).toEqual(output)
})

test('middle string tel and number highlight', () => {
  const input = {
    tel: '12345678910',
    highlight: 789,
  }
  const output = [
    {
      num: '123456',
      isHighlight: false,
    },
    {
      num: '789',
      isHighlight: true,
    },
    {
      num: '10',
      isHighlight: false,
    },
  ]
  expect(telHighlight(input)).toEqual(output)
})
