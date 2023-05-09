<script>
import CardItem from "../components/CardItem.vue";

export default {

 
  name: "my-component",
  data() {
    return {
      cards: [
        {
          id:21972830,
          imgUrl: "images/image_1.png",
          brand: "Каменный остров",
          price: "30000",
          description:
            "Инновации и функциональность находятся в приоритете у Каменного острова, о чем свидетельствует этот жилет",
          specification: "Жилет с нашивкой компасом ",
        },
       
      ],
    };
  },
  components: { CardItem },
  methods: {
        openCardProduct(e)
        {
          const productCard = e.currentTarget;
          console.log("open product id:"+productCard.id);
            
        }
    }


};
</script>
<template>
  <ul id="cardsProducts">
    <li v-for="card in cards">
      <CardItem
        :id="card.id"
        :imgUrl="card.imgUrl"
        :brand="card.brand"
        :specification="card.specification"
        :price="card.price"
        :description="card.description"
        :onClick="openCardProduct"
      ></CardItem>
    </li>
  </ul>
</template>
<style lang="scss">
#cardsProducts {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-left: 0;
  li {
    list-style: none;
    margin: 1em;
  }
}
</style>
