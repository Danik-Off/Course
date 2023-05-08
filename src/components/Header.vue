<script>
import { RouterLink } from "vue-router";
</script>
<template>
  <header>
    <nav>
      <RouterLink   to="/"  ><img src="/Vector.svg"/><span>Курсовой проект</span></RouterLink>
      <RouterLink   to="/"  ><span>Тоооооооо</span></RouterLink>
      <div >
        <RouterLink   to="/Login"><img src="../assets/login.svg"/></RouterLink>
        <RouterLink   to="/:id"><img src="../assets/cart.svg"/></RouterLink>
      </div>
    </nav>
  </header>
</template>
<style lang="scss">
nav{
  border-bottom: 1px solid black;
  text-decoration: none;
  display: flex;
     justify-content: space-between;
     align-items: center;
     flex-wrap: wrap; 
     align-content: space-between;
  padding: 1em;

  div{
    display: flex;
    a{
      display: flex;
    text-decoration: none;
    height: 100%;
    padding: 0;
    margin: 10px;
    align-items: center;
    }
  }
  a{
    display: flex;
    text-decoration: none;
    height: 100%;
    padding: 0;
    margin: 0;
    align-items: center;
    img{
      display: flex;
      object-fit: contain;
    }
    span{
      display: flex;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  text-align: center;
  color: #354153;
  text-decoration: none;
    }
  }
  
 
}

</style>
