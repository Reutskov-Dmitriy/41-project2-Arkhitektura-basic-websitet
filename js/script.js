$(document).ready(function () {
	$('.slider').slick({
		dots: true,

		speed: 2000,
		autoplay: 4000,
		pauseonHover: true,
	});

	$('.header__slider').slick({
		arrows: false,
	});


	$('.news-slider').slick({
		slidesToShow: 3,
		arrows: true,
	})

});