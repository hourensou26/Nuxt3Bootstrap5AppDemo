<template>
  <div class="container-fluid">
    <h1 class="m-5">新規作成</h1>
    <nuxt-link class="btn-m-3 btn btn-primary" role="button" to="/">トップへ</nuxt-link>
    <div class="container">
      <div class="row">
        <div class="col-md-9">
          <input type="text" class="form-control" v-model="title" placeholder="タイトル" />
        </div>
        <div class="col-md-3">
          <input type="date" class="form-control" v-model="date" placeholder="日付" />
        </div>
        <div class="col">
          <textarea class="form-control " v-model="content" placeholder="詳細"></textarea>
        </div>
      </div>
      <div class="d-grid gap-2 d-md-flex justify-content-md-end">
        <button class="btn btn-success" @click="create">新規作成</button>
        <button class="btn btn-danger" @click="cancel">キャンセル</button>
      </div>
    </div>

    <!-- 新規作成されたデータの表示 -->
    <div v-for="(item, index) in createdItems" :key="index">
      <p :id="'item-' + index">{{ item.title }} , {{ item.date }} , {{ item.content }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const title = ref('');
const date = ref('');
const content = ref('');
const createdItems = ref([]);

const create = () => {
  const data = {
    title: title.value,
    date: date.value,
    content: content.value
  };
  createdItems.value.push(data);
  console.log('Create button clicked', data);
  // フォームをクリア
  clearForm();
};

const cancel = () => {
  clearForm();
  console.log('Cancel button clicked');
};

const clearForm = () => {
  title.value = '';
  date.value = '';
  content.value = '';
};
</script>
