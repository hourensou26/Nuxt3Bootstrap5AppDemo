<template>
    <div class="container-fluid">
      <h1 class="m-5">{{ item.title }}</h1>
      <div class="card w-50 mt-5" style="margin: auto;">
        <div class="card-body">
          <h4 class="card-title">タイトル：{{ item.title }}</h4>
          <p class="card-text pt-2">期限：{{ item.date }}</p>
          <div class="d-flex justify-content-end">
              <nuxt-link class="btn-m-3 btn btn-primary" role="button" to="/">戻る</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const item = ref({});
  
const items = ref([])
onMounted(() => {
  const ls = localStorage.getItem('items');
  items.value = JSON.parse(ls) || [];
})

  onMounted(() => {
    const ls = localStorage.getItem('items');
    items.value = JSON.parse(ls) || [];
    const id = this.$route.query.id;
    item.value = items.value.find((v) => v.id === id);
  })
  </script>