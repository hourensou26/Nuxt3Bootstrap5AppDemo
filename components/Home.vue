<template>
  <div class="card w-50 mt-5" style="margin: auto;" v-for="item in items" :key="item.id">
    <div class="card-body">
      <h4 class="card-title">タイトル：{{ item.title }}</h4>
      <p class="card-text pt-2">期限：{{ item.date }}</p>
      <div class="d-flex justify-content-end flex-wrap">
        <nuxt-link class="btn btn-sm btn-secondary" role="button" @click="about(item)" to="/about">詳細</nuxt-link>
        <nuxt-link class="btn btn-sm btn-success" @click="onEdit(item.id)" to="/detail">編集</nuxt-link>
        <button class="btn btn-sm btn-danger" @click="onEdit(item.id)">編集テスト</button>
        <button class="btn btn-sm btn-danger" @click="deleteItem(item)">削除</button>
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

let  = ref('');
let  = ref('');
let  = ref('');

function about(item) {
  const index = items.value.findIndex((v) => v.id === item.id);

}

  function onEdit(id) {
    a = items.value[id].content;
    items.value[id].onEdit = true;
  }

function deleteItem(item) {
  if (!confirm('削除しますか？')) return;
  const index = items.value.findIndex((v) => v.id === item.id);
  items.value.splice(index, 1);
  localStorage.setItem('items', JSON.stringify(items.value));
}
</script>
