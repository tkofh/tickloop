export type Callback = (...args: unknown[]) => void

export type TickCallback = (time: number, delta: number, frame: number) => void

export interface TickerOptions {
  fps?: number
  lagThreshold?: number
  adjustedLag?: number
  stopped?: boolean
}

export interface Ticker {
  fps: number
  lagThreshold: number
  adjustedLag: number
  readonly time: number
  readonly frame: number
  readonly delta: number
  readonly deltaRatio: number
  start: () => void
  stop: () => void
  add: (callback: TickCallback) => void
  remove: (callback: TickCallback) => void
  once: (callback: TickCallback) => void
  tick: () => void
}
