var totaltopic = 3;
var bottomArr=["","","124px","99px"];
var leftArr=["","","405px","405px"];
var prepage;

function showblock(page) {
	for (i=1; i<=totaltopic; i++) {
		var e= eval("document.getElementById('para"+i+"')");
		e.style.display="none";
  	}
	if ( prepage!=undefined ){
		$("#note_"+prepage).animate({
			left:leftArr[prepage],
			bottom:bottomArr[prepage]
		},1500);
		
		$("#img"+prepage).animate({
			fontSize: "12px",
			color: "black"
		},1500);
	}
	
  	e = eval("document.getElementById('para"+page+"')");
	$("#note_"+page).animate({
		left: 170,
		bottom: 145
	},1500);
	
	$("#img"+page).animate({
		fontSize: "3em",
		color: "white"
	},1500);
	
	prepage = page;
	if (e) e.style.display="block";
}