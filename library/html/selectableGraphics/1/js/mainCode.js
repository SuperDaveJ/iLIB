var debug = 'true';
var KCcheat = 'false';

//the following is for the progress bar
var ProgressTxt;
var ProgressImg;
var progPercent;
var progImage;
var currPage = parent.currentSCOPage;
var totalPages = parent.numberOfPages;
	
progPercent = currPage / totalPages;
progPercent = progPercent * 100;
progPercent = Math.round(progPercent);
progPercent = progPercent + "";
progPercent = progPercent.substring(0,progPercent.length-1) + "0";

if (currPage > 1 & currPage < totalPages)
	{	progImage = "images/percent" + progPercent + ".gif";	} 
if (currPage == totalPages)
	{	progImage = "images/percent100.gif";	}
if (currPage == "1" | progPercent == "0")
	{	progImage = "images/percent01.gif";
		progPercent = "1";
	}

ProgressImg = '<img height="46" src="' + progImage + '"alt="Screen ' + currPage + ' of ' + totalPages + '" title="Screen ' + currPage + ' of ' + totalPages + '">';
ProgressText = 'Screen ' + currPage + '  of ' + totalPages;
//end code for the progress bar


// the following code is for handling the display and functionality of the Back and Next buttons
// 	DO NOT MODIFY
var BackEnabled = 1;
var NextEnabled = 1;




function handlePageLoading()
{
	// this displays the debug info once the page and layer have loaded
		PageStr = window.document.location.href
		//get only the page name
		var intPos = PageStr.lastIndexOf("/");
		if (intPos == -1){
			strPageName = PageStr;
		}
		else{
			strPageName = PageStr.substring(intPos + 1, PageStr.length);
		}
	if(debug == 'true')
		{
			debugStr = '';
			debugStr = debugStr + 'Mode: <strong>' + parent.displayMethod
			debugStr = debugStr + '</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This is page: <strong>' + strPageName
			debugStr = debugStr + '</strong>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; debug links: '; 
			debugStr = debugStr + '<a href="javascript:parent.currentSCOPage = 1; parent.SCOContentFrame.location.href =  parent.scoPages[parent.currentSCOPage]";><img align="absmiddle" src="images/debug_01.gif" alt="Rewind to the beginning of this lesson" border="0"></a>'; 
			debugStr = debugStr + '<a accesskey="b" href="javascript:parent.goToPreviousPage()";><img align="absmiddle" src="images/debug_02.gif" alt="Go back to the previous page" border="0"></a>'; 
			debugStr = debugStr + '<a accesskey="n" href="javascript:parent.goToNextPage()";><img align="absmiddle" src="images/debug_03.gif" alt="Go ahead to the next page" border="0"></a>'; 
			debugStr = debugStr + '<a href="javascript:parent.currentSCOPage = parent.numberOfPages; parent.SCOContentFrame.location.href =  parent.scoPages[parent.currentSCOPage]";><img align="absmiddle" src="images/debug_04.gif" alt="Fast Forward to the end of this lesson" border="0"></a>'; 
			
			document.getElementById('debug').style.display = "none"; document.getElementById('debug').innerHTML = debugStr}
	else
		{debugStr = ''; }	
	//end of debug stuff	
		
		
	if(currPage == 1)
		{setBackDim()}
	if(NextEnabled == 0)
		{setNextDim()}
	if(currPage == totalPages)
		{
			if(parent.ISDBSenrolled != 0)
			{
				//setToLastPage(); 
				parent.strLessonStatus = "completed";
			}
			else
			{
				//setNextDim();	
			}
			
			
			if(parent.ISDBSenrolled == 1 && parent.strLessonStatus == "completed")
			{
				top.opener.location = parent.ISDBScompletionURL + '?lessonId=' + parent.ISDBSlessonID + '&studentId=' + parent.ISDBSstudentID + '&bookmark=';
			}
			
		}
		
	// the following turns on bookmarking for SCORM LMSs
	if(parent.displayMethod == 'SCORM')
		{parent.SetSCORMbookmark(window.document.location.href)}	
	if(parent.displayMethod == 'ISDBS')
		{parent.SetISDBSbookmark(window.document.location.href)}	
}


