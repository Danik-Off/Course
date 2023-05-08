<script>
import CardItem from "../components/CardItem.vue";

export default {
  name: "my-component",
  data() {
    return {
      cards: [
        { img: "link", price: "100", description: "" },
        { img: "link", price: "100", description: "" },
        { img: "link", price: "100", description: "" },
        { img: "link", price: "100", description: "" },
        
      ],
    };
  },
  components: { CardItem },
};
</script>
<template>
  <ul id="cardsProducts">
    <li v-for="card in cards">
      <CardItem></CardItem>
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
