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

	});

})();