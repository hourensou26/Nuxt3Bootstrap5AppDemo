<!-- /pages/test.vue -->
<template>
  <div class="container-fluid">
    <Midashi :title="pageTitle" :link="pageLink" :buttonText="buttonText" />
  </div>
</template>

<script setup>
import Midashi from '../components/Midashi.vue';

const pageTitle = 'テスト';
const pageLink = '/';
const buttonText = 'トップへ';
</script>
