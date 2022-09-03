# Tickloop for Nuxt

## Installation

Install `@tickloop/nuxt` with your favorite package manager:

```shell
yarn add @tickloop/nuxt
# or
npm i @tickloop/nuxt
```

## Usage

Add `@tickloop/nuxt` to your projects `nuxt.config.ts`:

```typescript
import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  modules: ['@tickloop/nuxt'],
})
```

## Development

- Clone the repository
- Run `npm run dev:prepare` to generate type stubs.
- Use `npm run dev` to start [playground](./playground) in development mode.
