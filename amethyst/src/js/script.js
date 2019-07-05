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

		// Services Owl Carousel
		$(function () {

			$('.services__card-link').on('click', function (e) {
				e.preventDefault();
				$('.services__card-link').removeClass('active');
				$(this).addClass('active');
			});

			const owl = $(".services__owl-carousel");
			owl.owlCarousel({
				items: 1,
				loop: true,
				margin: 10,
				dots: true,
				autoplay: true,
				autoplayTimeout: 3000,
				responsive: {
					0: {
						dots: false
					},
					768: {
						dots: true
					},
					992: {
						dots: true
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

		$(function () {
			// Progress Bar
			$('#bar1').barfiller({
				barColor: 'linear-gradient(-215deg, rgba(153, 102, 204, 1) 0%, rgba(225, 133, 34, 1) 100%)',
				duration: 1000,
				animateOnResize: true,
			});

			$('#bar2').barfiller({
				barColor: 'linear-gradient(-215deg, rgba(153, 102, 204, 1) 0%, rgba(225, 133, 34, 1) 100%)',
				duration: 1000,
				animateOnResize: true,
			});

			$('#bar3').barfiller({
				barColor: 'linear-gradient(-215deg, rgba(153, 102, 204, 1) 0%, rgba(225, 133, 34, 1) 100%)',
				duration: 1000,
				animateOnResize: true,
			});

			$('#bar4').barfiller({
				barColor: 'linear-gradient(-215deg, rgba(153, 102, 204, 1) 0%, rgba(225, 133, 34, 1) 100%)',
				duration: 1000,
				animateOnResize: true,
			});

		});

	});

})();