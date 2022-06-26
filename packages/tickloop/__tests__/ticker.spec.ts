import { describe, test } from 'vitest'
import { createTicker } from '../src'

describe('createTicker', () => {
  // no clue how to test time code tbh
  test('it creates', ({ expect }) => {
    const ticker = createTicker({ stopped: true })

    expect(ticker).toBeDefined()
  })
})
