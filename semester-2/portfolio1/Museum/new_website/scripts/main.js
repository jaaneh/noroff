$('#indexDownArrow').on('click', function (event) {
	event.preventDefault();

	$('html, body').animate({
		scrollTop: $('#bloodMoon').offset().top
  }, 1000, 'swing');
});