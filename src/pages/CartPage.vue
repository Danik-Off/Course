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
    <div class="cartNotEmpty" v-else>
      <ul class="cart_cardProducts" id="cardsProducts" style="position: relative">
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

      <div class="cart_summary">
        <div class="price_section">

          <div class="cart_summary_price">
            <span class="summary_heading">Итого</span>
            <span class="summaryToPay">К оплате {{ summ }} руб</span>
          </div>

          <div v-for="card in cartProducts" class="cart_summary_item">
            <span class="summary_item_specification">{{card.specification}}</span>
            <span class="summary_item_price">{{ card.price }}</span>
          </div>

          <div class="cart_summary_item">
            <span class="summary_item_specification">Доставка</span>
            <span class="summary_item_price">750 руб</span>
          </div>

          <div class="cart_tips">
            <span>Чтобы продолжить оформление заказа, необходимо</span>
            <span class="cart_link_signIn">войти или зарегистрировать аккаунт</span>
          </div>
        </div>
        

      </div>



      <!-- <div class="v114_442">
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
      </div> -->


    </div>
  </div>
</template>

<style lang="scss">

  .cartNotEmpty{
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
   

  }

  .cart_summary{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0px;
   
    //height: 320px;

    .price_section{
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 0px;

      width: 476px;
      height: 200px;

      .cart_summary_price{
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px 0px 24px;
        width: 476px;
        height: 88px;
        border-bottom: 1px solid #EAECF0;

        .summary_heading{
          width: 476px;
          height: 32px;
          font-family: 'Inter';
          font-style: normal;
          font-weight: 400;
          font-size: 24px;
          line-height: 32px;
          color: #354153;
        }

        .summaryToPay{
          width: 476px;
          height: 32px;

          font-family: 'Inter';
          font-style: normal;
          font-weight: 500;
          font-size: 24px;
          line-height: 32px;

          color: #0D1421;

        }
      }

      .cart_summary_item{
        box-sizing: border-box;

        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: 16px 0px;

        width: 476px;
        height: 56px;

        border-bottom: 1px solid #EAECF0;

        .summary_item_specification{
          width: 390px;
          height: 24px;

          font-family: 'Inter';
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;

          color: #667085;
        }

        .summary_item_price{
          width: 86px;
          height: 24px;

          font-family: 'Inter';
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 24px;

          color: #0D1421;
        }
      }

      .cart_tips{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;
  
        width: 476px;
        height: 48px;
  
        span{
          width: 476px;
          height: 24px;
  
          font-family: 'Inter';
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
  
          color: #667085;
        }
  
        .cart_link_signIn{
          width: 295px;
          height: 24px;
  
          font-family: 'Inter';
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 24px;
  
          color: #354153;
        }
      }
    }

    
  }

</style>
