;
(function () {
	'use strict'

	// Объекты и массивы

	let array = [1, 2, 3];

	console.log(map(square, array));
	console.log(array);

	function map(fn, array) {
		let array2 = [];
		for (let i = 0; i < array.length; ++i) {
			array2[i] = fn(array[i]);
		}
		return array2;
	}

	function square(x) {
		return x * x;
	}

})();