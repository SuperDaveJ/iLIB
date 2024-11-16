/*********************** Open Popup Functions **********************************/
function openWinCentered(myUrl, myTitle, myWidth, myHeight, scrollbar, resize ) {
	// open the window
	positionTop = (screen.height - myHeight)/2 - 25;
	positionLeft = (screen.width - myWidth)/2 - 5;
	newWin = window.open (myUrl,myTitle,"toolbar=no,location=no,width="+myWidth+",height="+myHeight+",menubar=no,resizable="+resize+",status=no,scrollbars="+scrollbar+",top="+positionTop+",left="+positionLeft+"");
	if (window.focus) newWin.focus();
	return newWin;
}
/*********************** End of Open Popup Functions **********************************/

/********************** Question Feedback *************************/
function showFeedback(fdbkText) {
	if (triesUser === triesLimit) {
		$("#next").removeClass();
		$("#next").attr({tabindex: "", href: "javascript:goNext();"});
		enableNext = true;
		//There is no submit button for drag to trash can.
		if ($("#submit").length > 0) $("#submit").hide();
	}

	//feedback title. this added when making modifications
	if (arguments.length == 2) {
		strTitle = "Assessment Question Feedback";
	} else {
		strTitle = "Knowledge Check Question Feedback";
	}
	newWin = openWinCentered("", "Feedback", 500, 400, "no", "yes" );
	style = "css/popbox_m.css";

	
	newWin.focus();
	if (newWin != null) {
		var strTemp = "";	
		strTemp	= strTemp + "<!DOCTYPE html><html><title>" + strTitle + "</title>";
		strTemp	= strTemp + "<link rel='stylesheet' type='text/css' href='" + style + "' />";
		strTemp	= strTemp + "</head> <body>";
		strTemp	= strTemp + "<div id='popTitle'><h1 class='title'>" + strTitle + "</h1></div>";
		strTemp	= strTemp + "<div id='popText'>";
		strTemp	= strTemp + fdbkText;
		strTemp	+= "</div> <div id='close'><a href='javascript:self.close();' title='close'>";
		strTemp += "X</a>";
		strTemp	= strTemp + "</div></body></html>";
	
		newWin.document.write(strTemp);
		newWin.document.close();
	}
}
/********************** End of Question Feedback *************************/