function setToLastPage()
{
BackEnabled = 0;
NextEnabled = 0;
document.back1.src='images/subBlank_08.jpg';
document.back1.alt='Back not available';
document.back2.src='images/subBlank_12.jpg';
document.back2.alt='Back not available';
document.next1.src='images/subBlank_09.jpg';
document.next1.alt='Next not available';
document.next2.src='images/subBlank_13.jpg';
document.next2.alt='Next not available';
}

function setBackDim()
{
BackEnabled = 0;
document.back1.src='images/subDim_08.jpg';
document.back1.alt='Back not available';
document.back2.src='images/subDim_12.jpg';
document.back2.alt='Back not available';
}

function setNextDim()
{
NextEnabled = 0;
document.next1.src='images/subDim_09.jpg';
document.next1.alt='Next not available';
document.next2.src='images/subDim_13.jpg';
document.next2.alt='Next not available';
}

function setNextActive()
{
NextEnabled = 1;
document.next1.src='images/sub_09.jpg';
document.next1.alt='Next available';
document.next2.src='images/sub_13.jpg';
document.next2.alt='Next available';
	
}


function HandleMouseDownBack1()
{if(BackEnabled == 1)	{document.back1.src='images/subDn_08.jpg';}if(BackEnabled == 0)	{document.back1.style.cursor = 'default';}}
function HandleMouseOverBack1()
{if(BackEnabled == 1)	{document.back1.src='images/subHi_08.jpg';}if(BackEnabled == 0)	{document.back1.style.cursor = 'default';}}
function HandleMouseOutBack1()
{if(BackEnabled == 1)	{document.back1.src='images/sub_08.jpg';}}
function HandleMouseDownNext1()
{if(NextEnabled == 1)	{document.next1.src='images/subDn_09.jpg';}if(NextEnabled == 0)	{document.next1.style.cursor = 'default';}}
function HandleMouseOverNext1()
{if(NextEnabled == 1)	{document.next1.src='images/subHi_09.jpg';}if(NextEnabled == 0)	{document.next1.style.cursor = 'default';}}
function HandleMouseOutNext1()
{if(NextEnabled == 1)	{document.next1.src='images/sub_09.jpg';}}
function HandleMouseDownBack2()
{if(BackEnabled == 1)	{document.back2.src='images/subDn_12.jpg';}if(BackEnabled == 0)	{document.back2.style.cursor = 'default';}}
function HandleMouseOverBack2()
{if(BackEnabled == 1)	{document.back2.src='images/subHi_12.jpg';}if(BackEnabled == 0)	{document.back2.style.cursor = 'default';}}
function HandleMouseOutBack2()
{if(BackEnabled == 1)	{document.back2.src='images/sub_12.jpg';}}
function HandleMouseDownNext2()
{if(NextEnabled == 1)	{document.next2.src='images/subDn_13.jpg';}if(NextEnabled == 0)	{document.next2.style.cursor = 'default';}}
function HandleMouseOverNext2()
{if(NextEnabled == 1)	{document.next2.src='images/subHi_13.jpg';}if(NextEnabled == 0)	{document.next2.style.cursor = 'default';}}
function HandleMouseOutNext2()
{if(NextEnabled == 1)	{document.next2.src='images/sub_13.jpg';}}


function HandleBackClicked()
{if(BackEnabled == 1)	{parent.goToPreviousPage()}}

function HandleNextClicked()
{
	if(NextEnabled == 1)	
		{
			if(currPage == totalPages)
				{
					if(parent.displayMethod == 'ISDBS' || parent.displayMethod == 'standalone')
						{
							//alert('Normally the window would close now and return the learner to the Learning Management System')
							top.close();top.opener.focus()
						}
					if(parent.displayMethod == 'SCORM')
						{parent.doQuit(parent.strLessonStatus)}
				}
			else
				{
					parent.goToNextPage()
				}
		}

}

// end of Back and Next button functions


function ShowCourseMap()
{
			if(parent.displayMethod == 'ISDBS' || parent.displayMethod == 'standalone')
						{top.close();top.opener.focus()}
					if(parent.displayMethod == 'SCORM')
						{parent.doQuit(parent.strLessonStatus)}				
}




function ShowGlossary()
{
newWindow=window.open("glossary.htm","Glossary","toolbar=no,location=no,directories=no,status=no,scrollbars=yes,menubar=no,resizable=no,width=757,height=500,left=0,top=0");
if (newWindow.opener == null) {newWindow.opener = window};
}

