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
  create() {
    const deta = {
      title: this.title,
      date: this.date,
      content: this.content
      }
      console.log('Create button clicked');
      }
    },
}
</script>