var totaltopic = 4

function showblock(page) {
	for (i=1; i<=totaltopic; i++) {
		var e= eval("document.getElementById('para"+i+"')");
		var g;
		e.style.display="none";
	}
  	e = eval("document.getElementById('para"+page+"')"); 
	var g;
	g = eval("document.getElementById('img"+page+"')");
	if (e) e.style.display="block";
	if (g) g.src = "assets/tab120"+(page-1)+"_2.png"
	$("#img3").attr('tabindex',10);	
}

function hideblock() {
	for (i=1; i<=totaltopic; i++) {
		var e= eval("document.getElementById('para"+i+"')");
		e.style.display="none";
	}
	close();
	$("#img3").attr('tabindex',10)
		
		
}

function close(){
	$("#img3").attr('tabindex',10)
}