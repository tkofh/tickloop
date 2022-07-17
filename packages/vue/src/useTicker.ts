import type { Ticker } from 'tickloop'
import { inject } from 'vue'
import { TICKER } from './injections'

export const useTicker = (): Ticker => {
  const ticker = inject(TICKER, null)
  if (ticker === null) {
    throw new Error(
      `useTicker called without a ticker being provided. Did you forget to install the tickerPlugin, or call \`provideTicker()\`?`
    )
  }

  return ticker
}
