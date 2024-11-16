var totaltopic = 6
function showblock(page) {
		for (i=1; i<=totaltopic; i++) {
		var e= eval("document.getElementById('para"+i+"')");
		var g;
		e.style.display="none";
  	}
  	e = eval("document.getElementById('para"+page+"')"); 
	$("#para"+page).fadeIn(1000);
	$(".rnd").css("background-color",white);
}