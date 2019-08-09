;
(function () {
	'use strict'

	$(document).ready(function () {


		$(function () {
			// Owl Carousel
			let owl = $(".owl-carousel");
			owl.owlCarousel({
				items: 1,
				margin: 10,
				loop: true,
				nav: false,
				autoplay: true,
				autoplayTimeout: 5000,
				smartSpeed: 1000,
				responsive:{
					0:{
						dots: false
					},
					768:{
						dots: false
					},
					1170:{
						dots: true
					}
				}
			});
		});


	});

})();