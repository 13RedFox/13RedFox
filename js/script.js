;
(function () {
	'use strict'


	$(document).ready(function () {

		$('.burger-menu').click(function () {
			$('.header-nav__list').slideToggle(500);
		});
		$(window).resize(function () {
			if ($(window).width() > 767) {
				$('.header-nav__list').removeAttr('style');
			}
		});

	});

})();