import type { Plugin } from 'vue'
import type { Ticker, TickerOptions } from 'tickloop'
import { createTicker } from 'tickloop'
import { TICKER } from './injections'

type TickerPluginOptions = TickerOptions | { ticker: Ticker }

export const tickloopPlugin: Plugin = {
  install: (app, options?: TickerPluginOptions) => {
    const ticker = options != null && 'ticker' in options ? options.ticker : createTicker(options)

    app.provide(TICKER, ticker)
  },
}
