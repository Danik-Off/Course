<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="back"></div>
    
    <nav>
      <ul class="menu">
        <hr />
        <RouterLink to="/">Главная</RouterLink>
        <RouterLink to="/speakers">Корзина</RouterLink>
        <RouterLink to="/:id"></RouterLink>
                <hr />
        <button class="videoControlButtton"></button>
      </ul>
    </nav>
  </header>
  <div class="main">
    <RouterView />
  </div>
</template>

<style scoped lang="scss">

</style>
