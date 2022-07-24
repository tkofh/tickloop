import { defineNuxtConfig } from 'nuxt'
import MyModule from '..'

export default defineNuxtConfig({
  ssr: true,
  modules: [MyModule],
})
