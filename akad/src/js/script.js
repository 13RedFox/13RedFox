'use strict';

;(function(){
	const topline = document.querySelector('.top-line');

	function toTopBtnFn(){
		const toTopBtn = document.createElement('span');

		const addBtn = () => {
			toTopBtn.classList.add('to-top');
			document.body.appendChild(toTopBtn);
			const toTopPosition = window.innerHeight;

			toTopBtn.addEventListener('click', () => {
				window.scrollTo({
					top: 0,
					behavior: "smooth"
				});
			})
		}

		const removeBtn = () => {
			toTopBtn.remove();
		}

		return {
			addBtn: addBtn,
			removeBtn: removeBtn
		}
	}

	const btnToTop = toTopBtnFn();

	document.addEventListener('scroll', () => {
		if(window.pageYOffset < topline.clientHeight) {
			topline.classList.remove('fixed');
		} else {
			topline.classList.add('fixed');
		}

	// if(window.pageYOffset >= window.innerHeight) {
	// 	btnToTop.addBtn();
	// } else {
	// 	btnToTop.removeBtn();
	// }

	window.pageYOffset >= window.innerHeight ? btnToTop.addBtn() : btnToTop.removeBtn();
});


	const $grid = $('.grid');
	$grid.masonry({
		percentPosition: true,
		gutter: 20,
		horizontalOrder: true,
		fitWidth: true
	});

	$grid.masonry('layout');




})();

function paddingHack(items){
	const gridWidth = $(items).parent().width();

	function setPadding(){
		$(items).each(function() {
			const img = $(this).find('img');
			if(!img[0]) return;
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

const mansoryGridPadHack = paddingHack('.test');

mansoryGridPadHack.init();


$('.test-slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1
});