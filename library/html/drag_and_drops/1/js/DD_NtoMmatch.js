// JavaScript Document
// override funcs defined within the Lib
function my_PickFunc()
{
    //if (dd.obj.name == 'drag1') alert('Image1 is selected.');
	//alert("object = " + dd.obj.name + "; below = " + dd.elements.img5.getEltBelow().name);
}

function my_DragFunc()
{
}

function my_DropFunc()
{
	switch (dd.obj.getEltBelow().name) {
		case 'target1':
			dd.obj.moveTo(dd.elements.target1.defx, dd.elements.target1.defy);
			break;
		case 'target2':
			dd.obj.moveTo(dd.elements.target2.defx, dd.elements.target2.defy);
			break;
		case 'target3':
			dd.obj.moveTo(dd.elements.target3.defx, dd.elements.target3.defy);
			break;
		case 'target4':
			dd.obj.moveTo(dd.elements.target4.defx, dd.elements.target4.defy);
			break;
		default:
			dd.obj.moveTo(dd.obj.defx, dd.obj.defy);
			break;
	}
}

function evalMatches() {
	for (var i=0; i<nObj; i++) {
		arrUser[i] = eval("dd.elements.img"+(i+1)+".getEltBelow().name");
	}
}

function disableDrag() {
	for (var i=0; i<nObj; i++) {
		eval("dd.elements.img"+(i+1)+".setDraggable(false)");
	}
}

function judgeInteraction() {
	intUserCorrect = 0;
	triesUser += 1;
	var strTemp = "";
	if (triesUser <= triesLimit) {
		evalMatches();
		for (var i=0; i<nObj; i++) {
			if (arrUser[i] == arrCorrect[i]) intUserCorrect += 1;
		}
		if (intUserCorrect == nCorrect) {
			strTemp = fdbkCorrect;
			disableDrag();
		} else {
			if (triesUser != triesLimit) {
				//Not final try. Move incorrect ones back.
				for (var i=0; i<nObj; i++) {
					if (arrUser[i] != arrCorrect[i]) {
						eval("dd.elements.img"+(i+1)+".moveTo(dd.elements.img"+(i+1)+".defx, dd.elements.img"+(i+1)+".defy)");
					}
				}
				strTemp = fdbkIncorrect1;
			} else {
				//Final try. Show correct matches.
				for (var i=0; i<nObj; i++) {
					if (i < nCorrect) {
						eval("dd.elements.img"+(i+1)+".moveTo(dd.elements."+arrCorrect[i]+".defx, dd.elements."+arrCorrect[i]+".defy)");
					} else {
						eval("dd.elements.img"+(i+1)+".moveTo(dd.elements.img"+(i+1)+".defx, dd.elements.img"+(i+1)+".defy)");
					}
				}
				strTemp = fdbkIncorrect2;
				disableDrag();
			}
		}
	}
	showFeedback(strTemp);
}
/********** disable context menu *************/
//var message="This function is disabled!"; 
//document.oncontextmenu = new Function("alert(message); return false;");