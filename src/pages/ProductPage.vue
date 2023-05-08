<template>
	<div class="product">
		<div class="product_content">
			<div class="product_header">
				<div class="product_heading">
					<span class="product_name">Каменный остров</span>
					<span class="product_support_text">Жилет с нашивкой компасом</span>
				</div>
				<span class="product_description">
					Инновации и функциональность находятся в приоритете у Каменного острова, о чем свидетельствует этот жилет.
				</span>
				<span class="product_price">
					30 000 руб
				</span>
			</div>
			<div class="product_dropdownSize">
				<span>Выберите размер</span>
				<label></label>
			</div>
			<button class="product_addToCart"><span>Добавить в корзину</span></button>
		</div>
		<div class="product_gallery">
			<div class="product_gallery_photos">
				<img class="product_photo1">
				<img class="product_photo2">
			</div>
			<div class="product_slider">
				<div class="product_selectedPhotos">
					<img class="product_selected1">
					<img class="product_selected2">
				</div>
				<div class="product_inactive">
					<img class="product_inactive1">
					<img class="product_inactive2">
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
	.product {
		background: #FFFFFF;

		.product_content{


			.product_header{


				.product_heading{


					.product_name{
						color:rgba(53.00000064074993, 65.0000037252903, 83.00000265240669, 1);
						width:288px;
						height:40px;
						font-family:Inter;
						text-align:left;
						font-size:32px;
						letter-spacing:0;
						
					}
					.product_support_text{
						color: rgba(102.00000151991844, 112.000000923872, 133.00000727176666, 1);
    					width: 288px;
    					height: 30px;
    					left: 0px;
    					top: 40px;
    					font-family: Inter;
    					text-align: left;
    					font-size: 20px;
					}
				}
				
				.product_description{
					color: rgba(102.00000151991844, 112.000000923872, 133.00000727176666, 1);
    				width: 648px;
					height: 60px;
					top: 110px;
					font-family: Inter;
					text-align: left;
					font-size: 20px;
				}

				.product_price{
					color: rgba(13.174998834729195, 19.762502051889896, 32.93749898672104, 1);
					width: 648px;
					height: 48px;
					top: 210px;
					font-family: Inter;
					text-align: left;
					font-size: 36px;
				}
			}

			.product_dropdownSize{
				display:flex;
				border: 1px solid #EAECF0;
				border-radius: 8px;
				background-color: rgba(255, 255, 255, 1);
				width: 204px;
				height: 48px;
				border-top-left-radius: 8px;
				border-top-right-radius: 8px;
				border-bottom-left-radius: 8px;
				border-bottom-right-radius: 8px;
				align-items: center;
				justify-content: center;

				span{
					color: rgba(53.00000064074993, 65.0000037252903, 83.00000265240669, 1);
					width: 144px;
					height: 24px;
					
					font-family: Inter;
					text-align: start;
					font-size: 16px;
				}

				label{

				}
			}

			.product_addToCart{
				background-color: rgba(13.174998834729195, 19.762502051889896, 32.93749898672104, 1);
				width: 204px;
				height: 48px;
				top: 64px;
				border-top-left-radius: 8px;
				border-top-right-radius: 8px;
				border-bottom-left-radius: 8px;
				border-bottom-right-radius: 8px;

				span{
					color: rgba(255, 255, 255, 1);
					width: 160px;
					height: 24px;
					left: 22px;
					top: 12px;
					font-family: Inter;
					text-align: left;
					font-size: 16px;
				}
			}
		}
	}
</style>