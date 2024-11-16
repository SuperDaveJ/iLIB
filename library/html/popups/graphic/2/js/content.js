/*********************** Open Pop-up Functions **********************************/
function openWinCentered(myUrl, myTitle, myWidth, myHeight, scrollbar, resize ) {
	// opens the window
	positionTop = (screen.height - myHeight)/2 - 25;
	positionLeft = (screen.width - myWidth)/2 - 5;
	newWin = window.open (myUrl,myTitle,"toolbar=no,location=no,width="+myWidth+",height="+myHeight+",menubar=no,resizable="+resize+",status=no,scrollbars="+scrollbar+",top="+positionTop+",left="+positionLeft+"");
	if (window.focus) newWin.focus();
	return newWin;
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

function showPopupVideo(iTerm, w, h) {
    filename = getPage() + "_vpop.htm?popterm=" + iTerm;
    openWinCentered( filename, "popupText", w, h, "no", "yes" );
}
/*********************** End of Open Pop-up Functions **********************************/