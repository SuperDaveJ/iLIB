// override funcs defined within the wz_dragdrop Lib

/************************************
 * C2 Technologies, Inc. - XZ - Dec. 2014
 * Functions in this file are used to drag N objects to M target areas with a DONE button.
 * The objects in a target area can be in any order and placed in any position.
 * An object will be pull back to its original position if it is not in any target area.
 * There are 3 target areas in this example.  You can add or remove target areas based on your need.
 * The objects that are correct in target area 1 should be named drag_a# with # being an integer start from 1.
 * The objects that are correct in target area 2 should be named drag_b# with # being an integer start from 1.
 * For the usage, see the example file named DnD_Build3Lists.htm
***************************************/

function my_PickFunc()
{
}

function my_DragFunc()
{
}

function my_DropFunc()
{
	strName = dd.obj.getEltBelow().name;
	//if not in target area move it back
	if ( (strName!="target_area1") && (strName!="target_area2") && (strName!="target_area3") )
		dd.obj.moveTo(dd.obj.defx, dd.obj.defy);
}

function evalMatches() {
	//For target area 1
	for (var i=1; i<=nCorrect_a; i++) {
		//clear previous data first
		arrUser_a[i-1] = "";
		tempX = eval("dd.elements.drag_a" + i + ".x");
		tempY = eval("dd.elements.drag_a" + i + ".y");
		tX = dd.elements.target_area1.x;
		tY = dd.elements.target_area1.y;
		tW = dd.elements.target_area1.w;
		tH = dd.elements.target_area1.h;
		if ( (tempX > tX) && (tempX < (tX + tW)) && (tempY > tY) && (tempY < (tY + tH)) ) {
			arrUser_a[i-1] = eval("dd.elements.drag_a" + i + ".name");	//drag_ai
		}
	}
	
	//For target area 2
	for (var i=1; i<=nCorrect_b; i++) {
		//clear previous data first
		arrUser_b[i-1] = "";
		tempX = eval("dd.elements.drag_b" + i + ".x");
		tempY = eval("dd.elements.drag_b" + i + ".y");
		tX = dd.elements.target_area2.x;
		tY = dd.elements.target_area2.y;
		tW = dd.elements.target_area2.w;
		tH = dd.elements.target_area2.h;
		if ( (tempX > tX) && (tempX < (tX + tW)) && (tempY > tY) && (tempY < (tY + tH)) ) {
			arrUser_b[i-1] = eval("dd.elements.drag_b" + i + ".name");	//drag_bi
		}
	}
	
	//For target area 3
	for (var i=1; i<=nCorrect_c; i++) {
		//clear previous data first
		arrUser_c[i-1] = "";
		tempX = eval("dd.elements.drag_c" + i + ".x");
		tempY = eval("dd.elements.drag_c" + i + ".y");
		tX = dd.elements.target_area3.x;
		tY = dd.elements.target_area3.y;
		tW = dd.elements.target_area3.w;
		tH = dd.elements.target_area3.h;
		if ( (tempX > tX) && (tempX < (tX + tW)) && (tempY > tY) && (tempY < (tY + tH)) ) {
			arrUser_c[i-1] = eval("dd.elements.drag_c" + i + ".name");	//drag_ci
		}
	}
}

function disableDrag() {
	for (var i=1; i<=nCorrect_a; i++) {
		eval("dd.elements.drag_a" + i + ".setDraggable(false)");
	}
	for (var i=1; i<=nCorrect_b; i++) {
		eval("dd.elements.drag_b" + i + ".setDraggable(false)");
	}
	for (var i=1; i<=nCorrect_c; i++) {
		eval("dd.elements.drag_c" + i + ".setDraggable(false)");
	}
	for (var i=0; i<nObj-nCorrect; i++) {
		eval("dd.elements.drag_s"+(i+1)+".setDraggable(false)");
	}
}

