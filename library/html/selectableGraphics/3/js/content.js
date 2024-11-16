var totaltopic = 5;

function showblock(page) {
	for (i=1; i<=totaltopic; i++) {
		var e= eval("document.getElementById('para"+i+"')");
		var g;
		
		e.style.display="none";
		if (i>1) {
			g= eval("document.getElementById('img"+i+"')");
			g.src = "assets/tab050"+(i-1)+"_0.jpg" 
		}
	}
	e = eval("document.getElementById('para"+page+"')"); 
	var g;
	g = eval("document.getElementById('img"+page+"')");
	if (e){
		document.getElementById('boxID').style.display="block";
		if (g) g.src = "assets/tab050"+(page-1)+"_2.jpg"
			$('#para'+page).slideDown(1000)
	}
}