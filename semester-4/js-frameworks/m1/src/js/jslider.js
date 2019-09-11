$(function() {
	$('#slider .slider-image')
		.first()
		.css({ opacity: 1, display: 'inline-block' })
		.addClass('active');

	$('#next-arrow').click(() => {
		const curImg = $('.slider-image.active');
		const nextImg = curImg.next();
		curImg.fadeTo(500, 0).removeClass('active');
		nextImg.fadeTo(500, 1).addClass('active');

		if (nextImg.length == 0) {
			$('.slider-image')
				.first()
				.fadeTo(500, 1)
				.addClass('active');
		}
	});

	$('#prev-arrow').click(() => {
		const curImg = $('.slider-image.active');
		const prevImg = curImg.prev();
		curImg.fadeTo(500, 0).removeClass('active');
		prevImg.fadeTo(500, 1).addClass('active');

		if (prevImg.length == 0) {
			$('.slider-image')
				.last()
				.fadeTo(500, 1)
				.addClass('active');
		}
	});
});
