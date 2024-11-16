var totaltopic = 5;

function showblock(page) {
	for (i=2; i<=totaltopic; i++) {
		var e= eval("document.getElementById('para"+i+"')");
		e.style.display = "none";
		$(".round"+(i-1)+"_visit").removeClass("round"+
			(i-1)+"_visit").addClass("round"+(i-1));
  	}
	$(".round"+(page-1)).removeClass("round"+(page-1)).addClass( "round"+(page-1)+"_visit" );
  	e = eval("document.getElementById('para"+page+"')"); 
	
	if (e) e.style.display="block";
	$("#para"+page).flip({
		direction:'rl',
		color:'#FFF'
    });
};