function ShowHelp()
{
newWindow=window.open("help.htm","Help","toolbar=no,location=no,directories=no,status=no,scrollbars=yes,menubar=no,resizable=no,width=757,height=500,left=0,top=0");
if (newWindow.opener == null) {newWindow.opener = window};
}

function OpenFlash(thisMovieFile)
{
vwidth = 340;
vheight = 328;
sWidth = screen.width;
tWidth = (sWidth/2);
hWidth = (vwidth/2);
uWidth = (tWidth-hWidth);

movieWindow=window.open("","Presentation","toolbar=no,location=no,directories=no,status=no,scrollbars=no,menubar=no,resizable=no,width=" + vwidth + ",height=" + vheight + ",left=" + uWidth + ",top=20");
if (movieWindow.opener == null) {movieWindow.opener = window};

MovieText = ''
MovieText = MovieText + '<HTML><HEAD><TITLE>Presentation</TITLE><META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=iso-8859-1"><scri';
MovieText = MovieText + 'pt language="JavaScript" src="scripts/PlayMovie.js" type="text/javascript"></scri';
MovieText = MovieText + 'pt></HEAD>';
MovieText = MovieText + '<BODY onload="self.focus()" BGCOLOR=#FFFFFF LEFTMARGIN=0 TOPMARGIN=0 MARGINWIDTH=0 MARGINHEIGHT=0 style="overflow:hidden">';
MovieText = MovieText + '<TABLE WIDTH=341 BORDER=0 CELLPADDING=0 CELLSPACING=0><TR><TD COLSPAN=6><IMG SRC="images/vidholder_01.gif" WIDTH=341 HEIGHT=9 ALT=""></TD>';
MovieText = MovieText + '</TR><TR><TD ROWSPAN=2><IMG SRC="images/vidholder_02.gif" WIDTH=11 HEIGHT=309 ALT=""></TD>	<TD COLSPAN=4 WIDTH=320 HEIGHT=282 style="background-image:url(images/vidholder_03.gif) ">';
MovieText = MovieText + '<OBJECT	CLASSID="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" 	WIDTH="320" 	HEIGHT="282" 	CODEBASE="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" 	ID=audioMovie>	';
MovieText = MovieText + '<PARAM NAME="MOVIE" VALUE="';
MovieText = MovieText + thisMovieFile
MovieText = MovieText + '">	<PARAM NAME="PLAY" VALUE="false">	<PARAM NAME="LOOP" VALUE="false">		<PARAM NAME="QUALITY" VALUE="high">	<PARAM NAME="SCALE" VALUE="SHOWALL">';
MovieText = MovieText + '<EMBED NAME="audioMovie" SRC="';
MovieText = MovieText + thisMovieFile
MovieText = MovieText + '" WIDTH="320" HEIGHT="282" PLAY="false" LOOP="false" QUALITY="high" SCALE="SHOWALL" swLiveConnect="true" PLUGINSPAGE="http://www.macromedia.com/go/flashplayer/"></EMBED>';
MovieText = MovieText + '</OBJECT>';
MovieText = MovieText + '</TD><TD ROWSPAN=2><IMG SRC="images/vidholder_04.gif" WIDTH=10 HEIGHT=309 ALT=""></TD></TR><TR>';
MovieText = MovieText + '<TD><a href="JavaScript:stopmovie()" onclick="" onmouseover="document.video1.src=\'images/vidholderHi_05.gif\';" onmouseout="document.video1.src=\'images/vidholder_05.gif\';" onmousedown="document.video1.src=\'images/vidholderDn_05.gif\';"><IMG SRC="images/vidholder_05.gif" WIDTH=80 HEIGHT=27 ALT="Stop" border="0" name="video1"></a></TD>';
MovieText = MovieText + '<TD><a href="JavaScript:playmovie()" onclick="" onmouseover="document.video2.src=\'images/vidholderHi_06.gif\';" onmouseout="document.video2.src=\'images/vidholder_06.gif\';" onmousedown="document.video2.src=\'images/vidholderDn_06.gif\';"><IMG SRC="images/vidholder_06.gif" WIDTH=80 HEIGHT=27 ALT="Play" border="0" name="video2"></a></TD>';
MovieText = MovieText + '<TD><a href="JavaScript:go(2);playmovie()" onclick="" onmouseover="document.video3.src=\'images/vidholderHi_07.gif\';" onmouseout="document.video3.src=\'images/vidholder_07.gif\';" onmousedown="document.video3.src=\'images/vidholderDn_07.gif\';"><IMG SRC="images/vidholder_07.gif" WIDTH=80 HEIGHT=27 ALT="Restart" border="0" name="video3"></a></TD>';
MovieText = MovieText + '<TD><a href="JavaScript:self.close()" onclick="" onmouseover="document.video4.src=\'images/vidholderHi_08.jpg\';" onmouseout="document.video4.src=\'images/vidholder_08.jpg\';" onmousedown="document.video4.src=\'images/vidholderDn_08.jpg\';"><IMG SRC="images/vidholder_08.jpg" WIDTH=80 HEIGHT=27 ALT="Close" border="0" name="video4"></a></TD>';
MovieText = MovieText + '</TR><TR><TD COLSPAN=6><IMG SRC="images/vidholder_09.jpg" WIDTH=341 HEIGHT=10 ALT=""></TD></TR></TABLE></BODY></HTML>';

movieWindow.document.write(MovieText);
movieWindow.document.close();
}

