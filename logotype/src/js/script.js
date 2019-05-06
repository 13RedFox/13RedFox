$(document).ready(function () {

	$(function () {
		// Owl Carousel
		var owl = $(".owl-carousel");
		owl.owlCarousel({
			items: 1,
			loop: true,
			nav: true,
			autoplay: true,
			autoplayTimeout: 3000,
			smartSpeed: 1000,
			navText: [
				'<span class="arrow-owl arrow-left">‹</span>',
				'<span class="arrow-owl arrow-right">›</span>'
			]
		});
	});

});