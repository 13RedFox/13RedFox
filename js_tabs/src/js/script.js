;
(function () {
	'use strict'

	$(document).ready(function () {

		$('.card__content').hide();
		$('.card__content:first').show();
		$('.menu__item:first').addClass('active');

		$('.menu__item').click(function (e) {
			$('.menu__item').removeClass('active');
			$(this).addClass('active');
			$('.card__content').hide();

			let selectTab = $(this).find('a').attr("href");
			$(selectTab).fadeIn();

		});

		$('.dws-progress-bar').circularProgress({
			color: "#00d4be",
			line_width: 5,
			height: "100px",
			width: "103px",
			percent: 0,
			starting_position: 0
		}).circularProgress('animate', 78, 1500);


	}); // end ready

})();