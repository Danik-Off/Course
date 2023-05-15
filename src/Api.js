export default function Api() {
  this.cart = [];
  this.data = [
    {
      id: 21972830,
      imgUrl: "images/image_1.png",
      photos: [
        "product/stone_island/image_1.png",
        "product/stone_island/image 5.png",
        "product/stone_island/image 7.png",
        "product/stone_island/image 9.png",
      ],
      brand: "Каменный остров",
      price: "30000",
      description:
        "Инновации и функциональность находятся в приоритете у Каменного острова, о чем свидетельствует этот жилет",
      specification: "Жилет с нашивкой компасом ",
    },
    {
      id: 21972812,
      imgUrl: "product/ami_paris/image 14.png",
      brand: "АМИ Париж",
      photos: [
        "product/ami_paris/image 14.png",
        "product/ami_paris/image 15.png",
        "product/ami_paris/image 16.png",
        "product/ami_paris/image 17.png",
      ],
      price: "18800",
      description:
        "В этой модели АМИ Париж представляет смелый взгляд на классический силуэт рубашки",
      specification: "Полосатая рубашка с коротким рукавом",
    },
    {
      id: 21972844,
      imgUrl: "product/in_square/image 22.png",
      brand: "Вквадрате2",
      photos: [
        "product/in_square/image 22.png",
        "product/in_square/image 23.png",
        "product/in_square/image 24.png",
        "product/in_square/image 25.png",
      ],
      price: "47300",
      description: "Сделано в Италии",
      specification: "Укороченные брюки с вышитым логотипом",
    },
    {
      id: 219728152,
      imgUrl: "product/akne_studia/image 30.png",
      brand: "Акне Студия",
      photos: [
        "product/akne_studia/image 30.png",
        "product/akne_studia/image 31.png",
        "product/akne_studia/image 32.png",
        "product/akne_studia/image 33.png",
      ],
      price: "19000",
      description: "Лацканы из светло-серой шерсти в вертикальную полоску",
      specification: "Полосатый двубортный блейзер",
    },
    // {
    //   id:219727660,
    //   imgUrl: "images/image_1.png",
    //   brand: "Каменный остров",
    //   price: "30000",
    //   description:
    //     "Инновации и функциональность находятся в приоритете у Каменного острова, о чем свидетельствует этот жилет",
    //   specification: "Жилет с нашивкой компасом ",
    // },
  ];
  this.getById = (id) => {
    return this.data.filter((item) => item.id == id);
  };
  this.get = (count) => {
    if (count) {
      return this.data.slice(0, 4);
    }
    return this.data;
  };
  this.getCart = () => {
    const data = JSON.parse(localStorage.getItem("cart"));
    if (data) {
      return data;
    }
    return [];
  };
  this.addToCart = (id, size) => {
    const cartProducts = JSON.stringify([
      ...this.getCart(),
      { id: Date.now(), productId: id, size: size },
    ]);
    localStorage.setItem("cart", cartProducts);
  };
  this.deleteFromCart = (id) => {
    const cartProducts = JSON.stringify(this.getCart().filter((i) => i !== id));
    localStorage.setItem("cart", cartProducts);
  };
  this.login = () => {};
}
