/*************** Course CONTENT functions ********************/

/***** Initialize variables *****/
var blnLastPage = false;
var enableNext = true;
var enableBack = true;
var hasAudio = false;
var autoPlay = false;
var hasSwitchableImg = false;
var itemsViewed = "0";
var needSuspendData = false;

/**************** Course Comment Tool ****************/
var vpPath = "http://prod.c2ti.com/CommentTool/";	//path to Virtual Pilot site

function addComment() {
	comWin = window.open(vpPath + "addComment.asp?uID=NA&cID=CDC_RWC&mID=1&lID="+getLesson() + "&pID="+getPage(), "Comments", "width=800,height=600,scrollbars=no");
}

function viewComment() {
	viewWin = window.open(vpPath + "reviewComments.asp?uID=NA&cID=CDC_RWC&mID=1&lID="+getLesson() + "&pID="+getPage(), "Comments", "width=800,height=600,scrollbars=yes");
}
/**************** End of Comment Tool ****************/

function exitConfirm(){
	if (confirm("Do you wish to exit the course? Your progress will be saved.")==true) {
		exitCourse();
	}
}

function showNext() {
	enableNext = true;
	$("a.next").css("visibility", "visible");
	$("a.next").removeClass("unavailable");
	$("a.next").attr({tabindex: "", href: nextURL});
}

function hideNext() {
	enableNext = false;
	$("a.next").css("visibility", "hidden");
	$("a.next").addClass("unavailable");
	$("a.next").attr({ tabindex: "-1", href: "javascript: return false;" });
}

function checkStatus(iTerm) {
    //iTerm start from 1.  itemsViewed needs to be defined in content page.
    itemsViewed = itemsViewed.substring(0, iTerm - 1) + "1" + itemsViewed.substring(iTerm);
    if (itemsViewed.indexOf('0') == -1) {
        showNext();
    }
}

/***** Image link functions *****/
function swapImage( evt, imgURL ) {
	var e = evt || window.evt;
	var node;
	if ( e.target ) {
		node = e.target;
	} else {
		node = e.srcElement;
	}
    if (node) {
	    if (node.tagName == "IMG") {
			node.src = imgURL;
		} else {
			node.getElementsByTagName("img")[0].src = imgURL;
		}
	}
	return false;
}

function offHighlight( id, imgId, imgType ) {
	if (itemsViewed.substr(id-1,1) == "1") {
		$("#"+imgId).attr("src", "images/" +imgId + "_2." + imgType); 
	} else {
		$("#"+imgId).attr("src", "images/" +imgId + "_0." + imgType); 
	}
}
function onHighlight( imgId, imgType ) {
	$("#"+imgId).attr("src", "images/" +imgId + "_1." + imgType); 
}
function setVisited( id, imgId, imgType ) {
	checkStatus( id );
	$("#"+imgId).attr("src", "images/" +imgId + "_2." + imgType); 
}
/***** end of Image link functions *****/

/***** code used to fix old version of IE's image problem, need imgSizer.js *****/
function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			if (oldonload) {
				oldonload();
			}
			func();
		}
	}
}

/*********** Enable Next button - disabled for interactions ****************/
/*
document.onkeydown = function(e) {
  var evtobj = window.event ? event : e;
  var code = evtobj.charCode ? evtobj.charCode : evtobj.keyCode;
  var keyPressed = String.fromCharCode(code);
  if (code == 39) { //right arrow key
	showNext();
  }
}
*/

if ( inLMS ) {
	window.onunload = callExitCourse;
}

$(document).ready(function () {
    addLoadEvent(function () {
        imgSizer.collate();
    });

	if ( needSuspendData || blnLastPage ) {
		initializePage();
	}

	$(".pgNumber").html( "Page " + pgNumber + " of " + totalPages );
	$(".prompt").html( strPrompt );

	$(".next").attr("href", nextURL);
	$(".back").attr("href", backURL);
	
	if (blnLastPage && (getLesson() == nLessons) ) {
		//Exit the course and open the link in a new window.
		$(".next").attr("target", "_blank");
		//$(".next").on("click", exitCourse);
		$(".next").click( function() {
			intendedClose = true;
			exitCourse();
		});
	}
	
	$(".menu").attr("href", menuURL);
    $(".menu").on("click", toMenu);
	
    if (!enableNext) $(".next").addClass("unavailable");
    if (!enableBack) $(".back").addClass("unavailable");
	
    $("a").each(function () {
        if ($(this).hasClass("unavailable")) {
            $(this).attr({ tabindex: "-1", href: "javascript: return false;" });
            if ($(this).hasClass("next")) {
				$(this).css("visibility", "hidden");
            }
            if ($(this).hasClass("back")) {
				$(this).css("visibility", "hidden");
            }
        }
    });

});
