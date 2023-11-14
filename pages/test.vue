<script setup>
import { store } from './store.js'
</script>
<template>
  <button @click="store.increment()">
    From B: {{ store.count }}
  </button>
</template>