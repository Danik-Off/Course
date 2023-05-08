<script setup>
import HelloWorld from './components/HelloWorld.vue'
import cardItem from './components/cardItem.vue';

</script>

<template>   
 <cardItem></cardItem>
<ul id="example-1">
 
  <li v-for="item in items" :key="item.message">
    {{ item.message }}
  </li>
</ul>
  

</template>




