<template>
	<div class="main">
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
				Выберите размер
			</div>
			<button class="product_addToCart">Добавить в корзину</button>
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
	.main {
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
						
					}
				}
			}
		}
	}
</style>