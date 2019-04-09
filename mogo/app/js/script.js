$(document).ready( function() {
	$("#block-1").on("click", function(e) {
		e.preventDefault();
		let top = $("#wwd").offset().top;
		$("html, body").animate({
			scrollTop: top
		}, 500);
	});
});