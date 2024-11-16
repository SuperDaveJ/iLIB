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
		strTemp	= strTemp + "</head> <body onUnload='javascript:opener.goNextQ(\"f\");'>";
		strTemp	= strTemp + "<div id='popTitle'><h1 class='title'>" + strTitle + "</h1></div>";
		strTemp	= strTemp + "<div id='popText'>";
		strTemp	= strTemp + fdbkText;
		strTemp	+= "</div> <div id='close'><a href='javascript:self.close(); ' title='close'>";
		strTemp += "X</a>";
		strTemp	= strTemp + "</div></body></html>";
	
		newWin.document.write(strTemp);
		newWin.document.close();
	}
}
/********************** End of Question Feedback *************************/

var CountActive = true;

LeadingZero = true;
DisplayFormat = "Your time left: %%H%%:%%M%%:%%S%%";
FinishMessage = "Your time is up.  No score has been recorded for this attempt.  Please exit the test and begin again.";
var DisplayStr;
var CountStepper = -1;

function CountBack(secs) { //count down the test time

//
  if (secs >= 0 && parent.lastQ == true) {
    document.getElementById("pageN").innerHTML = "You completed the assessment during the required time.";
	document.getElementById("pageN").style.color = "green"
    return;
  } else if (secs < 0) {
	document.getElementById("pageN").innerHTML = FinishMessage;
    return;
  } 

  DisplayStr = DisplayFormat.replace(/%%H%%/g, calcage(secs,3600,24));
  DisplayStr = DisplayStr.replace(/%%M%%/g, calcage(secs,60,60));
  DisplayStr = DisplayStr.replace(/%%S%%/g, calcage(secs,1,60));
  

	if (secs < 30) document.getElementById("pageN").style.color = "red"
  	document.getElementById("pageN").innerHTML = DisplayStr;
  	if (CountActive) setTimeout("CountBack(" + (secs+pCountStepper) + ")", parent.SetTimeOutPeriod);
	
}

function calcage(secs, num1, num2) {
  s = ((Math.floor(secs/num1))%num2).toString();
  if (LeadingZero && s.length < 2)
    s = "0" + s;
  return "<b>" + s + "</b>";
}

if (typeof(DisplayFormat)=="undefined")
  DisplayFormat = "Your time left: %%H%%:%%M%%:%%S%%:";
if (typeof(CountActive)=="undefined")
  CountActive = true;
if (typeof(FinishMessage)=="undefined")
  FinishMessage = "";
if (typeof(pCountStepper)!="number")
  pCountStepper = -1;
if (typeof(LeadingZero)=="undefined")
  LeadingZero = true;
  
pCountStepper = Math.ceil(pCountStepper);
if (pCountStepper == 0)
  CountActive = false;