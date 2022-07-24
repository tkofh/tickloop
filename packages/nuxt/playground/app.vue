<template>
  <div>
    {{ time }}
  </div>
</template>

<script setup lang="ts">

const time = ref('0.000')
useTick(function (frame) {
  time.value = (frame * 0.001).toFixed(3)
})
</script>
