;
(function () {
	'use strict'

	// function initMap() {

	// 	var element = document.getElementById('map');
	// 	var options = {
	// 		zoom: 16,
	// 		center: { lat: 49.0765856, lng: 33.4247932 }
	// 	};

	// 	var myMap = new google.maps.Map(element, options);
	// }

	$(document).ready(function () {

		//////////////////////
		//									//
		//	 Menu-scroll  	//
		//									//
		//////////////////////

		$("#block-1").on("click", function (e) {
			e.preventDefault();
			let top = $("#wwd").offset().top;
			$("html, body").animate({
				scrollTop: top
			}, 500);
		});

		$("#block-2").on("click", function (e) {
			e.preventDefault();
			let top = $("#services").offset().top;
			$("html, body").animate({
				scrollTop: top
			}, 1000);
		});

		$("#block-3").on("click", function (e) {
			e.preventDefault();
			let top = $("#work").offset().top;
			$("html, body").animate({
				scrollTop: top
			}, 2000);
		});

		$("#block-4").on("click", function (e) {
			e.preventDefault();
			let top = $("#blog").offset().top;
			$("html, body").animate({
				scrollTop: top
			}, 2000);
		});

		$("#block-5").on("click", function (e) {
			e.preventDefault();
			let top = $("#footer").offset().top;
			$("html, body").animate({
				scrollTop: top
			}, 2000);
		});

		//////////////////////
		//									//
		//			Facts				//
		//									//
		//////////////////////

		$('.facts__number').each(function () {
			$(this).prop('Counter', 0).animate({
				Counter: $(this).text()
			}, {
					duration: 4000,
					easing: 'swing',
					step: function (now) {
						$(this).text(Math.ceil(now));
					}
				});
		});

		//////////////////////
		//									//
		//		Accordion			//
		//									//
		//////////////////////

		$('.services-wwd__text').not(':first').hide();
		$('.services-wwd__title-wrap').click(function () {

			const findText = $(this).next('.services-wwd__text');
			const findItem = $(this).closest('.services-wwd__text');

			if (findText.is(':visible')) {
				findText.slideUp()
			}
			else {
				findItem.find('..services-wwd__text').slideUp();
				findText.slideDown();
			}
		});

		//////////////////////
		//									//
		//		btn-top				//
		//									//
		//////////////////////

		const $btnTop = $('.btn-top')
		$(window).on('scroll', function () {
			if ($(window).scrollTop() >= 650) {
				$btnTop.fadeIn();
			} else {
				$btnTop.fadeOut();
			}
		});

		$btnTop.on('click', function () {
			$('html, body').animate({ scrollTop: 0 }, 900)
		});

		//////////////////////
		//									//
		//		burger-menu		//
		//									//
		//////////////////////

		$('.menu__list-mobile').hide();

		$('.burger-menu').on('click', function () {
			$('.menu__list-mobile').slideToggle();
		})

	});



})();