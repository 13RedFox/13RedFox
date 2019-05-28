;
(function () {
	'use strict'

	$(document).ready(function () {
		$('.header__top-btn').on('click', function (e) {
			e.preventDefault();
			$(this).toggleClass('btn-active');
		});

		$(function () {
			$('.header__top-btn').click(function () {
				$('.header__menu-desktop').toggle();
			});
		});


		$(function () {
			// Owl Carousel
			var owl = $(".owl-carousel");
			owl.owlCarousel({
				items: 1,
				margin: 10,
				loop: true,
				nav: true,
				autoplay: true,
				autoplayTimeout: 5000,
				navText: [
					'<span class="arrow-owl arrow-left"></span>',
					'<span class="arrow-owl arrow-right"></span>'
				],
			});
		});

	});

})();