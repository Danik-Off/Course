<script>
import CardItem from "../components/CardItem.vue";
import router from '../router';
import Api from "../Api.js"
export default {

 
  name: "my-component",
  data() {
    return {
      cards:[],
      priceFilter: ["По умолчанию","Сначала доступные", "Сначала дорогие"],
      brandsList: ["Акне Студия","Ами Париж","Вквадрате2","Каменный остров"],
      showBrandFilter: false,
      showPriceFilter: false,
      selectedBrands: [],
      selectedPrice: "По умолчанию",
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
          router.push({ name: 'product', params: { id: productCard.id } })
        },

        openBrandFilter(){
          this.showBrandFilter = !this.showBrandFilter;
        },
        openPriceFilter(){
          this.showPriceFilter = !this.showPriceFilter;
        },

        selectBrand(e){
          const brandID = e.currentTarget.id;
          const brand = this.brandsList[brandID];
          const index = this.selectedBrands.indexOf(brand);
          if (index > -1) { // only splice array when item is found
            this.selectedBrands.splice(index, 1); // 2nd parameter means remove one item only
          } else
            this.selectedBrands.push(brand);
          console.log(brand);
          console.log(this.selectedBrands);
        },

        selectPrice(e){
          const priceID = e.currentTarget.id;
          this.selectedPrice = this.priceFilter[priceID];
          console.log(this.selectedPrice);
          this.showPriceFilter = !this.showPriceFilter;
        },

        checkBrand(brandID){
          const brand = this.brandsList[brandID];
          if (this.selectedBrands.includes(brand))
            return true;

          return false;
          
        }
    }


};
</script>
<template>
  <div class="action_header">
    <div @click="openBrandFilter" class="filter_brands">
      <img src="src/assets/Icon_brand.svg">
      <span>Фильтры</span>
    </div>
    
    <div @click="openPriceFilter" class="filter_price">
      <span>{{selectedPrice}}</span>
      <img src="src\assets\Icon_arrow.svg">
    </div>
    
  </div>

  <div class="lists">
    <ul class="brand_dropdown"
      :style="{display: showBrandFilter? 'block': 'none'}"
    >
      <li v-for="value, index in brandsList"
        :id="index"
        @click="selectBrand"
        
      >
        <div class="brand_checkbox"
          :style="{background: checkBrand(index)? '#0D1421':'#FFFFFF'}"
        >
          <img src="src\assets\Icon_check.svg">
        </div>
        <span >{{value}}</span>
      </li>
    </ul>

    <ul v-if="showPriceFilter" class="price_dropdown"
      :style="{display: showPriceFilter? 'block': 'none'}"
    >
      <li v-for="value, index in priceFilter"
        :id="index"
        @click="selectPrice"
        
      >
        
        <span >{{value}}</span>
      </li>
    </ul>
</div>

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

.lists{
  position: relative;
  display:grid;
  justify-content: space-between;
  height: 0px;
  z-index: 1000;
}

.action_header{
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .filter_brands{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 8.3125em;
    height: 2.5em;
    gap: 8px;
    padding: 0.5em 1em;

    span{
      font-family: 'Inter';
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;

      color: #354153;

    }
  }

  .filter_price{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0.5em 1em;
    gap: 0.5em;
    height: 2.5em;
    
    span{
      font-family: 'Inter';
      font-style: normal;
      font-weight: 600;
      font-size: 1em;
      line-height: 1.5em;
      color: #354153;

    }
  }
  
}

.brand_dropdown{
  //position: relative;
  z-index: 1000;
  //top: 6.875em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0px;
  margin-left: 0.375em;
  padding: 0.375em;
  //gap: 0.25em;
  width: 20em;
  height: 12em;
  background: #FFFFFF;
  box-shadow: 0px 0.25em 1em rgba(0, 0, 0, 0.08);
  border-radius: 0.5em;

  li{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 6px 16px;
    gap: 8px;

    width: 18em;
    height: 36px;

    background: #FFFFFF;
    border-radius: 6px;

    span{
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #354153;
    }

    .brand_checkbox{
      box-sizing: border-box;
      width: 1em;
      height: 1em;
      //background: #FFFFFF;
      border: 1px solid #EAECF0;
      border-radius: 4px;

      img{
        margin-left: 2px;
        //margin-right: 2px;
        margin-top: 3px;
        display: block;
      }
    }
  }
}

.price_dropdown{
  grid-column: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 0px;
  padding: 6px;
  gap: 4px;
  height: 9em;
  //position: relative;
  //top: 6.875em;
  //left: ;
  z-index: 1000;
  background: #FFFFFF;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.08);
  border-radius: 8px;

  li{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 6px 16px;
    gap: 8px;

    width: 218px;
    height: 36px;

    

    background: #FFFFFF;
    border-radius: 6px;

    span{
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;

      color: #354153;
    }
  }
}

li:hover{
  background: #F2F4F7;
  
}

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
