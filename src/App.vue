<template>
  <router-view />
</template>

<script setup>
onMounted(() => {
  document.documentElement.lang = 'fa'
  document.documentElement.dir = 'rtl'
})
</script>

<style scoped>
a {
  text-decoration: none;
  color: inherit;
}
button {
  font-family: inherit;
  cursor: pointer;
}
</style>
