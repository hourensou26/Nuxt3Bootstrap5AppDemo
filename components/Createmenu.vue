<template>
  <div v-if='NotInput' class="alert alert-danger" role="alert">
    入力されていない項目があります。
  </div>

  <div class="mt-4">

    <form @submit="onSubmitForm">

      <div class="row">

        <div class="col-md-9">
          <input type="text" class="form-control" v-model="title" placeholder="タイトル">
        </div>

        <div class="col-md-3">
          <input type="date" class="form-control" v-model="date" placeholder="日付">
        </div>

        <div class="col">
          <textarea class="form-control" v-model="content" placeholder="詳細"></textarea>
        </div>

      </div>

      <div class="d-grid gap-2 d-md-flex justify-content-md-end">
        <button class="btn btn-success" type="submit">新規作成</button>
        <button class="btn btn-danger" @click="cancel">キャンセル</button>
      </div>

    </form>

  </div>
</template>

<script setup>

const title = ref('');
const date = ref('');
const content = ref('');
const NotInput = ref(false);

function onSubmitForm() {
  const items = JSON.parse(localStorage.getItem('items')) || [];

  if (title.value === '' || date.value === '' || content.value === '') {
    NotInput.value = true;
    event.preventDefault();
    return;
  }

  const TodoData = {
    id: length,
    title: title.value,
    date: date.value,
    content: content.value,
    state: statuses.NOT_START,
    onEdit: false,
  };
  items.push(TodoData);
  localStorage.setItem('items', JSON.stringify(items));
  console.log('Create button clicked', TodoData);
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
