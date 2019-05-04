
	function initMap() {

		// Create a new StyledMapType object, passing it an array of styles,
		// and the name to be displayed on the map type control.
		var styledMapType = new google.maps.StyledMapType(
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

		// Create a map object, and include the MapTypeId to add
		// to the map type control.
		var map = new google.maps.Map(document.getElementById('map'), {
			center: { lat: 49.0664576, lng: 33.4141739 },
			zoom: 16,
			zoomControl: false,
			mapTypeControl: false,
			streetViewControl: false,
			mapTypeControlOptions: {
				mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
					'styled_map']
			}
		});

		//Associate the styled map with the MapTypeId and set it to display.
		map.mapTypes.set('styled_map', styledMapType);
		map.setMapTypeId('styled_map');
	}


	$(document).ready(function () {

		//////////////////////
		//									//
		//	 Menu-scroll  	//
		//									//
		//////////////////////

		$("#block-1").on("click", function (e) {
			e.preventDefault();
			let top = $("#wwd").offset().top;
			$("html, body").animate({
				scrollTop: top
			}, 500);
		});

		$("#block-2").on("click", function (e) {
			e.preventDefault();
			let top = $("#services").offset().top;
			$("html, body").animate({
				scrollTop: top
			}, 1000);
		});

		$("#block-3").on("click", function (e) {
			e.preventDefault();
			let top = $("#work").offset().top;
			$("html, body").animate({
				scrollTop: top
			}, 2000);
		});

		$("#block-4").on("click", function (e) {
			e.preventDefault();
			let top = $("#blog").offset().top;
			$("html, body").animate({
				scrollTop: top
			}, 2000);
		});

		$("#block-5").on("click", function (e) {
			e.preventDefault();
			let top = $("#footer").offset().top;
			$("html, body").animate({
				scrollTop: top
			}, 2000);
		});

		//////////////////////
		//									//
		//			Facts				//
		//									//
		//////////////////////

		$('.facts__number').each(function () {
			$(this).prop('Counter', 0).animate({
				Counter: $(this).text()
			}, {
					duration: 4000,
					easing: 'swing',
					step: function (now) {
						$(this).text(Math.ceil(now));
					}
				});
		});

		//////////////////////
		//									//
		//		Accordion			//
		//									//
		//////////////////////

		$('.services-wwd__text').not(':first').hide();
		$('.services-wwd__title-wrap').click(function () {

			const findText = $(this).next('.services-wwd__text');
			const findItem = $(this).closest('.services-wwd__text');

			if (findText.is(':visible')) {
				findText.slideUp()
			}
			else {
				findItem.find('..services-wwd__text').slideUp();
				findText.slideDown();
			}
		});

		//////////////////////
		//									//
		//		btn-top				//
		//									//
		//////////////////////

		const $btnTop = $('.btn-top')
		$(window).on('scroll', function () {
			if ($(window).scrollTop() >= 650) {
				$btnTop.fadeIn();
			} else {
				$btnTop.fadeOut();
			}
		});

		$btnTop.on('click', function () {
			$('html, body').animate({ scrollTop: 0 }, 900)
		});

		//////////////////////
		//									//
		//		burger-menu		//
		//									//
		//////////////////////

		$('.menu__list-mobile').hide();

		$('.burger-menu').on('click', function () {
			$('.menu__list-mobile').slideToggle();
		})

	});