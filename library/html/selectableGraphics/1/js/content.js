var gAlt =  new Array 
	var nImg = 3
	for (i=0; i<nImg; i++) gAlt[i] = "";
	gAlt[0] = "Photo of a committee meeting"
	gAlt[1] = "Photo of a research laboratory"
	gAlt[2] = "Photo of medical personnel"
	
	var totaltopic = 6
function showblock(page) {
		for (i=1; i<=totaltopic; i++) {
		var e= eval("document.getElementById('para"+i+"')");
		var g;
		e.style.display="none";
		
		if (i>1) {
			g= eval("document.getElementById('img"+i+"')");
		//alert(g)
		 g.src = "assets/IPAWS03_0209bt"+(i-1)+"_0.png" 
		}
  	}

  	e = eval("document.getElementById('para"+page+"')"); 
	var g;
	g = eval("document.getElementById('img"+page+"')");
	if (e) e.style.display="block";
	if (g) g.src = "assets/IPAWS03_0209bt"+(page-1)+"_2.png"
}