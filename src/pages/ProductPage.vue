<script>



</script>


<template>
	<div class="product">
		<div class="product_content">
			<div class="product_header">
				<div class="product_heading">
					<span class="product_name">Каменный остров</span>
					<span class="product_support_text">Жилет с нашивкой компасом</span>
				</div>
				<span class="product_description">
					Инновации и функциональность находятся в приоритете у Каменного острова, о чем свидетельствует этот
					жилет.
				</span>
				<span class="product_price">
					30 000 руб
				</span>
			</div>
			<div class="product_action">
				<div class="product_dropdownSize">
					<span>Выберите размер</span>
					<img src="public/Icon.svg">
				</div>
				<!-- <ul class="product_sizeList">
					<li><span>XS</span><img></li>
					<li><span>S</span><img></li>
					<li><span>M</span><img></li>
					<li><span>L</span><img></li>
					<li><span>XL</span><img></li>
					<li><span>XXL</span><img></li>
				</ul> -->
				<button class="product_addToCart"><span>Добавить в корзину</span></button>
			</div>
		</div>
		
		
		
		<div class="product_gallery">
			<div class="product_gallery_photos">
				<img class="product_photo1" src="images/image_1.png">
				<img class="product_photo2" src="images/image_1.png">
			</div>
			<div class="product_slider">
				<div class="product_selectedPhotos">
					<img class="product_selected1" src="images/image_1.png">
					<img class="product_selected2" src="images/image_1.png">
				</div>
				<div class="product_inactive">
					<img class="product_inactive1" src="images/image_1.png">
					<img class="product_inactive2" src="images/image_1.png">
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
	gap: 4em;
	padding-top: 2em;
	align-items: center;
	justify-content: center;

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
			gap: 1em;

			flex: none;
			order: 1;
			flex-grow: 0;

			.product_dropdownSize {

				box-sizing: border-box;
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
				padding: 0.75em 1em;
				gap: 0.5em;
				border: 1px solid #EAECF0;
				border-radius: 0.5em;
				background-color: rgba(255, 255, 255, 1);
				width: 12.75em;
				height: 3em;
				border-top-left-radius: 0.5em;
				border-top-right-radius: 0.5em;
				border-bottom-left-radius: 0.5em;
				border-bottom-right-radius: 0.5em;
				align-items: center;
				justify-content: center;
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
				gap: 0.25em;

				position: absolute;
				width: 320px;
				height: 248px;
				left: 1112px;
				top: 446px;

				background: #FFFFFF;
				box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.08);
				border-radius: 8px;

				li{
					display: flex;
					flex-direction: row;
					align-items: center;
					padding: 6px 16px;
					gap: 8px;

					width: 308px;
					height: 36px;

					background: #FFFFFF;
					border-radius: 6px;

					flex: none;
					order: 2;
					align-self: stretch;
					flex-grow: 0;


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

				span {
					color: rgba(255, 255, 255, 1);
					width: 160px;
					height: 24px;
					left: 22px;
					top: 12px;
					text-align: left;
					font-size: 16px;
					font-family: 'Inter';
					font-style: normal;
					font-weight: 600;
					font-size: 16px;
					line-height: 24px;
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

			.product_photo1{
				width: 436px;
				height: 560px;
				flex: none;
				order: 0;
				align-self: stretch;
				flex-grow: 1;
			}

			.product_photo2{
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

			.product_selectedPhotos{
				display: flex;
				flex-direction: row;
				align-items: flex-start;
				padding: 0px;
				gap: 16px;

				width: 140px;
				height: 88px;
				border: 2px solid #0D1421;
				flex: none;
				order: 0;
				flex-grow: 0;

				.product_selected1{
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

				.product_selected2{
					display: flex;
					flex-direction: row;
					justify-content: center;
					align-items: center;
					padding: 0px;
					gap: 10px;

					width: 62px;
					height: 88px;

					flex: none;
					order: 1;
					flex-grow: 0;
				}
			}

			.product_inactive{
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

				.product_inactive1{
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

				.product_inactive2{
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