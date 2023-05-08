<template>
  <div class="cardItem">
    <img src="images/image_1.png" />
    <span class="price">30 000 руб</span>
    <div>
      <div>
        <label>Бренд</label>
        <span>Каменный остров</span>
      </div>
      <label>Жилет с нашивкой компасом</label>
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
   margin: 1em 0;
    font-family: 'Inter';
font-style: normal;
font-size: large;
    label
    {

    }

  }
}
</style>
<script>
export default {};
</script>
