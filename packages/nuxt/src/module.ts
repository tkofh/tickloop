import {
  defineNuxtModule,
  addPlugin,
  addAutoImport,
  resolveModule,
  createResolver,
} from '@nuxt/kit'
import type { TickerOptions } from 'tickloop'

export type ModuleOptions = TickerOptions

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: '@nuxt/tickloop',
    version: '0.0.0',
    configKey: 'tickloop',
    compatibility: { nuxt: '^3.0.0' },
  },
  defaults: {},
  setup: (config, nuxt) => {
    const { resolve } = createResolver(import.meta.url)

    const resolveRuntimeModule = (path: string) =>
      resolveModule(path, { paths: resolve('./runtime') })

    nuxt.options.runtimeConfig.public.tickloop = { config }

    addPlugin(resolveRuntimeModule('./plugin'))

    addAutoImport([
      { name: 'useTick', as: 'useTick', from: '@tickloop/vue' },
      { name: 'useTicker', as: 'useTicker', from: '@tickloop/vue' },
    ])
  },
})

declare module '@nuxt/schema' {
  interface ConfigSchema {
    runtimeConfig: {
      public?: {
        tickloop?: { config?: ModuleOptions }
      }
    }
  }
}
