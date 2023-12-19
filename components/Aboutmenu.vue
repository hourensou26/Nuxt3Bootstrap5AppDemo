<template>

    <div class="card w-50 mt-5" style="margin: auto;">
        <div class="card-body">
            <h4 class="card-title">タイトル：{{}}</h4>
            <p class="card-text pt-2">期限：{{}}</p>
            <p class="card-text pt-2">詳細：{{}}</p>
            <div class="d-flex justify-content-end flex-wrap">
                <nuxt-link class="btn btn-sm btn-success" @click="edit(item)" to="/detail">編集</nuxt-link>
                <button class="btn btn-sm btn-danger" @click="deleteItem(item)">削除</button>
            </div>
        </div>
    </div>
 
</template>

