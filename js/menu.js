$(document).ready(function() {
	$('.menu-burger__header').click(function(){
        $('.menu-burger__header').toggleClass('open-menu');
        $('.header__nav').toggleClass('open-menu');
        $('body').toggleClass('fixed-page');
	});
});


$(".accordeon > li > a").click(function (e) {
	e.preventDefault();
	var menu = $(this).closest('.accordeon');
	
	if (false == $(this).next().is(':visible')) {
		menu.find('li').removeClass('slide active');
		menu.find('ul').slideUp();
	}
	$(this).next().slideToggle();
	$(this).parent().addClass('slide');
});

