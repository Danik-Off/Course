<script setup>
import {RouterView } from 'vue-router';
import Header from './components/header.vue'
</script>

<template>
  <Header></Header>
  <div class="main">
    <RouterView />
  </div>
</template>

<style scoped lang="scss">

</style>
