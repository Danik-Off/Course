<script setup>
import {RouterView } from 'vue-router';
import Header from './components/Header.vue'
import Footer from './components/Footer.vue';
import Login from './components/Login.vue';


</script>

<template>
  
  <div id="content">
    <Login @click="Login.showOnClick"></Login>
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
  position: relative;
  height: 100%;
  width: 100%;
  
  hr{
    max-width: none;
    margin: 0;
  }
  .main,header,footer{
    padding: 0 4em;
    max-width: 1920px;
    margin-left:auto ;
    margin-right:auto ;
  }
  footer{
    
    bottom: 0;
  }
}

</style>
