<template>
    <div>
      <NuxtLayout>
      <NuxtPage />
      </NuxtLayout>
    </div>
    </template>

<script>
export default {
  data() {
    return {
      title: '',
      date: '',
      content: ''
    };
  },
  methods: {
  SaveData() {
    this.SaveData = {
      title: this.title,
      date: this.date,
      content: this.content
    }
  }
  }
}
</script>