function paddingHack(items) {
	const gridWidth = $(items).parent().width();

	function setPadding() {
		$(items).each(function () {
			const img = $(this).find('img');
			if (!img[0]) return;
			$(this).css({
				position: 'relative',
				width: '100%',
				paddingTop: `${Math.floor(parseFloat(img[0].naturalHeight / gridWidth * 100))}%`
			});
			$(img).css({
				'position': 'absolute',
				'top': '0',
				'right': '0',
				'bottom': '0',
				'left': '0',
				'width': '100%',
				'height': '100%',
				'object-fit': 'cover'
			});
		});
	}

	return {
		init: setPadding
	}
}

const paddingHackEl = paddingHack('.img-wrapper');

paddingHackEl.init();

$(document).ready(function () {

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
	//			Skills			//
	//									//
	//////////////////////

	$('.skills__wrap').each(function () {
		$(this).find('.skills__bar').animate({
			width:$(this).attr('data-percent')
		}, 2000);
	});

});