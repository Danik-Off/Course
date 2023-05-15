<script>
import Api from "../Api";
import router from "../router";

export default {
  data() {
	return {
		product: {},
		showList: false,
		sizeSelected: null,
		sizeList: [
			'XS', 
			'S', 
			'M', 
			'L', 
			'XL', 
			'XXL'
		],
		
		photos: [
			'stone_island/image_1.png',
			'stone_island/image 5.png',
			'stone_island/image 7.png',
			'stone_island/image 9.png'
		],
		activePhotos:[],
		selectedPhotos: "first"
	}
  },
  created() {
    this.load();
	this.activePhotos.push(this.photos[0], this.photos[1])
  },
  methods: {
    load() {
      
		const api = new Api();
      this.product = api.getById(this.$route.params.id)[0];
	  this.photos = this.product.photos;
	  console.log(this.product);
    },

	showOnClick(){
		this.showList = !this.showList;
	},

	selectSizeOnClick(e){
		const id = e.currentTarget.id;
		//this.sizeSelected = this.sizeList[id];
		this.sizeSelected =this.sizeList[id];
		this.showList = !this.showList;
	}
	,
	addProductToCart()
	{
		const api = new Api();
		api.addToCart(this.product.id,this.sizeSelected);
		console.log(api.getCart());
	},
	selectPhotos(e){
		this.selectedPhotos = e.currentTarget.id;
		//console.log(this.selectedPhotos);

		if (this.selectedPhotos == 'first')
			this.activePhotos = [this.photos[0], this.photos[1]]
		else
			this.activePhotos = [this.photos[2], this.photos[3]]
		// if (this.selectedPhotos == "first"){
		// 	$( "#first" ).addClass( ".selected" );
		// 	$( "#second" ).addClass( ".product_inactive" );
		// } else{
		// 	$( "#first" ).addClass( ".product_inactive" );
		// 	$( "#second" ).addClass( ".product_selectedPhotos" );
		// }
	},
	

  },
};


</script>