function SendMeExternalURL(url)
{
vwidth = 750;
vheight = 460;
sWidth = screen.width;
tWidth = (sWidth/2);
hWidth = (vwidth/2);
uWidth = (tWidth-hWidth);

if(url.indexOf("http") == -1)
	{url = 'http://' + url}

if(url.indexOf("fema.gov") != -1 || url.indexOf("fema.net") != -1)
	{
		newSite=window.open(url,"ExternalSite","toolbar=yes,location=yes,directories=no,status=no,scrollbars=yes,menubar=yes,resizable=yes,width=" + vwidth + ",height=" + vheight + ",left=" + uWidth + ",top=0");
	}
else
	{
		newSite=window.open("","ExternalSite","toolbar=yes,location=yes,directories=no,status=no,scrollbars=yes,menubar=yes,resizable=yes,width=" + vwidth + ",height=" + vheight + ",left=" + uWidth + ",top=0");
		if (newSite != null)
			{
				if (newSite.opener == null) {FBwin.opener = window};
				newSite.document.write('<!DOCTYPE html PUBLIC "-//W3C//Dtd XHTML 1.0 transitional//EN" "http://www.w3.org/tr/xhtml1/Dtd/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml"><head><meta http-equiv="X-UA-Compatible" content="IE=8" /><title>Exit Banner &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</title>');
				newSite.document.write('</head><link rel="stylesheet" href="styles/feedback.css">');
				newSite.document.write('<body bgcolor="white" onload="self.focus()" leftMargin=0 topMargin=0 MARGINWIDTH="0" MARGINHEIGHT="0">');
				newSite.document.write('<TABLE WIDTH=732 BORDER=0 CELLPADDING=0 CELLSPACING=0><TR><TD ROWSPAN=2><IMG SRC="images/extra_01.jpg" WIDTH=619 HEIGHT=45 ALT="Department of Homeland Security Seal, Federal Emergency Management Agency (FEMA)" title="Department of Homeland Security Seal, Federal Emergency Management Agency (FEMA)"></TD><TD><IMG SRC="images/ExternalLink_02.gif" WIDTH=113 HEIGHT=8 ALT=""></TD></TR><TR><TD><a href="#" onclick="self.close()" onmouseover="document.closeme.src=\'images/ExternalLinkHi_03.gif\';" onmouseout="document.closeme.src=\'images/ExternalLink_03.gif\';" onmousedown="document.closeme.src=\'images/ExternalLinkDn_03.gif\';"><IMG SRC="images/ExternalLink_03.gif" WIDTH=113 HEIGHT=37 ALT="Close" border="0" name="closeme"></a></TD></TR><TR><TD COLSPAN=2><IMG SRC="images/sub_05_0.jpg" WIDTH=732 HEIGHT=58 ALT="Graphic collage containing images of a burning bridge, a flooded building, a tornado, a hazmat team, a firefighter, the IPAWS logo, FEMA officials, a man using a cell phone, a NOAA weather radio, and a remote control pointed at television." title="Graphic collage containing images of a burning bridge, a flooded building, a tornado, a hazmat team, a firefighter, the IPAWS logo, FEMA officials, a man using a cell phone, a NOAA weather radio, and a remote control pointed at television."></TD></TR></TABLE>');
				newSite.document.write('<p style="padding-left: 10px; font-family: Verdana, Geneva, sans-serif; font-size: 12px; color: #555555;"><strong>You are now exiting the FEMA Emergency Management Institute’s  (EMI) web site.</strong>  <p style="padding-left: 10px; font-family: Verdana, Geneva, sans-serif; 	font-size: 12px; color: #555555;">You will now be entering the site: <a href=' +url+ ' target="_blank">'+url+'</a>');  
				newSite.document.write('<p style="padding-left: 10px; font-family: Verdana, Geneva, sans-serif; font-size: 12px; color: #555555;">We have provided a link to this site because it has information that may be of interest to our viewers. EMI does not necessarily endorse the views expressed or the facts presented on this site. EMI does not endorse any commercial products that may be advertised or on this site. The FEMA/EMI Privacy Policy does not apply on this site. Please check the site for its Privacy Notice. To return to the course, simply close the new browser window');
				newSite.document.write('<p style="padding-left: 10px; font-family: Verdana, Geneva, sans-serif; font-size: 12px; color: #555555;">Make sure you have added <a href="http://training.fema.gov" target="_blank" >http://training.fema.gov</a> as a Bookmark or Favorite.');
				newSite.document.write('<p style="padding-left: 10px; font-family: Verdana, Geneva, sans-serif; font-size: 12px; color: #555555;"><a alt="Click on this button to view the requested Internet Resource" title="Click on this button to view the requested Internet Resource"onmouseover="document.view.src=\'images/buttonViewLinkHi.gif\';" onmouseout="document.view.src=\'images/buttonViewLink.gif\';" onmousedown="document.view.src=\'images/buttonViewLinkDn.gif\';" href="');
				newSite.document.write(url);
				newSite.document.write('"><img src="images/buttonViewLink.gif" alt="Click on this button to view the requested Internet Resource" title="Click on this button to view the requested Internet Resource" border="0" name="view"></a><br>');
				newSite.document.write('</body></html>');
				newSite.document.close();
			}	
	}
}






