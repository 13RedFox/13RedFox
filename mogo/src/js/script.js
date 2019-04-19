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

	$('.facts__number').each(function() {
		$(this).prop('Counter', 0).animate({
			Counter:$(this).text()
		}, {
			duration: 4000,
			easing: 'swing',
			step: function(now) {
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
	//		slider				//
	//									//
	//////////////////////

	// $('.next-btn').click(function () {
	// 	const currentWrap = $('.quote-wrap.curry');
	// 	const currentWrapIndex = $('.quote-wrap.curry').index();
	// 	let nextWrapIndex = currentWrapIndex + 1;
	// 	let nextWrap = $('.quote-wrap').eq(nextWrapIndex);
	// 	currentWrap.fadeOut(1000);
	// 	currentWrap.removeClass('curry');

	// 	if (nextWrapIndex == ($('.quote-wrap:last').index() + 1)) {
	// 		$('.quote-wrap').eq(0).fadeIn(1000);
	// 		$('.quote-wrap').eq(0).addClass('curry');
	// 	} else {
	// 		nextWrap.fadeIn(1000);
	// 		nextWrap.addClass('curry');
	// 	}
	// });

	// $('.next-btn').click(function () {

	// 	const currentWrap = $('.quote-wrap.curry');
	// 	const currentWrapIndex = $('.quote-wrap.curry').index();
	// 	let prevWrapIndex = currentWrapIndex - 1;
	// 	let prevWrap = $('.quote-wrap').eq(prevWrapIndex);

	// 	currentWrap.fadeOut(1000);
	// 	currentWrap.removeClass('curry');
	// 	prevWrap.fadeIn(1000);
	// 	prevWrap.addClass('curry');
	// });

});