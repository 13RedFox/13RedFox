$(document).ready( function() {
	$("#block-1").on("click", function(e) {
		e.preventDefault();
		let top = $("#wwd").offset().top;
		$("html, body").animate({
			scrollTop: top
		}, 500);
	});

	$("#block-2").on("click", function(e) {
		e.preventDefault();
		let top = $("#services").offset().top;
		$("html, body").animate({
			scrollTop: top
		}, 500);
	});
});