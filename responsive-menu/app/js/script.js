; (function () {
	'use strict';
	const MOBILE_BTN_NODE = document.getElementById('mobBtn');
	const MOBILE_NODE = document.querySelector('.menu__list');

	const toggleMenu = () => {
		MOBILE_NODE.classList.toggle('active');
		MOBILE_BTN_NODE.classList.toggle('open');
	}

	MOBILE_BTN_NODE.addEventListener('click', function (e) {
		toggleMenu();
	});

	document.addEventListener('click', function (e) {
		if (e.target.classList.contains('menu__list-link')) {
			toggleMenu();
		}
	})
})();