<template>
	<div class="product">
		<div class="product_content">
			<div class="product_header">
				<div class="product_heading">
					<span class="product_name">{{ product.brand}}</span>
					<span class="product_support_text">{{product.specification}}</span>
				</div>
				<span class="product_description">
					{{ product.description}}
				</span>
				<span class="product_price">
					{{ product.price }} руб
				</span>
			</div>
			<div class="product_action">
				<div class="product_dropdownSize" 
					v-on:click="showOnClick"
					v-bind:style="{background: showList ? '#F2F4F7' : '#FFFFFF'}"
				>
					<span>{{sizeSelected?sizeSelected:"Выберите размер"}}</span>
					<img src="src/assets/Icon_arrow.svg"
						v-bind:style="{transform: showList ? 'rotate(3.142rad)' : ''}"
					>
				</div>
				<ul v-if="showList" class="product_sizeList">
					<li v-for="value, index in sizeList" 
					    :id="index"
						@click="selectSizeOnClick"
						
					>
						<span >{{value}}</span>
						<div  class="product_checkbox"
							v-show="sizeSelected == value"
						>
							<img  src="src/assets/Icon_check.svg">
						</div>

					</li>

				</ul> 
				<button @click="addProductToCart" v-if="!showList" class="product_addToCart"><span>Добавить в корзину</span></button>
			</div>
		</div>
		
		
		
		<div class="product_gallery">
			<div class="product_gallery_photos">
				<img class="product_photo" :src="activePhotos[0]">
				<img class="product_photo" :src="activePhotos[1]">
			</div>
			<div class="product_slider">
				<div id="first" 
					 :class="{selected: this.selectedPhotos=='first'? true:false}"
					@click="selectPhotos"
				>
					<img :src="photos[0]">
					<img :src="photos[1]">
				</div>
				<div id="second" 
					:class="{selected: this.selectedPhotos=='second'? true:false}"
					@click="selectPhotos"
				>
					<img :src="photos[2]">
					<img :src="photos[3]">
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
.product {

	background: #FFFFFF;
	display: inline-flex;
	flex-direction: row-reverse;
	align-items:flex-start;
	gap: 4em;
	padding-top: 2em;
	
	justify-content: space-around;

	.product_content {

		

		.product_header {

			display: flex;
			flex-direction: column;
			align-items: flex-start;
			gap: 2.5em;

			flex: none;
			order: 0;
			flex-grow: 0;

			.product_heading {

				display: flex;
				flex-direction: column;
				align-items: flex-start;

				width: 18em;
				height: 4.375em;
				flex: none;
				order: 0;
				flex-grow: 0;

				.product_name {
					color: rgba(53.00000064074993, 65.0000037252903, 83.00000265240669, 1);
					width: 18em;
					height: 2.5em;
					text-align: left;
					font-size: 2em;
					letter-spacing: 0;

					font-family: 'Inter';
					font-style: normal;
					font-weight: 600;
					font-size: 2em;
					line-height: 100%;

				}

				.product_support_text {
					color: rgba(102.00000151991844, 112.000000923872, 133.00000727176666, 1);
					width: 18em;
					height: 1.875em;
					top: 2.5em;
					text-align: left;
					font-size: 1.25em;
					font-family: 'Inter';
					font-style: normal;
					font-weight: 400;
					line-height: 100%;
				}
			}

			.product_description {
				color: rgba(102.00000151991844, 112.000000923872, 133.00000727176666, 1);
				width: 40.5em;
				height: 3.75em;
				top: 6.875em;
				text-align: left;

				font-family: 'Inter';
				font-style: normal;
				font-weight: 400;
				font-size: 1.25em;
				line-height: 150%;
			}

			.product_price {
				color: rgba(13.174998834729195, 19.762502051889896, 32.93749898672104, 1);
				width: 40.5em;
				height: 1.75em;
				top: 13.125em;
				text-align: left;

				font-family: 'Inter';
				font-style: normal;
				font-weight: 600;
				font-size: 2.25em;
				line-height: 150%;
			}
		}

		.product_action {

			display: flex;
			flex-direction: column;
			align-items: flex-start;
			//gap: 1em;

			flex: none;
			order: 1;
			flex-grow: 0;

			.product_dropdownSize {

				box-sizing: border-box;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				padding: 0.75em 1em;
				gap: 0.5em;
				border: 1px solid #EAECF0;
				border-radius: 0.5em;
				//background: #FFFFFF;
				width: 12.75em;
				height: 3em;
				border-top-left-radius: 0.5em;
				border-top-right-radius: 0.5em;
				border-bottom-left-radius: 0.5em;
				border-bottom-right-radius: 0.5em;
				align-items: center;
				margin-top: 32px;
				flex: none;
				order: 0;
				align-self: stretch;
				flex-grow: 0;

				span {
					color: rgba(53.00000064074993, 65.0000037252903, 83.00000265240669, 1);
					

					font-family: 'Inter';
					font-style: normal;
					font-weight: 600;
					font-size: 1em;
					line-height: 1.5em;
					
					text-align: left;
				}



			}

			.product_sizeList{
				display: flex;
				flex-direction: column;
				align-items: flex-start;
				padding: 0.375em;
				margin-top: 0px;
				//gap: 0.25em;

				
				width: 20em;
				//height: 15.5em;
				//display: none;

				background: #FFFFFF;
				box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.08);
				border-radius: 0.5em;

				li{
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					align-items: center;
					padding: 0.2em 1em;
					gap: 0.5em;

					width: 19.25em;
					height: 2.25em;

					background: #FFFFFF;
					border-radius: 0.375em;

					flex: none;
					order: 2;
					align-self: stretch;
					flex-grow: 0;

					.product_checkbox{
						width: 16px;
						height: 16px;

						align-items: center;

					

						flex: none;
						order: 1;
						flex-grow: 0;
						background: #0D1421;
						border-radius: 999px;

						img{
							//align-self: center;
							margin: 3px;
							margin-top: 4px;
    						display: block;
							//border: 2px solid #FFFFFF;
						}
					}

				}

				li:hover{
					background: #F2F4F7;
					
				}
				
			}

			.product_addToCart {

				background-color: rgba(13.174998834729195, 19.762502051889896, 32.93749898672104, 1);
				width: 15.25em;
				height: 4em;
				top: 4em;
				border-top-left-radius: 0.5em;
				border-top-right-radius: 0.5em;
				border-bottom-left-radius: 0.5em;
				border-bottom-right-radius: 0.5em;
				margin-top: 1em;

				//display: none;

				span {
					color: rgba(255, 255, 255, 1);
					width: 10em;
					height: 1.5em;
					left: 1.375em;
					top: 0.75em;
					text-align: left;
					font-size: 1.20em;
					font-family: 'Inter';
					font-style: normal;
					font-weight: 600;
					line-height: 1.5em;
				}
			}


		}

	}

	.product_gallery{
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		padding: 0px;
		gap: 24px;

		.product_gallery_photos{
			display: flex;
			flex-direction: row;
			align-items: flex-start;
			padding: 0px;
			gap: 16px;

			flex: none;
			order: 0;
			flex-grow: 0;

			.product_photo{
				width: 436px;
				height: 560px;
				flex: none;
				order: 0;
				align-self: stretch;
				flex-grow: 1;
			}



		}

		.product_slider{
			display: flex;
			flex-direction: row;
			align-items: flex-start;
			padding: 0px;
			gap: 16px;

			width: 296px;
			height: 88px;
			flex: none;
			order: 1;
			flex-grow: 0;



			#first{
				display: flex;
				flex-direction: row;
				align-items: flex-start;
				padding: 0px;
				gap: 16px;

				width: 140px;
				height: 88px;
				
				flex: none;
				order: 0;
				flex-grow: 0;

				img{
					display: flex;
					flex-direction: row;
					justify-content: center;
					align-items: center;
					padding: 0px;
					gap: 10px;

					width: 62px;
					height: 88px;

					flex: none;
					order: 0;
					flex-grow: 0;
				}

				
			}

			.selected{
				border: 2px solid #0D1421;
			}

			#second{
				display: flex;
				flex-direction: row;
				align-items: flex-start;
				padding: 0px;
				gap: 16px;

				width: 140px;
				height: 88px;

				flex: none;
				order: 1;
				flex-grow: 0;

				img{
					display: flex;
					flex-direction: row;
					justify-content: center;
					align-items: center;
					padding: 0px;
					gap: 10px;

					width: 62px;
					height: 88px;
					flex: none;
					order: 0;
					flex-grow: 0;
				}

				
			}
		}


	}
}
</style>
