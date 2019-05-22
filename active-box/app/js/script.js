;
(function () {
	'use strict'

	$(document).ready(function () {
		$('.header__top-btn').on('click', function (e) {
			e.preventDefault();
			$(this).toggleClass('btn-active');
		});

	});

})();