# `tickloop`

Simple and performant animation frame handler. The API and implementation were inspired by the GreenSock Animation
Platform (GSAP) library.

## Installation & Setup

`tickloop` is available on npm and can be installed with your favorite package manager:

```shell
$ yarn add tickloop
# or
$ npm i tickloop
```

Then import the creator from the package in your code:

```typescript
import { createTicker } from 'tickloop'

const ticker = createTicker()
```

## Usage

### Configuring

The `createTicker` function accepts a configuration object with the following properties:

- `fps`: The target frames per second (fps). The ticker will make its best effort to reach this framerate. Note that you
  are effectively capped to 60 because the browser's own `requestAnimationFrame` will not fire above this rate.
- `lagThreshold`: The number of milliseconds the ticker should consider "lag". If the elapsed time between two ticks
  exceeds this value, the ticker will apply a lag ease. See Lag Easing below.
- `adjustedLag`: The number of milliseconds the ticker should advance by when easing a lag spike. When a lag spike
  occurs, the ticker will advance time by this amount. See Lag Easing below.
- `stopped`: Whether this ticker should not `start()` itself immediately.

#### Lag Easing

This effect is borrowed from GSAP. Should the `ticker` encounter a lag spike, instead of advancing that time all at once
or skipping it entirely, it advances time by a fixed easing amount.

By default, the `lagThreshold` is set to `500ms` and the `adjustedLag` is set to `33ms`. This means that if the ticker
observes that the elapsed time between two ticks exceeds `500ms`, it will advance time by only `33ms`.

Setting `lagThreshold` to `0` disables this feature.

### Working with Tick Callbacks

Add a tick callback that you wish to execute every frame with the `add` method:

```typescript
ticker.add((time, delta, frame) => {
  // ...
})
```

The callback receives, as arguments:

- `time`: The current time in milliseconds
- `delta`: The milliseconds since the previous tick
- `frame`: The number of frames that have passed

Remove a tick callback with the `remove` method:

```typescript
const callback = (time, delta, frame) => {
  // ...
}

ticker.add(callback)

// later

ticker.remove(callback)
```

If you only want to hook into _one_ frame, as opposed to every frame, you can send your callback to the `once` method:

```typescript
ticker.once((time, delta, frame) => {
  // ...
})
```

### Getting General Information

The ticker itself makes the same `time`, `delta`, and `frame` information sent to callbacks available on the instance. Additionally, it exposes a `deltaRatio` which is the ratio of the current `delta` value to the expected delta value of the target `fps`:

```typescript
// the time in milliseconds this ticker has been running
ticker.time

// the time in milliseconds since the last frame this ticker observed
ticker.delta

// the ratio between the current delta and the expected delta for the target frame rate
ticker.deltaRatio

// the number of frames that have passed
ticker.frames
```
