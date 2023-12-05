<template>
  <div class="card w-50 mt-5" style="margin: auto;" v-for="item in items" :key="item.id">
    <div class="card-body">
      <h4 class="card-title">タイトル：{{ item.title }}</h4>
      <p class="card-text pt-2">期限：{{ item.date }}</p>
      <div class="d-flex justify-content-end flex-wrap">
        <nuxt-link class="btn btn-sm btn-secondary" role="button" @click="check(item.id)" to="/about">詳細</nuxt-link>
        <nuxt-link class="btn btn-sm btn-success" @click="onEdit(item.id)" to="/detail">編集</nuxt-link>
        <button class="btn btn-sm btn-danger" @click="check(item.id)">編集テスト</button>
        <button class="btn btn-sm btn-danger" @click="deleteItem(item)">削除</button>
      </div>
    </div>
  </div>

  <p>{{editTitle}}</p>
  <p>{{editDate}}</p>
  <p>{{editContent}}</p>
  
</template>

<script setup>

const items = ref([])
onMounted(() => {
  const ls = localStorage.getItem('items');
  items.value = JSON.parse(ls) || [];
})

let  editTitle= ref('');
let  editDate= ref('');
let  editContent= ref('');

function about(item) {
  const index = items.value.findIndex((v) => v.id === item.id);

}

function check(id) {
  const items = ref(JSON.parse(localStorage.getItem('items')) || []);
  const item = items.value.find((v) => v.id === id);
  editTitle.value = item.title;
  editDate.value = item.date;
  editContent.value = item.content;
  const index = items.value.findIndex((v) => v.id === id);
  items.value.splice(index, 1);
  localStorage.setItem('items', JSON.stringify(items.value));
  return {
    editTitle,
    editDate,
    editContent
};

}

function deleteItem(item) {
  if (!confirm('削除しますか？')) return;
  const index = items.value.findIndex((v) => v.id === item.id);
  items.value.splice(index, 1);
  localStorage.setItem('items', JSON.stringify(items.value));
}
</script>
