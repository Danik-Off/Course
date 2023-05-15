<template>
  <div class="cartItem">
    <div class="ds">
      <img :src="imgUrl" />

      <div>
        <div class="text">
          <div class="price">{{ price }} руб</div>
          <div>
            <span class="brand">Бренд</span><span>{{ brand }}</span>
          </div>
          <span>{{ specification }}</span>
          <div >
            <span>Размер</span>
            <span>{{ size }}</span>
            <span>Изменить</span>
          </div>
      
            <span>Доставка займёт от 5 до 10 дней</span>
        </div>
       
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.cartItem {
  width: 50vw;

  .ds{
    display: flex;

  img {

    height: 15rem;
  }
  .text {
    margin: 1vw;
    span{
      font-family: 'Inter';
font-style: normal;
    }
    border-bottom: 1px solid #EAECF0;
    }
    .b{
    color:   #EAECF0;
    }
    .price
    {
      font-family: 'Inter';
font-style: normal;
font-size:large;
color: #0D1421;
    }

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
