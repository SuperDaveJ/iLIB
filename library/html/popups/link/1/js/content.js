var popWin1, popWin2
var newWin = new Array();
var largestWindowIndex = 0; 

/*********************** Open Pop-up Functions **********************************/
function openWinCentered(myUrl, myTitle, myWidth, myHeight, scrollbar, resize ) {
	// opens the window
	closepopup();
	positionTop = (screen.height - myHeight)/2 - 25;
	positionLeft = (screen.width - myWidth)/2 - 5;
	newWin[largestWindowIndex] = window.open (myUrl,myTitle,"toolbar=no,location=no,width="+myWidth+",height="+myHeight+",menubar=no,resizable="+resize+",status=no,scrollbars="+scrollbar+",top="+positionTop+",left="+positionLeft+"");
	if (window.focus) newWin[largestWindowIndex].focus();
	largestWindowIndex = largestWindowIndex + 1; 
	return newWin[largestWindowIndex-1];
}

function closepopup() {
	for(var i= 0; i < newWin.length; i++)
	if (false == newWin[i].closed) newWin[i].close();
}

function getPage() {
	//returns current page file name in lower case without file extension.
	arrTemp = new Array();
	arrTemp2 = new Array();
	arrTemp = location.href.split("/");
	arrTemp2 = arrTemp[arrTemp.length-1].split("?");
	var strTemp = arrTemp2[0];
	var intTemp = strTemp.indexOf(".htm");
	strTemp = strTemp.substring(0,intTemp);
	return strTemp.toLowerCase();
}

function show_cc() {
	if (hasCC == true) {
		filename = parent.getPage() + "_cc.htm";
		openWinCentered( filename, "Transcript", 550, 450, "no", "yes" );
	}
}

function showPopup(iTerm) {
	if ((popWin2 != undefined) && (popWin2 != null) ) popWin2.close();
    filename = parent.getPage() + "_pop.htm?popterm=" + iTerm;
    popWin1 = openWinCentered( filename, "popupText", 550, 450, "no", "yes" );
}

function showPopupGraphic(iTerm) {
	if ((popWin1 != undefined) && (popWin1 != null) ) popWin1.close();
    filename = parent.getPage() + "_gpop.htm?popterm=" + iTerm;
    popWin2 = openWinCentered( filename, "popupText", 750, 700, "no", "yes" );
}

function showPopupCustom(iTerm, w, h) {
	//opens a custom width and height pop-up
	//if ((popWin1 != undefined) && (popWin1 != null) ) popWin1.close();
    filename = parent.getPage() + "_gpop.htm?popterm=" + iTerm;
    openWinCentered( filename, "popupText", w, h, "no", "yes" );
}
/*********************** End of Open Pop-up Functions **********************************/