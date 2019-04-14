$(document).ready(function () {
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
		}, 500);
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
});