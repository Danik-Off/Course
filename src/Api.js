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
    this.get = ()=>
    {
        return this.data ;
    }
    this.getCart = ()=>{}
    this.addToCart = ()=>{}
    this.addToCart = ()=>{}
    this.login = ()=>{}

}
