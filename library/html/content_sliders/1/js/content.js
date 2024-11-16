$(function() {
	$('#serve').on('click', function() {
		$('#output img').eq(0).hide();
		$('#output img').eq(1).hide();
		$('#output img').eq(2).fadeOut();
		
		$('#output img').eq(0).fadeIn();
	});
	
	$('#prog').on('click', function() {
		$('#output img').eq(0).fadeOut();
		$('#output img').eq(1).hide();
		$('#output img').eq(2).hide();
		
		$('#output img').eq(1).fadeIn();
	});
	
	$('#apps').on('click', function() {
		$('#output img').eq(0).hide();
		$('#output img').eq(1).fadeOut();
		$('#output img').eq(2).hide();
		
		$('#output img').eq(2).fadeIn();
	});
});