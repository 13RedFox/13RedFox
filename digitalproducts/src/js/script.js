;
(function () {
	'use strict'

	$(document).ready(function () {

		// Burger BTN
		$('.burger').click(function () {
			$('.burger__line:nth-child(1)').toggleClass('top');
			$('.burger__line:nth-child(2)').toggleClass('middle');
			$('.burger__line:nth-child(3)').toggleClass('bottom');
		});

		// Works Owl Carousel
		$(function () {
			const owl = $(".works__carousel");
			owl.owlCarousel({
				items: 1,
				loop: true,
				nav: true,
				dots: true,
				navText: [
					'<span class="arrow-owl arrow-left"></span>',
					'<span class="arrow-owl arrow-right"></span>'
				],
				responsive: {
					0: {
						nav: false
					},
					768: {
						nav: false
					},
					992: {
						nav: true
					}
				}
			});
		});

	});

})();