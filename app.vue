<template>
    <div>
      <NuxtLayout>
      <NuxtPage />
      </NuxtLayout>
    </div>
    </template>


import { createApp } from 'vue'

const app = createApp({
  data() {
    return {
      count: 0
    }
  }
})

app.mount('#app')