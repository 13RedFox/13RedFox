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
	};

	$(document).ready(function () {

		$(function () {
			// Owl Carousel
			let owl = $(".owl-carousel");
			owl.owlCarousel({
				items: 1,
				margin: 10,
				loop: true,
				nav: true,
				autoplayTimeout: 5000,
				navText: [
					'<span class="arrow-owl arrow-left"></span>',
					'<span class="arrow-owl arrow-right"></span>'
				],
				responsive: {
					320: {
						nav: false,
						dots: false
					},
					768: {
						nav: false,
						dots: false
					},
					1200: {
						loop: true,
						nav: true
					}
				}
			});

		});

		// Testimonials Owl Carousel
		$(function () {
			const owl = $(".testimonials-carousel");
			owl.owlCarousel({
				items: 1,
				loop: true,
			});
		});

		$(function () {

			$('.works__filter-link').on('click', function (e) {
				e.preventDefault();

				$('.works__filter-link').removeClass('active');
				$(this).addClass('active');
			});

		});

	});

})();