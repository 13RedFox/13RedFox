function initMap() {

	let styledMapType = new google.maps.StyledMapType(
		[
			{
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#242f3e"
					}
				]
			},
			{
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#746855"
					}
				]
			},
			{
				"elementType": "labels.text.stroke",
				"stylers": [
					{
						"color": "#242f3e"
					}
				]
			},
			{
				"featureType": "administrative.locality",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#d59563"
					}
				]
			},
			{
				"featureType": "poi",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#d59563"
					}
				]
			},
			{
				"featureType": "poi.park",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#263c3f"
					}
				]
			},
			{
				"featureType": "poi.park",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#6b9a76"
					}
				]
			},
			{
				"featureType": "road",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#38414e"
					}
				]
			},
			{
				"featureType": "road",
				"elementType": "geometry.stroke",
				"stylers": [
					{
						"color": "#212a37"
					}
				]
			},
			{
				"featureType": "road",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#9ca5b3"
					}
				]
			},
			{
				"featureType": "road.highway",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#746855"
					}
				]
			},
			{
				"featureType": "road.highway",
				"elementType": "geometry.stroke",
				"stylers": [
					{
						"color": "#1f2835"
					}
				]
			},
			{
				"featureType": "road.highway",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#f3d19c"
					}
				]
			},
			{
				"featureType": "transit",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#2f3948"
					}
				]
			},
			{
				"featureType": "transit.station",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#d59563"
					}
				]
			},
			{
				"featureType": "water",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#17263c"
					}
				]
			},
			{
				"featureType": "water",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#515c6d"
					}
				]
			},
			{
				"featureType": "water",
				"elementType": "labels.text.stroke",
				"stylers": [
					{
						"color": "#17263c"
					}
				]
			}
		],
		{ name: 'Styled Map' });

	let position = { lat: 49.0584409, lng: 33.4124822 };
	let center = { lat: 49.0565, lng: 33.415 };
	let map = new google.maps.Map(
		document.getElementById('map'), {
			zoom: 15,
			center: center,
			disableDefaultUI: true,
			mapTypeControlOptions: {
				mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
					'styled_map']
			}
		});

	let marker = new google.maps.Marker({
		position: position,
		map: map,
		icon: 'img/marker.png'
	});

	map.mapTypes.set('styled_map', styledMapType);
	map.setMapTypeId('styled_map');
}

$(document).ready(function () {

	// Burger BTN
	$('.burger').click(function () {
		$('.burger__line:nth-child(1)').toggleClass('top');
		$('.burger__line:nth-child(2)').toggleClass('middle');
		$('.burger__line:nth-child(3)').toggleClass('bottom');
	});

	// Works Owl Carousel
	$(function () {
		const owl = $(".works__carousel");
		owl.owlCarousel({
			items: 1,
			loop: true,
			nav: true,
			dots: true,
			navText: [
				'<span class="arrow-owl arrow-left"></span>',
				'<span class="arrow-owl arrow-right"></span>'
			],
			responsive: {
				0: {
					nav: false
				},
				768: {
					nav: false
				},
				992: {
					nav: true
				}
			}
		});
	});

	// OurTeam Owl Carousel
	$(function () {
		const owl = $(".our-team__carousel");
		owl.owlCarousel({
			items: 3,
			margin: 10,
			loop: true,
			dots: false,
			nav: true,
			navText: [
				'<span class="arrow-owl arrow-left"></span>',
				'<span class="arrow-owl arrow-right"></span>'
			],
			responsive: {
				0: {
					nav: false,
					items: 1
				},
				768: {
					nav: false,
					items: 2
				},
				992: {
					nav: true,
					items: 3
				}
			}
		});
	});

});