<script setup>
  const { data: tasks } = useFetch('/api/task');
</script>

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
    <ul>
      <li v-for="task in tasks" :key="task.id">{{ task.task }}</li>
    </ul>
  </div>

</template>