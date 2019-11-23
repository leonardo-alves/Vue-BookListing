<template>
  <div>
    <h1>{{title}}</h1>
  </div>
</template>
<script>
export default {
  name: 'BookLis',
  data() {
    return {
      title: 'all books',
    }
  }
}
</script>
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
</style>