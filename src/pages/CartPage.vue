<script>
import CardItem from '../components/CardItem.vue';
import Api from "../Api";
import router from "../router";
export default {

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
         this.cards = api.get(4);
        },
        openCardProduct(e)
        {
          const productCard = e.currentTarget;
          console.log("open product id:"+productCard.id);
          router.push({ name: 'product', params: { id: productCard.id } })
        }
    }


}
</script>

<template>
  <h1>Корзина</h1>
  <div >
    <hr/>
    Ваша корзина пуста
    <hr/>
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
  <div>

  </div>
  </template>
 
  <style lang="scss" >

  </style>