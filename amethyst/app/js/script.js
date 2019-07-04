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
		//Counter facts
		$('.facts__number').each(function () {
			$(this).prop('Counter', 0).animate({
				Counter: $(this).text()
			}, {
					duration: 2000,
					easing: 'swing',
					step: function (now) {
						$(this).text(Math.ceil(now));
					}
				});
		});

		$(function () {
			// Owl Carousel
			let owl = $(".header-owl-carousel");
			owl.owlCarousel({
				items: 1,
				margin: 10,
				loop: true,
				nav: true,
				autoplay: true,
				autoplayTimeout: 3000,
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
				autoplay: true,
				autoplayTimeout: 3000,
				responsive: {
					0: {
						nav: false,
						dots: false
					},
					768: {
						nav: false,
						dots: false
					},
					992: {
						nav: false,
						dots: true
					}
				}
			});
		});

		// Testimonials Owl Carousel
		$(function () {
			const owl = $(".parteners-owl-carousel");
			owl.owlCarousel({
				items: 6,
				loop: true,
				margin: 10,
				dots: false,
				autoplay: true,
				autoplayTimeout: 3000,
				responsive: {
					0: {
						items: 1
					},
					768: {
						items: 3
					},
					992: {
						items: 4
					},
					1200: {
						items: 6
					}
				}
			});
		});

		$(function () {
			// Works gallery
			$('.works__filter-link').on('click', function (e) {
				e.preventDefault();

				$('.works__filter-link').removeClass('active');
				$(this).addClass('active');
			});

		});

	});

})();