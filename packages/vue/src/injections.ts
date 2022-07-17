import type { InjectionKey } from 'vue'
import type { Ticker } from 'tickloop'

export const TICKER = Symbol('ticker') as InjectionKey<Ticker>
