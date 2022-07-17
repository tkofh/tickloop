import type { TickCallback } from 'tickloop'
import { onBeforeUnmount } from 'vue'
import { useTicker } from './useTicker'

interface UseTickOptions {
  once?: boolean
}

export const useTick = (tick: TickCallback, options?: UseTickOptions): void => {
  const { once = false } = options ?? {}

  const ticker = useTicker()

  if (once) {
    ticker.once(tick)
  } else {
    ticker.add(tick)

    onBeforeUnmount(() => {
      ticker.remove(tick)
    })
  }
}
