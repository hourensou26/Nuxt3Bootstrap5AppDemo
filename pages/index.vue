<template>
  <div class="container-fluid">
    <h1 class="m-5">予定アプリ</h1>
    <nuxt-link class="btn-m-3 btn btn-primary" role="button" to="/create">新規作成</nuxt-link>
  </div>

  <div class="m-5" style="text-align: center;">
    <h2>予定一覧</h2>
    <h3>{{ dataList.title }}</h3>
    <p>{{ savedData.date }}</p>
    <p>{{ savedData.content }}</p>
  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue';
  import { getListData } from '~/composables/list';

  const savedData = ref(getListData());

  onMounted(() => {
    const updateData = () => {
      savedData.value = getListData();
    };

   setInterval(updateData, 1000);
  });
</script>
