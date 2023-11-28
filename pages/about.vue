<template>
    <div class="container-fluid">
        <h1 class="m-5">詳細</h1>
        <nuxt-link class="btn-m-3 btn btn-primary" role="button" to="/">トップへ</nuxt-link>
    </div>

       <div class="card w-50 mt-5" style="margin: auto;" v-for="item in items" :key="item.id">
        <div class="card-body">
            <h4 class="card-title">タイトル：{{ index.title }}</h4>
            <p class="card-text pt-2">期限：{{ index.date }}</p>
            <p class="card-text pt-2">詳細：{{ index.content }}</p>
            <div class="d-flex justify-content-end flex-wrap">
                <nuxt-link class="btn btn-sm btn-success" @click="edit(item)" to="/detail">編集</nuxt-link>
                <button class="btn btn-sm btn-danger" @click="deleteItem(item)">削除</button>
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