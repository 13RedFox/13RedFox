; (function () {
	"use strict";

	const playList = [
		{
			author: "LED ZEPPELIN",
			song: "STAIRWAY TO HEAVEN"
		},
		{
			author: "QUEEN",
			song: "BOHEMIAN RHAPSODY"
		},
		{
			author: "LYNYRD SKYNYRD",
			song: "FREE BIRD"
		},
		{
			author: "DEEP PURPLE",
			song: "SMOKE ON THE WATER"
		},
		{
			author: "JIMI HENDRIX",
			song: "ALL ALONG THE WATCHTOWER"
		},
		{
			author: "AC/DC",
			song: "BACK IN BLACK"
		},
		{
			author: "QUEEN",
			song: "WE WILL ROCK YOU"
		},
		{
			author: "METALLICA",
			song: "ENTER SANDMAN"
		}
	];

	const musicList = document.getElementById("musicList");

	for (let v = 0; v < playList.length; v++) {
		const songItems = document.createElement("li");
		songItems.innerText = playList[v].author + ": " + playList[v].song;
		musicList.appendChild(songItems);
	};

})();