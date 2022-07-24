import { createTicker } from 'tickloop'
import { tickloopPlugin } from '@tickloop/vue'
import { defineNuxtPlugin, useRuntimeConfig } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  const ticker = createTicker(config.public.tickloop?.config ?? {})

  nuxtApp.provide('ticker', ticker)
  nuxtApp.vueApp.use(tickloopPlugin, { instance: ticker })
})
