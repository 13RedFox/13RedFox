;
(function () {
	'use strict'

	// Fixed header__top
	window.onscroll = function () {
		if (window.pageYOffset >= 1) {
			$(".header__top").addClass("fixed__top");
		} else {
			$(".header__top").removeClass("fixed__top");
		}
	}

	$(document).ready(function () {

		$(function () {
			// Owl Carousel
			var owl = $(".owl-carousel");
			owl.owlCarousel({
				items: 1,
				margin: 10,
				loop: true,
				nav: true,
				navText: [
					'<span class="arrow-owl arrow-left"></span>',
					'<span class="arrow-owl arrow-right"></span>'
				],
				responsive:{
					320:{
						nav: false,
						dots: false
					},
					768:{
						nav: false,
						dots: false
					},
					1200:{
						loop: true,
						nav: true
					}
				}
			});
		});

	});

})();