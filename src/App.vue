<script setup>
import {RouterView } from 'vue-router';
import Header from './components/header.vue'
import Footer from './components/Footer.vue';
</script>

<template>
  <div id="content">
  <Header></Header>
  <hr>
  <div class="main">
    <RouterView />
  </div>
  
  <Footer/>
</div>
</template>

<style scoped lang="scss">
#content
{
  display: block;
  height: 100%;
  hr{
    max-width: none;
  }
  *{
    max-width: 1600px;
    margin-left:auto ;
    margin-right:auto ;
  }
}

</style>
