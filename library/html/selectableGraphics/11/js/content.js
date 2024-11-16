function btnclk(btmNum){
	$("#tb_"+btmNum).css({
		"border-color": "#305a8f", 
		width: "200px", "overflow": "auto"
	});
	var w = $("#tb_"+btmNum).css("width");
	w = parseInt( w.substring(0, w.length-2) );
	if ( w < 50 ) w *= 1.2;
	h = Math.round(25720/w) + "px";
	$("#tb_"+btmNum).animate({
		"height": h
	}, 1000);
}