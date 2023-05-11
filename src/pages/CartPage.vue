<script>
import CardItem from "../components/CardItem.vue";
import CartItem from "../components/CartItem.vue";
import Api from "../Api";
import router from "../router";
export default {
  data() {
    return {
      cards: [],
      cartProducts:[]
    };
  },

  beforeMount() {
    console.log("test");
    this.loadCards();
 
  },
  components: { CardItem,CartItem },
  methods: {
    loadCards() {
      const api = new Api();
      this.cards = api.get(4);
      this.cartProducts = api.getCart();
      console.log(this.cartProducts)
    },
    openCardProduct(e) {
      const productCard = e.currentTarget;
      console.log("open product id:" + productCard.id);
      router.push({ name: "product", params: { id: productCard.id } });
    },
  },
};
</script>

<template>
  <h1>Корзина</h1>
  <div v-if="cartProducts.length>0">
    <hr />
    Ваша корзина пуста
    <hr />
    <div>
      <h1>Но у нас есть персональные предложения для вас</h1>
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
    </div>
  </div>
  <div v-else>
    <ul id="cardsProducts">
        <li v-for="card in cards">
          <CartItem
            :id="card.id"
            :imgUrl="card.imgUrl"
            :brand="card.brand"
            :specification="card.specification"
            :price="card.price"
            :description="card.description"
            :onClick="openCardProduct"
          ></CartItem>
        </li>
      </ul>

  </div>
</template>

<style lang="scss"></style>