function SendMeLocalFile(file)
{
vwidth = 757;
vheight = 560;
sWidth = screen.width;
tWidth = (sWidth/2);
hWidth = (vwidth/2);
uWidth = (tWidth-hWidth);

localSite=window.open(file,"LocalPage","toolbar=yes,location=no,directories=no,status=no,scrollbars=yes,menubar=yes,resizable=yes,width=" + vwidth + ",height=" + vheight + ",left=" + uWidth + ",top=0");
}


function SendMeSummary(file)
{
vwidth = 757;
vheight = 560;
sWidth = screen.width;
tWidth = (sWidth/2);
hWidth = (vwidth/2);
uWidth = (tWidth-hWidth);

localSite=window.open(file,"Summary","toolbar=no,location=no,directories=no,status=no,scrollbars=yes,menubar=no,resizable=yes,width=" + vwidth + ",height=" + vheight + ",left=" + uWidth + ",top=0");
}



function showDefLong(vDef)
{
	
vwidth = 652;
vheight = 435; 	
sWidth = screen.width;
tWidth = (sWidth/2);
hWidth = (vwidth/2);
uWidth = (tWidth-hWidth);

	Hintwin=window.open("","detail","toolbar=no,location=no,directories=no,status=no,scrollbars=yes,menubar=no,resizable=yes,width=" + vwidth + ",height=" + vheight + ",left=" + uWidth + ",top=50");
	if (Hintwin != null)
	{
		if (Hintwin.opener == null) {Hintwin.opener = window};
		
		FeedBackText = ''

		FeedBackText = FeedBackText + '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml"><head>';
		FeedBackText = FeedBackText + '<title>Details  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</title><link href="styles/feedback.css" rel="stylesheet" type="text/css" media="screen"/><link href="styles/FeedbackPrint.css" rel="stylesheet" type="text/css" media="print"/>';
		FeedBackText = FeedBackText + '<meta name="viewport" content="user-scalable=no, width=device-width" /><meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" /></head><body onload="self.focus()" onblur="self.close">';
		FeedBackText = FeedBackText + '<table width="635" border="0" cellpadding="0" cellspacing="0"><tr class="noPrint"><td><img src="images/details_01.jpg" width="549" height="75" alt="Details" /></td>';
		FeedBackText = FeedBackText + '<td><a href="#" onclick="self.print()" onmouseover="document.printme1.src=\'images/detailsHi_02.jpg\';" onmouseout="document.printme1.src=\'images/details_02.jpg\';" onmousedown="document.printme1.src=\'images/detailsDn_02.jpg\';"><img src="images/details_02.jpg" width="41" height="75" alt="Print"  border="0" name="printme1"/></a></td>';
		FeedBackText = FeedBackText + '<td><a href="#" onclick="self.close()" onmouseover="document.closeme1.src=\'images/detailsHi_03.jpg\';" onmouseout="document.closeme1.src=\'images/details_03.jpg\';" onmousedown="document.closeme1.src=\'images/detailsDn_03.jpg\';"><img src="images/details_03.jpg" width="45" height="75" alt="Close"   border="0" name="closeme1"/></a></td>';
		FeedBackText = FeedBackText + '</tr><tr><td colspan="3" width="635" height="343" valign="top" style="padding-left:10px; padding-right:10px; "><p>';
		FeedBackText = FeedBackText + vDef;
		FeedBackText = FeedBackText + '</p></td></tr></table></body></html>';
	
	
		Hintwin.document.write(FeedBackText);
		Hintwin.document.close();
	}	
}


