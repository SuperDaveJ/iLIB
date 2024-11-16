/*  JavaScript Document  */
var thumbnailSpacing = 15;

$(document).ready( function() {
	$('a.sortlink').on('click', function(e) {
		e.preventDefault();
		$('a.sortlink').removeClass('selected');
		$(this).addClass('selected');
		var keyword = $(this).attr('data-keyword');
		sortThumbnails(keyword);
	});
	
	$('.gallery .sorting').css('margin-bottom', window.thumbnailSpacing + 'px');
	$('.thumbnail_container a.thumbnail').addClass('showMe').addClass('fancybox').attr('rel', 'group');
	
	positionThumbnails();
	
	//jQuery resize function may not work well here due to the animation effects. So, the following
	setInterval('checkViewport()', 750);
});

function checkViewport() {
	var photosWidth = $('.photos').width();
	var thumbnailContainerWidth = $('.thumbnail_container').width();
	var thumbnailWidth = $('.thumbnail_container a.thumbnail:first-child').outerWidth();
	
	if (photosWidth < thumbnailContainerWidth) {
		positionThumbnails();
	}
	
	if ( (photosWidth - thumbnailWidth) > thumbnailContainerWidth) {
		positionThumbnails();
	}
}

function sortThumbnails(keyword) {
	$('.thumbnail_container a.thumbnail').each(function() {
		var thumbnailKeywords = $(this).attr('data-keywords');
		if (keyword == 'all') {
			$(this).addClass('showMe').removeClass('hideMe').attr('rel', 'group');
		} else {
			if (thumbnailKeywords.indexOf(keyword) != -1) {
				$(this).addClass('showMe').removeClass('hideMe').attr('rel', 'group');
			} else {
				$(this).addClass('hideMe').removeClass('showMe').attr('rel', 'none');
			}
		}
	});
	
	positionThumbnails();
}

function positionThumbnails() {
	/* debug */
	//$('.debug-remainder').html('');
	
	$('.thumbnail_container a.thumbnail.hideMe').animate(
		{opacity: 0}, 500, function() {
			$(this).css({
				'display': 'none',
				'top': '0px',
				'left': '0px'
			});
		});
	
	var containerWidth = $('.photos').width();
	var thumbnail_R = 0;	//R = row
	var thumbnail_C = 0;	//C = column
	var thumbnailWidth = $('a.thumbnail img:first-child').outerWidth() + window.thumbnailSpacing;
	var thumbnailHeight = $('a.thumbnail img:first-child').outerHeight() + window.thumbnailSpacing;
	var max_C = Math.floor(containerWidth / thumbnailWidth);

	$('.thumbnail_container a.thumbnail.showMe').each(function(index) {
		var remainder = (index % max_C);
		var maxIndex = 0;
		/* debug */
		//$('.debug-remainder').append(remainder + ' - ');
		
		if (remainder == 0) {
			if (index != 0 ) {
				thumbnail_R += thumbnailHeight;
			}
			thumbnail_C = 0;
		} else {
			thumbnail_C += thumbnailWidth;
		}
		
		$(this).css('display', 'block').animate({
			'opacity': 1,
			'top': thumbnail_R + 'px',
			'left': thumbnail_C + 'px'
		}, 500);
		
		var newWidth = max_C * thumbnailWidth;
		var newHeight = thumbnail_R + thumbnailHeight;
		$('.thumbnail_container').css({
			'width': newWidth + 'px',
			'height': newHeight + 'px'
		});
		
	});
	
	detectFancyboxLinks();
	
	var newWidth = $('.thumbnail_container').width() - window.thumbnailSpacing;
	$('.sorting').css('width', newWidth + 'px');
	
}

function detectFancyboxLinks() {
	//below is a fancybox builtin function to remove fancybox links
	$('a.fancybox').unbind('click.fb');
	
	if ( $(window).width() < 550 ) {
		$('.thumbnail_container a.thumbnail').removeClass('fancybox').attr('target', '_blank');
	} else {
		$('.thumbnail_container a.thumbnail').removeAttr('target');
	}
	
	$('a.fancybox[rel="group"]').fancybox({
		'transitionIn'  : 'elastic',
		'transitionOut' : 'elastic',
		'titlePosition' : 'over',
		'speedIn'	    : 500,
		'overlayColor'  : '#000',
		'padding'	    : 0,
		'overlayOpacity': 0.75
	});
}