function judgeInteraction() {
	uCorrect = 0;
	TriesUser += 1;
	if (TriesUser > TriesLimit) return
	
	strMoveBacks = "";	
	uCorrect = 0;
	evalMatches();
	for (var i=0; i<nCorrect_a; i++) {
		if (arrCorrect_a[i] == arrUser_a[i]) uCorrect += 1;
		else strMoveBacks += arrCorrect_a[i] + ",";
	}
	for (var i=0; i<nCorrect_b; i++) {
		if (arrCorrect_b[i] == arrUser_b[i]) uCorrect += 1;
		else strMoveBacks += arrCorrect_b[i] + ",";
	}
	for (var i=0; i<nCorrect_c; i++) {
		if (arrCorrect_c[i] == arrUser_c[i]) uCorrect += 1;
		else strMoveBacks += arrCorrect_c[i] + ",";
	}
	
	if (uCorrect == nCorrect) {
		//Correct
		if (parent.inQuiz) parent.quiz[qID] = 1;	//set question status
		strTemp = fdbkCorrect;
		disableDrag();
	} else if (uCorrect == 0) {
		TriesUser -= 1;
		strTemp = fdbkIncorrect0;
	} else {
		for (var i=1; i<=(nObj-nCorrect); i++) {
			//move the ones that do not belong to any correct group back to their initial positions.
			eval("dd.elements.drag_s" + i + ".moveTo(dd.elements.drag_s" + i + ".defx, dd.elements.drag_s" + i + ".defy)");
		}
		
		if (TriesUser < TriesLimit) {
			//first try
			if (strMoveBacks != "") {
				strMoveBacks = strMoveBacks.substring(0, strMoveBacks.length-1);
				arrMoveBacks = strMoveBacks.split(",");
			}
			for (var i=0; i<arrMoveBacks.length; i++) {
				eval("dd.elements." + arrMoveBacks[i] + ".moveTo(dd.elements." + arrMoveBacks[i] + ".defx, dd.elements." + arrMoveBacks[i] + ".defy)");
			}
			strTemp = fdbkIncorrect1;
		} else {
			//final try
			//move correct one to their target positions.
			for (var i=1; i<=nCorrect_a; i++) {
				eval("dd.elements.drag_a" + i + ".moveTo(dd.elements.target_area1.defx + " + arrCP[i-1][0] + ", dd.elements.target_area1.defy + " +arrCP[i-1][1] + ")");
			}
			for (var i=1; i<=nCorrect_b; i++) {
				eval("dd.elements.drag_b" + i + ".moveTo(dd.elements.target_area2.defx + " + arrCP[nCorrect_a+i-1][0] + ", dd.elements.target_area2.defy + " + arrCP[nCorrect_a+i-1][1] + ")");
			}
			for (var i=1; i<=nCorrect_c; i++) {
				eval("dd.elements.drag_c" + i + ".moveTo(dd.elements.target_area3.defx + " + arrCP[nCorrect_a+nCorrect_b+i-1][0] + ", dd.elements.target_area3.defy + " + arrCP[nCorrect_a+nCorrect_b+i-1][1] + ")");
			}
			strTemp = fdbkIncorrect2;
			disableDrag();
		}
	}

	showFdbk(strTemp);
}

function showFdbk(fromfdbk) {
	//alert(blnmultiP)
	var strTemp = "";
	var strTitle;
	if (parent.inQuiz) strTitle = "Assessment Question Feedback";
	else strTitle = "Knowledge Challenge Feedback";
	positionTop = (screen.height - 450)/2 - 25;
	positionLeft = (screen.width - 630)/2 - 5;
	newWin = window.open ("","Feedback","toolbar=no,width=500,height=400,menubar=no,resizable=yes,status=no,scrollbars=no,top="+positionTop+",left="+positionLeft+"");
	newWin.focus(); //openWinCentered(fdbcname, "Feedback", 630, 600, "no" );
	if (newWin != null)
	{
	if (newWin.opener == null) {newWin.opener = window};
	strTemp	= strTemp + "<!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Transitional//EN' 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd'>";
	strTemp	= strTemp + "<html xmlns='http://www.w3.org/1999/xhtml'>";
	strTemp	= strTemp + "<meta http-equiv='Content-Type' content='text/html; charset=utf-8' />"
	strTemp	= strTemp + "<title>" + strTitle + "</title>"
	strTemp	= strTemp + "<link rel='stylesheet' type='text/css' href='css/popbox_m.css' />"
	strTemp	= strTemp + "</head><body><div id='popTitle'><h1 class='title'>" + strTitle + "</h1></div><div id='popText'>"
	strTemp	= strTemp + fromfdbk
	strTemp	= strTemp + "</div><div id='close'><a href='javascript:self.close();' title='close'>";
		strTemp += "X</a></div>"
	strTemp	= strTemp + "</body></html>"
	strTemp	= strTemp + ""
	
		//newWin.document.getElementById("pText").innerHTML = arrPopup[fromfdbk];
		newWin.document.write(strTemp);
		newWin.document.close();
	}
}
