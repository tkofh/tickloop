import type { Plugin } from 'vue'
import type { Ticker, TickerOptions } from 'tickloop'
import { createTicker } from 'tickloop'
import { TICKER } from './injections'

type TickerPluginOptions = TickerOptions | { instance: Ticker }

export const tickloopPlugin: Plugin = {
  install: (app, options?: TickerPluginOptions) => {
    const ticker =
      options != null && 'instance' in options ? options.instance : createTicker(options)

    app.provide(TICKER, ticker)
  },
}
