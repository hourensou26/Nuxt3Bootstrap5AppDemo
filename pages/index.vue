<template>
  <div class="container-fluid">
    <h1 class="m-5">予定アプリ</h1>
    <nuxt-link class="btn-m-3 btn btn-primary" role="button" to="/create">新規作成</nuxt-link>

    <div class="m-5" style="text-align: center;">
      <h2>予定一覧</h2>
    </div>
  </div>
  <div class="card w-50 mt-5" style="margin: auto;" v-for="item in items" :key="item.id">
    <div class="card-body">
      <h4 class="card-title">タイトル：{{ item.title }}</h4>
      <p class="card-text pt-2">期限：{{ item.date }}</p>
      <div class="d-flex justify-content-end flex-wrap">
        <nuxt-link class="btn btn-secondary" role="button" to="/about" @click="about(item)">詳細</nuxt-link>
        <button class="btn btn-success" @click="edit(item)">編集</button>
        <button class="btn btn-danger" @click="deleteItem(item)">削除</button>
      </div>
    </div>
  </div>
</template>

<script setup>

const items = ref([])
onMounted(() => {
  const ls = localStorage.getItem('items');
  items.value = JSON.parse(ls) || [];
})

function deleteItem(item) {
  const index = items.value.findIndex((v) => v.id === item.id);
  items.value.splice(index, 1);
  localStorage.setItem('items', JSON.stringify(items.value));
}
</script>
