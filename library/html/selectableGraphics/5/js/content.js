var totaltopic = 4;
var boxtopArr=["","","10px","50px","100px"];
var boxleftArr=["","","20px","50px","80px"];
var boxzindexArr=["","","20px","50px","80px"];
var zindexArr=["","","200","300","400"];
var currNum;
var preNum;
var prezIndex=1000;
var currposArr=["","",2,3,4]


function buttonclk(page){
for (i=2; i<=totaltopic; i++) {
		boxtopArr[i]=$("#boxID"+i).css("top");
		boxleftArr[i]=$("#boxID"+i).css("left");
		var e= eval("document.getElementById('para"+i+"')");
		e.style.display="none";
		$("#para"+i).css("display","none");
		$("#boxID"+i).css("zIndex",zindexArr[i])
		$("#boxID"+i).bind('click',buttonclk);
		$("#boxID"+i).css("cursor","pointer")
	}
	preNum=currNum;
	currNum=page;
  	e = eval("document.getElementById('para"+page+"')"); 
	e.style.display="block";
	$("#boxID"+page).show().animate( {top:100, left:80, zIndex: prezIndex+100}, 500 );
	$("#boxID"+page).css("cursor","default")
	$("#boxID"+page).unbind('click'); 
	if(preNum!=undefined){
	$("#boxID"+preNum).show().animate( {top:boxtopArr[currNum], left:boxleftArr[currNum]}, 500 );
	} else {
	$("#boxID4").show().animate( {top:boxtopArr[currNum], left:boxleftArr[currNum]});
	
	}
	for (j=2; j<=totaltopic; j++) {
	if(currposArr[j]==currNum){
	currposArr[j]=currposArr[4];
	}
	}
	currposArr[4]=currNum; 
	for (k=2; k<=totaltopic; k++) {
	$("#boxID"+currposArr[k]).css("zIndex",zindexArr[k])
	//$("#boxID"+currposArr[k]).attr("tabindex",currposArr[k]+k)
	//alert(currposArr[k]+k)
	}
}