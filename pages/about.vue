<template>
    <div class="container-fluid">
        <h1 class="m-5">詳細</h1>
        <nuxt-link class="btn-m-3 btn btn-primary" role="button" to="/">トップへ</nuxt-link>
    </div>

    <div class="container">
        <div class="card w-50 mb-5" style="margin: auto;" v-for="item in items">
            <div class="card-body">
                <h4 class="card-title">タイトル：{{ item.title }}</h4>
                <p class="card-text pt-2">期限：{{ item.date }}</p>
                <div class="d-flex justify-content-end flex-wrap">
                    <button class="btn btn-success" @click="edit(item)">編集</button>
                    <button class="btn btn-danger" @click="deleteItem(item)">削除</button>
                </div>
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
</script>