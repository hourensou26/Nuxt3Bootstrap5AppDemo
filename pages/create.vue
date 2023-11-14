<script setup>
import { ref } from 'vue';

const title = ref('');
const date = ref('');
const content = ref('');
</script>

<template>
    <div class="container-fluid">
        <h1 class="m-5">新規作成</h1>
        <nuxt-link class="btn-m-3 btn btn-primary" role="button" to="/">トップへ</nuxt-link>

        
    </div>
</template>


<script>
import ListCreate from '@/components/NewCreate.vue'

store.commit(title,title.value)
store.commit(date,date.value)
store.commit(content,content.value)



</script>
