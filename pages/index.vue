<template>
<div class="container-fluid">
<h1 class="m-5">予定アプリ</h1>
<nuxt-link class="btn-m-3 btn btn-primary" role="button" to="/create">新規作成</nuxt-link>

</div>
  
  <div class="m-5" style="text-align: center;">
    <h2>予定一覧</h2>
    <h3>タイトル入れる</h3>
    <p>日付入れる</p>
    <p>詳細入れる</p>
    <p>{{savedData.title}}</p>
    <p>{{savedData.date}}</p>
    <p>{{savedData.content}}</p>
  </div>


</template>

<script setup>
  import { getInputData } from '~/composables/list';

  const savedData = getInputData();

  console.log('Saved Data:', savedData);
</script>
