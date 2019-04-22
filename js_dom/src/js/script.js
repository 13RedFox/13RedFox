;
(function () {
	'use strict'

	// const playList = [
	// 	{
	// 		author: "LED ZEPPELIN",
	// 		song: "STAIRWAY TO HEAVEN"
	// 	},
	// 	{
	// 		author: "QUEEN",
	// 		song: "BOHEMIAN RHAPSODY"
	// 	},
	// 	{
	// 		author: "LYNYRD SKYNYRD",
	// 		song: "FREE BIRD"
	// 	},
	// 	{
	// 		author: "DEEP PURPLE",
	// 		song: "SMOKE ON THE WATER"
	// 	},
	// 	{
	// 		author: "JIMI HENDRIX",
	// 		song: "ALL ALONG THE WATCHTOWER"
	// 	},
	// 	{
	// 		author: "AC/DC",
	// 		song: "BACK IN BLACK"
	// 	},
	// 	{
	// 		author: "QUEEN",
	// 		song: "WE WILL ROCK YOU"
	// 	},
	// 	{
	// 		author: "METALLICA",
	// 		song: "ENTER SANDMAN"
	// 	}
	// ];

	// console.log(playList);

	// for (let i = 0; i < playList; i++) {

	// }

	// document.onkeypress = function(e) {
	// 	console.log(e);
	// }

	document.onkeydown = function(e) {
		if (e.keyCode == 27) { // escape
			cancel();
			return false;
		}

		if ((e.ctrlKey && e.keyCode == 'E'.charCodeAt(0)) && !area.offsetHeight) {
			edit();
			return false;
		}

		if ((e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)) && area.offsetHeight) {
			save();
			return false;
		}
	}

	function edit() {
		view.style.display = 'none';
		area.value = view.innerHTML;
		area.style.display = 'block';
		area.focus();
	}

	function save() {
		area.style.display = 'none';
		view.innerHTML = area.value;
		view.style.display = 'block';
	}

	function cancel() {
		area.style.display = 'none';
		view.style.display = 'block';
	}

})();