//this is for sound only flash files


function getFlashMovieObject(movieName)
{
  if (window.document[movieName]) 
  {
    return window.document[movieName];
  }
  if (navigator.appName.indexOf("Microsoft Internet")==-1)
  {
    if (document.embeds && document.embeds[movieName])
      return document.embeds[movieName]; 
  }
  else // if (navigator.appName.indexOf("Microsoft Internet")!=-1)
  {
    return document.getElementById(movieName);
  }
}

function StopFlashMovie(vID)
{
	var flashMovie=getFlashMovieObject(vID);
	flashMovie.StopPlay();
}

function PlayFlashMovie(vID)
{
	var flashMovie=getFlashMovieObject(vID);
	flashMovie.Play();
	//embed.nativeProperty.anotherNativeMethod();
}


function RewindFlashMovie(vID)
{
	var flashMovie=getFlashMovieObject(vID);
	flashMovie.Rewind();
}

function NextFrameFlashMovie(vID)
{
	var flashMovie=getFlashMovieObject(vID);
	// 4 is the index of the property for _currentFrame
	var currentFrame=flashMovie.TGetProperty("/", 4);
	var nextFrame=parseInt(currentFrame);
	if (nextFrame>=10)
		nextFrame=0;
	flashMovie.GotoFrame(nextFrame);		
}

function LoadSoundFile(vSound,vID) 
{
	//alert('loading');
	document.write(
	'<object classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" ' + '\n' +
		'codebase=\"http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=4,0,2,0\" ' + '\n' +
		'width=\"1\" ' + '\n' +
		'height=\"1\"' + '\n' +
		'ID=\"' + vID + '\" ' + '\n' +
		'NAME=\"audioMovie\">' + '\n' +
		'<PARAM NAME=\"FrameNum\" VALUE=\"1\">' + '\n' +
		'<PARAM NAME=\"quality\" VALUE=\"high\">' + '\n' +
		'<PARAM NAME=\"playing\" VALUE=\"false\">' + '\n' +
		'<PARAM NAME=\"LOOP\" VALUE=\"false\">' + '\n' +
		'<PARAM NAME=\"movie\" VALUE=\"' + vSound + '\">' + '\n' +
		'<embed src=\"' + vSound + '\" ' + '\n' +
		'quality=high pluginspage=\"http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash\" ' + '\n' +
		'type=\"application/x-shockwave-flash\" ' + '\n' +
		'width=\"1\" ' + '\n' +
		'height=\"1\" ' + '\n' +
		'PLAY=\"false\" ' + '\n' +
		'name=\"' + vID + '\" ' + '\n' +
		'loop=\"false\" ' + '\n' +
		'swliveconnect=\"true\">' + '\n' +
		'</embed> ' + '\n' +
	  '</object>' + '\n'
			); 
}

//C2 added comment tool code
var vpPath = "http://www.c2survey.com/virtualPilot/";	//path to Virtual Pilot site

function addComment() {
	comWin = window.open(vpPath + 'addComment.asp?uID=NA&cID=EPI_EPFE&mID=1&lID='+parent.getLesson()+'&pID='+parent.getPage(), "Comments", "width=800,height=600,scrollbars=no");
}

function viewComment() {
	viewWin = window.open(vpPath + 'reviewComments.asp?uID=NA&cID=EPI_EPFE&mID=1&lID='+parent.getLesson()+'&pID='+parent.getPage(), "Comments", "width=800,height=600,scrollbars=yes");
}