<script>
import { RouterLink } from "vue-router";
</script>
<template>
  <header>
    <nav>
      <RouterLink   to="/"  ><img src="/Vector.svg"/><span>Курсовой проект</span></RouterLink>
      <div >
        <RouterLink   to="/Login"><img src="../assets/login.svg"/></RouterLink>
        <RouterLink    to="/Cart"><img src="../assets/cart.svg"/></RouterLink>
      </div>
    </nav>
    
  </header>
</template>
<style lang="scss">


nav{
 
  text-decoration: none;
  display: flex;
     justify-content: space-between;
     align-items: center;
     flex-wrap: wrap; 
     align-content: space-between;
  padding: 1em;

  div{
    display: flex;
    align-items: flex-end;
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
