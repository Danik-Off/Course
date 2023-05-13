
<template>
  <div class="v114_443">
    <div class="v113_2">
      <img class="v113_3" :src="imgUrl" />
      
      <div class="v113_19">
        <div class="v113_11">
          <span class="v113_5">{{price}} руб</span>
          <div class="v113_6">
            <div class="v113_7">
              <span class="v113_8">Бренд</span
              ><span class="v113_9">{{brand}}</span>
            </div>
            <span class="v113_10">{{ specification }}</span>
            <div class="v113_21">
              <span class="v113_22">Размер</span>
              <span class="v113_23">{{ size }}</span>
              <span class="v114_427">Изменить</span>
            </div>
          </div>
        </div>
        <div class="v113_12">
          <span class="v113_13">Доставка займёт от 5 до 10 дней</span>
        </div>
      </div>
    </div>
   
  </div>
</template>
<style lang="scss">
.v114_443 {
  width: 100%;
  height: 320px;
  background: url("../images/v114_443.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  margin: 24px;
  opacity: 1;
  position: absolute;
 
  left: 0px;
  overflow: hidden;
}
.v113_2 {
  width: 100%;
  height: 320px;
  background: rgba(255, 255, 255, 1);
  padding: 24px 24px;
  margin: 32px;
  opacity: 1;
  position: absolute;
  
  left: 0px;
  overflow: hidden;
}
.v113_3 {
  width: 240px;
  height: 272px;
  background: url("../images/v113_3.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  margin: 10px;
  opacity: 1;
  position: absolute;
  top: 24px;
  left: 24px;
  overflow: hidden;
}
.v113_4 {
  width: 240px;
  height: 272px;
  background: url("../images/v113_4.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  
  left: 0px;
  overflow: hidden;
}
.v113_19 {
  width: 780px;
  height: 272px;
  background: url("../images/v113_19.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  margin: 16px;
  opacity: 1;
  position: absolute;
  top: 24px;
  left: 296px;
  overflow: hidden;
}
.v113_11 {
  width: 780px;
  height: 136px;
  background: url("../images/v113_11.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  margin: 16px;
  opacity: 1;
  position: absolute;
  
  left: 0px;
  overflow: hidden;
}
.v113_5 {
  width: 780px;
  color: rgba(13, 19, 32, 1);
  position: absolute;
  
  left: 0px;
  font-family: Inter;
  font-weight: Medium;
  font-size: 18px;
  opacity: 1;
  text-align: left;
}
.v113_6 {
  width: 780px;
  height: 76px;
  background: url("../images/v113_6.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  margin: 8px;
  opacity: 1;
  position: absolute;
  top: 44px;
  left: 0px;
  overflow: hidden;
}
.v113_7 {
  width: 780px;
  height: 20px;
  background: url("../images/v113_7.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  margin: 4px;
  opacity: 1;
  position: absolute;
  
  left: 0px;
  overflow: hidden;
}
.v113_8 {
  width: 44px;
  color: rgba(102, 112, 133, 1);
  position: absolute;
  
  left: 0px;
  font-family: Inter;
  font-weight: Medium;
  font-size: 14px;
  opacity: 1;
  text-align: left;
}
.v113_9 {
  width: 732px;
  color: rgba(53, 65, 83, 1);
  position: absolute;
  
  left: 48px;
  font-family: Inter;
  font-weight: Medium;
  font-size: 14px;
  opacity: 1;
  text-align: left;
}
.v113_10 {
  width: 780px;
  color: rgba(102, 112, 133, 1);
  position: absolute;
  top: 28px;
  left: 0px;
  font-family: Inter;
  font-weight: Regular;
  font-size: 14px;
  opacity: 1;
  text-align: left;
}
.v113_21 {
  width: 780px;
  height: 20px;
  background: url("../images/v113_21.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  margin: 4px;
  opacity: 1;
  position: absolute;
  top: 56px;
  left: 0px;
  overflow: hidden;
}
.v113_22 {
  width: 52px;
  color: rgba(102, 112, 133, 1);
  position: absolute;
  
  left: 0px;
  font-family: Inter;
  font-weight: Medium;
  font-size: 14px;
  opacity: 1;
  text-align: left;
}
.v113_23 {
  width: 19px;
  color: rgba(53, 65, 83, 1);
  position: absolute;
  
  left: 56px;
  font-family: Inter;
  font-weight: Medium;
  font-size: 14px;
  opacity: 1;
  text-align: left;
}
.v114_427 {
  width: 68px;
  color: rgba(102, 112, 133, 1);
  position: absolute;
  
  left: 79px;
  font-family: Inter;
  font-weight: Medium;
  font-size: 14px;
  opacity: 1;
  text-align: left;
}
.v113_12 {
  width: 780px;
  height: 28px;
  background: url("../images/v113_12.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  margin: 16px;
  opacity: 1;
  position: absolute;
  top: 152px;
  left: 0px;
  overflow: hidden;
}
.v113_13 {
  width: 780px;
  color: rgba(13, 19, 32, 1);
  position: absolute;
  
  left: 0px;
  font-family: Inter;
  font-weight: Medium;
  font-size: 18px;
  opacity: 1;
  text-align: left;
}
</style>
<script>
export default {
  props: [
    "id",
    "brand",
    "imgUrl",
    "price",
    "description",
    "specification",
    "onClick",
  ],
};
</script>
