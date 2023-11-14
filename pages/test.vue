<template>
  <div>
    <div v-for="(item, index) in items" :key="index">
      <!-- 要素に動的にIDを付与 -->
      <p :id="'item-' + index">{{ item }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
// TypeScriptの型定義
interface MyItem {
  id: number;
  text: string;
}

// ダミーデータ
const items: MyItem[] = [
  { id: 1, text: 'アイテム1' },
  { id: 2, text: 'アイテム2' },
  { id: 3, text: 'アイテム3' },
];

// データやメソッドのロジック
</script>
