<script>
import CardItem from "../components/CardItem.vue";
import CartItem from "../components/CartItem.vue";
import Api from "../Api";
import router from "../router";
export default {
  data() {
    return {
      cards: [],
      cartProducts: [],
      summ: 750,
    };
  },

  beforeMount() {
    console.log("test");
    this.loadCards();
  },
  components: { CardItem, CartItem },
  methods: {
    loadCards() {
      const api = new Api();
      this.cards = api.get(4);
      const idCPr = api.getCart();
      this.cartProducts = idCPr.map((i) =>
        Object.assign(api.getById(i.productId)[0], { size: i.size })
      );
      this.summ += this.cartProducts.reduce(
        (accumulator, currentValue) => accumulator + +currentValue.price,0
      );

      console.log(this.cartProducts);
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
  <div>
    <h1>Корзина</h1>
    <div v-if="cartProducts.length === 0">
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
      <ul id="cardsProducts" style="position: relative">
        <li v-for="card in cartProducts">
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
      <div class="v114_442">
        <div class="v114_441">
          <div class="v114_440">
            <span class="v113_24">Итого</span
            ><span class="v113_29">К оплате {{ summ }} руб</span>
          </div>
          <div class="v113_35">
            <div v-for="card in cartProducts">
              <span class="v113_32">{{card.specification}}</span
                ><span class="v113_34">{{ card.price }} руб</span>
              </div>
           
          </div>
          <div class="v113_40">
            <span class="v113_41">Доставка</span
            ><span class="v113_42">750 руб</span>
          </div>
        </div>
        <div class="v113_47">
          <span class="v113_48"
            >Чтобы продолжить оформление заказа, необходимо</span
          ><span class="v113_49">войти или зарегистрировать аккаунт</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.v114_442 {
  width: 476px;
  height: 320px;
  background: url("../images/v114_442.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  margin: 72px;
  opacity: 1;
  position: absolute;
  top: 0px;
  left: 1124px;
  overflow: hidden;
}
.v114_441 {
  width: 476px;
  height: 200px;
  background: url("../images/v114_441.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 0px;
  left: 0px;
  overflow: hidden;
}
.v114_440 {
  width: 476px;
  height: 88px;
  background: url("../images/v114_440.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 0px;
  left: 0px;
  overflow: hidden;
}
.v113_24 {
  width: 476px;
  color: rgba(53, 65, 83, 1);
  position: absolute;
  top: 0px;
  left: 0px;
  font-family: Inter;
  font-weight: Regular;
  font-size: 24px;
  opacity: 1;
  text-align: left;
}
.v113_29 {
  width: 476px;
  color: rgba(13, 19, 32, 1);
  position: absolute;
  top: 32px;
  left: 0px;
  font-family: Inter;
  font-weight: Medium;
  font-size: 24px;
  opacity: 1;
  text-align: left;
}
.v113_35 {
  width: 476px;
  height: 56px;
  background: url("../images/v113_35.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  padding: 16px 0px;
  opacity: 1;
  position: absolute;
  top: 88px;
  left: 0px;
  overflow: hidden;
}
.v113_32 {
  width: 390px;
  color: rgba(102, 112, 133, 1);
  position: absolute;
  top: 16px;
  left: 0px;
  font-family: Inter;
  font-weight: Regular;
  font-size: 16px;
  opacity: 1;
  text-align: left;
}
.v113_34 {
  width: 86px;
  color: rgba(13, 19, 32, 1);
  position: absolute;
  top: 16px;
  left: 390px;
  font-family: Inter;
  font-weight: Medium;
  font-size: 16px;
  opacity: 1;
  text-align: left;
}
.v113_40 {
  width: 476px;
  height: 56px;
  background: url("../images/v113_40.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  padding: 16px 0px;
  opacity: 1;
  position: absolute;
  top: 144px;
  left: 0px;
  overflow: hidden;
}
.v113_41 {
  width: 414px;
  color: rgba(102, 112, 133, 1);
  position: absolute;
  top: 16px;
  left: 0px;
  font-family: Inter;
  font-weight: Regular;
  font-size: 16px;
  opacity: 1;
  text-align: left;
}
.v113_42 {
  width: 62px;
  color: rgba(13, 19, 32, 1);
  position: absolute;
  top: 16px;
  left: 414px;
  font-family: Inter;
  font-weight: Medium;
  font-size: 16px;
  opacity: 1;
  text-align: left;
}
.v113_47 {
  width: 476px;
  height: 48px;
  background: url("../images/v113_47.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 272px;
  left: 0px;
  overflow: hidden;
}
.v113_48 {
  width: 476px;
  color: rgba(102, 112, 133, 1);
  position: absolute;
  top: 0px;
  left: 0px;
  font-family: Inter;
  font-weight: Regular;
  font-size: 16px;
  opacity: 1;
  text-align: left;
}
.v113_49 {
  width: 295px;
  color: rgba(53, 65, 83, 1);
  position: absolute;
  top: 24px;
  left: 0px;
  font-family: Inter;
  font-weight: Medium;
  font-size: 16px;
  opacity: 1;
  text-align: left;
}
</style>
