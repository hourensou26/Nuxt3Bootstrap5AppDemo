<template>
  <div class="card w-50 mt-5" style="margin: auto;" v-for="item in items" :key="item.id">
    <div class="card-body">
      <h4 class="card-title">タイトル：{{ item.title }}</h4>
      <p class="card-text pt-2">期限：{{ item.date }}</p>
      <p v-if="item.showDetails" class="card-text pt-2 fs-5">詳細：{{ item.content }}</p>
      <div class="d-flex justify-content-end flex-wrap">
        <button class="btn btn-sm btn-secondary" @click="about(item)">詳細</button>
        <button class="btn btn-sm btn-danger" @click="deleteItem(item)">削除</button>
      </div>
    </div>
  </div>
</template>

<script setup>
const items = ref([]);

onMounted(() => {
  const ls = localStorage.getItem('items');
  items.value = JSON.parse(ls) || [];
})

function about(item) {
  item.showDetails = !item.showDetails;
}

function deleteItem(item) {
  if (!confirm('削除しますか？')) return;
  const index = items.value.findIndex((v) => v.id === item.id);
  items.value.splice(index, 1);
  localStorage.setItem('items', JSON.stringify(items.value));
}
</script>
