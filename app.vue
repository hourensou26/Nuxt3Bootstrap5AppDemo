<template>
    <div>
      <NuxtLayout>
      <NuxtPage />
      </NuxtLayout>
    </div>
    </template>


<script setup
import { createApp } from 'vue'

const app = createApp({})

app.component(

  'create-component',
  {
  deta(){
    return{
      title: '',
      date: '',
      content: ''
    }
  },

  methods:{
    create(){
      const data{
        title:'',
        date:'',
        content:'',
        }
        console.log('creata button clicked')       
  },
    cancel(){
    
    console.log('cancel button clicked')
    }
)

app.mount('#app')
</script>
```