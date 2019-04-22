;
(function () {
	'use strict'

	let firstNumber = prompt("Please enter a number.", 2);
	let secondNumber = prompt("Please enter a number.", 30);

	function findNumber(n) {
		if (n < 2) {
			return false;
		}
		for (let i = 2; i < n; i++) {
			if (n % i === 0) 
				return false;
		}
		return true;
	}

	let sumNumber = [];
	for (let i = firstNumber; i < secondNumber; i++) {
		if (findNumber(i)) sumNumber.push(i);
	}
	alert(sumNumber);

})();