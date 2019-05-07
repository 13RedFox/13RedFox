"use strict";

var map;

function initMap() {
	// The location of Uluru
	var kiev = { lat: 50.457431, lng: 30.367138 };
	// The map, centered at kiev
	var map = new google.maps.Map(
		document.getElementById('map'), { zoom: 17, center: kiev, zoomControl: false, mapTypeControl: false, streetViewControl: false, fullscreenControl: false });
	// The marker, positioned at kiev
	var marker = new google.maps.Marker({ position: kiev, map: map });
}


$(document).ready(function () {

	// --- SLIDER ---

	$(function () {
		// Owl Carousel
		var owl = $(".owl-carousel");
		owl.owlCarousel({
			items: 1,
			loop: true,
			nav: true,
			autoplay: true,
			autoplayTimeout: 3000,
			smartSpeed: 1000,
			navText: [
				'<span class="arrow-owl arrow-left">‹</span>',
				'<span class="arrow-owl arrow-right">›</span>'
			]
		});
	});

	// --- END SLIDER ---
});