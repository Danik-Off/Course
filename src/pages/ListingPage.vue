<script>
import CardItem from "../components/CardItem.vue";

export default {
  name: "my-component",
  data() {
    return {
      cards: [
        {
          imgUrl: "images/image_1.png",
          brand: "Каменный остров",
          price: "30000",
          description: "Инновации и функциональность находятся в приоритете у Каменного острова, о чем свидетельствует этот жилет",
          specification:"Жилет с нашивкой компасом "
        },
        
      ],
    };
  },
  components: { CardItem },
};
</script>
<template>
  <ul id="cardsProducts">
    <li v-for="card in cards">
      <CardItem :imgUrl="card.imgUrl" :brand="card.brand" :specification="card"></CardItem>
    </li>
  </ul>
</template>
<style lang="scss">
#cardsProducts {
  display: flex;
  flex-wrap: wrap;

  li {
    list-style: none;
    margin: 1em;
  }
}
</style>
