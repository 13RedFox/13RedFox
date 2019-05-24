;
(function () {
	'use strict'

		; function paddingHack(items) {

			function setPadding() {
				$(items).each(function () {
					const img = $(this).find('img');
					if (!img[0]) return;
					const gridWidth = $(this).parent().width();
					$(this).css({
						position: 'relative',
						width: '100%',
						paddingTop: `${Math.floor(parseFloat(img[0].naturalHeight / gridWidth * 100))}%`
					});
					$(img).css({
						'position': 'absolute',
						'top': '0',
						'right': '0',
						'bottom': '0',
						'left': '0',
						'width': '100%',
						'height': '100%',
						'object-fit': 'cover'
					});
				});
			}

			return {
				init: setPadding
			}
		}

	const imgWrapper = paddingHack('.img-wrapper');

	imgWrapper.init();

	$(document).ready(function () {
		$('.header__top-btn').on('click', function (e) {
			e.preventDefault();
			$(this).toggleClass('btn-active');
		});
	});



})();