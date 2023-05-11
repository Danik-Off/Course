export default function Api() {
    this.cart=[];
    this.data =  [
        {
          id:21972830,
          imgUrl: "images/image_1.png",
          brand: "Каменный остров",
          price: "30000",
          description:
            "Инновации и функциональность находятся в приоритете у Каменного острова, о чем свидетельствует этот жилет",
          specification: "Жилет с нашивкой компасом ",
        },
        {
            id:21972812,
            imgUrl: "images/image_1.png",
            brand: "Каменный остров",
            price: "30000",
            description:
              "Инновации и функциональность находятся в приоритете у Каменного острова, о чем свидетельствует этот жилет",
            specification: "Жилет с нашивкой компасом ",
          }, {
            id:21972844,
            imgUrl: "images/image_1.png",
            brand: "Каменный остров",
            price: "30000",
            description:
              "Инновации и функциональность находятся в приоритете у Каменного острова, о чем свидетельствует этот жилет",
            specification: "Жилет с нашивкой компасом ",
          }, {
            id:219728152,
            imgUrl: "images/image_1.png",
            brand: "Каменный остров",
            price: "30000",
            description:
              "Инновации и функциональность находятся в приоритете у Каменного острова, о чем свидетельствует этот жилет",
            specification: "Жилет с нашивкой компасом ",
          }, {
            id:219727660,
            imgUrl: "images/image_1.png",
            brand: "Каменный остров",
            price: "30000",
            description:
              "Инновации и функциональность находятся в приоритете у Каменного острова, о чем свидетельствует этот жилет",
            specification: "Жилет с нашивкой компасом ",
          },
       
      ];
    this.getById = (id)=>{
      return this.data.filter(item=>item.id==id);
    }
    this.get = (count)=>
    {
      if(count){
        return this.data.slice(0,4);
      }
        return this.data;
    }
    this.getCart = ()=>{
      const data =JSON.parse(localStorage.getItem("cart"))
      if(data)
      {
        return data;
      }
      return [];
    }
    this.addToCart = (id,size)=>{
      const cartProducts = JSON.stringify([...this.getCart(),{id:Date.now(),productId:id,size:size}]);
      localStorage.setItem("cart",cartProducts);
    }
    this.deleteFromCart = (id)=>{
      const cartProducts = JSON.stringify(this.getCart().filter(i=>i!==id));
      localStorage.setItem("cart",cartProducts);
    }
    this.login = ()=>{}

}
