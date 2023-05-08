<script setup>
import {RouterView } from 'vue-router';
import Header from './components/header.vue'
import Footer from './components/Footer.vue';
</script>

<template>
  <div id="content">
  <Header></Header>
  <div class="main">
    <RouterView />
  </div>
  <footer/>
</div>
</template>

<style scoped lang="scss">

</style>
