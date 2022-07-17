import type { Ticker } from 'tickloop'
import { createTicker } from 'tickloop'
import { inject, provide } from 'vue'
import { TICKER } from './injections'

export const provideTicker = (): Ticker => {
  if (inject(TICKER, null) !== null) {
    if (process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line no-console
      console.warn(
        '`provideTicker()` called while tickloopPlugin is installed, which has no effect. Do not call `provideTicker()` while the tickloopPlugin is installed to dismiss this warning.'
      )
    }
  }

  const ticker = createTicker()

  provide(TICKER, ticker)

  return ticker
}
