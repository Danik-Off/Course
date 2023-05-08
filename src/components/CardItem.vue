<template>
  <div class="cardItem">
    <img v-bind:src="imgUrl" />
    <span class="price">{{ price }} руб</span>
    <div>
      <div>
        <label>Бренд  </label>
        <span>{{brand}}</span>
      </div>
      <label>{{ shortDescription }}</label>
    </div>
  </div>
</template>
<style lang="scss">
.cardItem {
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 1);
  color: black;
  width: 20em;
  height: 30em;
  padding: 0;
  margin: 0;
  img {
    object-fit: contain;
    height: 100%;
    width: 100%;
  }
  .price{
   margin: 1.5ex 0;
    font-family: 'Inter';
font-style: normal;
font-size:x-large;
   

  }
}
label
{
  font-family: 'Inter';
  font-style: normal;

  color: #667085;
}
</style>
<script>
export default {
  props:["brand","imgUrl","price","description","specification"]
};
</script>
