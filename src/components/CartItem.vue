
<template>
  <div class="cartItem">
    
      <img :src="imgUrl" />
      
        <div>
          <span >{{price}} руб</span>
          <div >
            <div >
              <span >Бренд</span
              ><span >{{brand}}</span>
            </div>
            <span >{{ specification }}</span>
            <div >
              <span >Размер</span>
              <span >{{ size }}</span>
              <span >Изменить</span>
            </div>
          </div>
        </div>
        <div >
          <span >Доставка займёт от 5 до 10 дней</span>
        </div>
   
    
   
  </div>
</template>
<style lang="scss">
  .cartItem{
    display: flex;
    img{
     
      height: 15rem;
    }
    
  }
</style>
<script>
export default {
  props: [
    "id",
    "brand",
    "imgUrl",
    "price",
    "description",
    "specification",
    "onClick",
  ],
};
</script>
