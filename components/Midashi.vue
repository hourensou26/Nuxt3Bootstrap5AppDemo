<!-- /components/Midashi.vue -->
<template>
  <div>
    <h1 class="m-5">{{ title }}</h1>
    <nuxt-link class="btn-m-3 btn btn-primary" role="button" :to="link">{{ buttonText }}</nuxt-link>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const title = ref('');
const link = ref('');
const buttonText = ref('');
</script>
