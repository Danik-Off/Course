<script setup>
import {RouterView } from 'vue-router';
import Header from './components/header.vue'
import Footer from './components/Footer.vue';
</script>

<template>
  <Header></Header>
  <div class="main">
    <RouterView />
  </div>
  <footer/>
</template>

<style scoped lang="scss">

</style>
