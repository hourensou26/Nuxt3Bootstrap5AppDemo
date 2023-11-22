<!-- DetailPage.vue -->
<template>
    <div class="container-fluid">
      <h1 class="m-5">{{ item.title }}</h1>
      <div class="card w-50 mt-5" style="margin: auto;">
        <div class="card-body">
          <h4 class="card-title">タイトル：{{ item.title }}</h4>
          <p class="card-text pt-2">期限：{{ item.date }}</p>
          <div class="d-flex justify-content-end">
            <nuxt-link class="btn btn-secondary" to="/">戻る</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const item = ref({});
  
  onMounted(() => {
    const itemId = this.$route.params.id;
    item.value = getItemDetails(itemId);
  });
  
  function getItemDetails(itemId) {
    const ls = localStorage.getItem('items');
    const items = JSON.parse(ls) || [];
    return items.find((v) => v.id === itemId) || {};
  }
  </script>
  