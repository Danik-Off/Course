<template>
  <div class="cardItem" :id="id" @click="onClick">
    <div class="image">
      <img v-bind:src="imgUrl" />

      <div class="inf">
        
        <h2>{{ brand }}</h2>

        <p>{{ description }}</p>
        <div class="backgroundInf"></div>
      </div>
    </div>
    <span class="price">{{ price }} руб</span>
    <div>
      <div>
        <label>Бренд </label>
        <span>{{ brand }}</span>
      </div>
      <label>{{ specification }}</label>
    </div>
  </div>
</template>
<style lang="scss">
.cardItem {
  display: flex;
  flex-direction: column;

  background-color: rgba(255, 255, 255, 1);
  color: #000000;
  width: 25em;
  padding: 0;
  margin: 0;

  .image {
    position: relative;
    .inf {
      display: none;
      position: absolute;
      bottom: 0;
      padding-bottom: 3em;
      width: 100%;
      color: #354153;
      
      z-index: 0;
      h2,p{
        padding: 0 6%;
      }
    }
    .backgroundInf {
      
      position: inherit;
      background: rgba(255, 255, 255, 0.7);
      backdrop-filter: blur(10px);
      height: 100%;
      width: 100%;
      top:0;
      z-index: -1;
    }
    img {
      object-fit: contain;
      height: 100%;
      width: 100%;
    }
  }

  .price {
    margin: 1.5ex 0;
    font-family: "Inter";
    font-style: normal;
    font-size: x-large;
  }
  :hover{
    .inf{
      display: block;
    }
  }
}
label {
  font-family: "Inter";
  font-style: normal;

  color: #667085;
}
</style>
<script>
export default {
  props: ["id","brand", "imgUrl", "price", "description", "specification","onClick"],
};
</script>
