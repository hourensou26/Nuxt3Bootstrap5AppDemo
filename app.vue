<template>
    <div>
      <NuxtLayout>
      <NuxtPage />
      </NuxtLayout>
    </div>
    </template>


import { createApp } from 'vue'

const app1 = createApp({})

app.component(
  'desplay-component',
  {
    template: '<p>表示コンポーネント</p>'
  }
)


const app2 = createApp({
  /* ... */
})
app2.mount('#new-create')