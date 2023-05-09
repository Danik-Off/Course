<script>
import CardItem from "../components/CardItem.vue";
import Api from "../Api.js"
export default {

 
  name: "my-component",
  data() {
    return {
      cards:[]
    };
  },
  beforeMount(){console.log("test");this.loadCards()},
  components: { CardItem },
  methods: {
        loadCards()
        {
         const api = new Api();
         this.cards = api.get();
        },
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
