// JavaScript Document
var startingItem = 3;

$(document).ready( function() {
	$('.carousel_data .carousel_item').each( function() {
		$('#carousel').append( $(this).find('.image').html());
	});
	createCarousel();
	showCaption();
	createCustomButtons();
	$('div#carousel img').click(function() {
		hideCaption();
	});
});

function createCarousel() {
	$('div#carousel').roundabout({
		childSelector: 'img',
		startingChild: window.startingItem,
		tilt: -4.5,
		minOpacity: 1,
		minScale: .45,
		duration: 1200,
		clickToFocus: true,
		clickToFocusCallback: showCaption
	});
}

function createCustomButtons() {
	$('.nextItem').click( function() {
		hideCaption();
		$('div#carousel').roundabout('animateToNextChild', showCaption);
	});	

	$('.prevItem').click( function() {
		hideCaption();
		$('div#carousel').roundabout('animateToPreviousChild', showCaption);
	});	
}

function showCaption() {
	var childInFocus = $('div#carousel').data('roundabout').childInFocus; //returns a 0-based integer index
	var setCaption = $('.carousel_data .carousel_item .caption:eq('+childInFocus+')').html();	
	$('#captions').html(setCaption);
	var newHeight = $('#captions').height() + 'px';
	$('.caption_container').animate({'height': newHeight}, 500, function() {
		$('#captions').animate({'opacity':1}, 250);
	});
}

function hideCaption() {
	$('#captions').animate({'opacity':0}, 250);
}