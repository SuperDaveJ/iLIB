var triesUser = 1;
var triesLimit = 1;
function my_DropFunc() {
	if ( strCorrect.indexOf(dd.obj.name) >= 0 && dd.obj.getEltBelow().name.indexOf("target") != -1 ) {
		dd.obj.moveTo(dd.elements.target.defx, dd.elements.target.defy);
		dd.obj.hide();
		uCorrect += 1;
		//dd.obj.parent.hide();
	} else {
		dd.obj.moveTo(dd.obj.defx, dd.obj.defy);
	}
	if ( uCorrect == nCorrect ) {
		//Correct
		//if (parent.inQuiz) parent.quiz[qID] = 1;	//set question status
		disableDrag();
		showFeedback(fdbkCorrect);
	}
}

function disableDrag() {
	for (var i=0; i<nObj; i++) {
		eval("dd.elements.img"+(i+1)+".setDraggable(false)");
	}
}
/********** disable context menu *************/
var message="This function is disabled!"; 
document.oncontextmenu = new Function("alert(message); return false;");