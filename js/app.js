(function ($) {
	$('.vegas-slider').vegas({
		transition: ['zoomOut'],
		slides: [
			{src : 'img/slides/1.jpg', transition: 'swirlLeft2'},
			{src : 'img/slides/2.jpg', transition: 'swirlRight2'},
			{src : 'img/slides/3.jpg', transition: 'swirlLeft2'},
            {src : 'img/slides/4.jpg'}
		]
	});

})(jQuery);
