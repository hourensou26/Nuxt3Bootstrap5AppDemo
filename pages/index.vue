<template>
  <div class="container-fluid">
    <h1 class="m-5">予定アプリ</h1>
    <nuxt-link class="btn-m-3 btn btn-primary" role="button" to="/create">新規作成</nuxt-link>

  <div class="m-5" style="text-align: center;">
    <h2>予定一覧</h2>

    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title"></h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
      </div>
    </div>
  </div>
  </div>

  <div class="container">
  <p v-for="item in items" :key="item.id">
    {{ item.title }}
    {{ item.date }}
    {{ item.content }}
  </p>
    </div>
</template>

<script setup>

const items = ref([])
onMounted(() => {
  const ls = localStorage.getItem('items');
  items.value = JSON.parse(ls) || [];
  })
 
</script>
