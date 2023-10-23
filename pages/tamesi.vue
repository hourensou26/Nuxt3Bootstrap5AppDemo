<template>
  <div>
    <p>{{ message }}</p>
    <button @click="changeMessage">メッセージを変更</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "初期メッセージ"
    };
  },
  methods: {
    changeMessage() {
      this.message = "新しいメッセージ";
    }
  }
};
</script>
