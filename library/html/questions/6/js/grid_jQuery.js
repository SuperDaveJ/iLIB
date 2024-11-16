// JavaScript Document

var triesUser = 0;
var triesLimit = 2;
//var pagecorrect = "W";
var fdbkWrong0 = "<p>You have not made any selections.  Please try again.</p>";
	

//final incorrect
//var strC="";
//for (i=0; i<nRows; i++) {
//		for (j=0; j<nCols; j++) {
//			if (arrCorrectAns[i][j] == 1) {
//				strC =  strC +  "<li>"+ arrRowTitle[i+1] + " matches " + arrColTitle[j+1] +". </li>"
//			}
//		}
//}

//********************* NO change is needed below this line. *************************
var judgeInteraction = function () {
	 

	if (triesUser < triesLimit ) { 
		var strFeedback;
		//var ch = "";
				
		var unChecked = "";
		var nCorrect = 0;

		for (var i=1; i<=nRows; i++) {
			var crow=eval("strCorrectRow"+[i]);
			var ansUser = "";
			for (var j=1; j<=nCols; j++) {
				
				//ch = $("input[name='row"+i+j+"']:checked").attr("id");
				ansUser += $("input[name='row"+i+j+"']").prop("checked") ? "1" : "0";
				//alert($("input[name='row"+i+j+"']").prop("checked")) 
				//ansUser += (ch == undefined) ? "0" : "1" //ch.substr(ch.length-1, 1);
				
			}

				 unChecked += (ansUser.indexOf("1") == -1)? "0" :"1";
				
				if (ansUser != crow && unChecked.indexOf("1") != -1) {
					break;
				} else if (ansUser == crow) nCorrect += 1;
				//alert(nCorrect+", "+unChecked)
		}
		
		if (unChecked.indexOf("1") == -1 ) {
			//No answer selected
			strFeedback = fdbkWrong0;
		} else {
			triesUser += 1;
			if (nCorrect == nRows) {
				//Correct answers
				strFeedback = "<p><strong>Correct!</strong></p><p>"+fdbkCorrect+"</p>";
				//didcorrect = true;
				triesUser = triesLimit;
				//pagecorrect = "C";
				disableQ();
			} else {
				//Incorrect
				if (triesUser == triesLimit) {
					//Second incorrect
					for (var i=1; i<=nRows; i++) {
						var crow=eval("strCorrectRow"+[i]);
						for(var j=1; j<=nCols; j++) {
						$("input[name='row"+i+j+"']").prop("checked", function(l, value) {
						
							if ( parseInt(crow.charAt(j-1)) == l+1 ) return true;
							else return "";
						});
						}
					}	
					strFeedback = "<p><strong>Incorrect.</strong></p><p>"+fdbkWrong2+"</p>";
					disableQ();
				} else  { //1st Incorrect
					strFeedback = "<p><strong>Incorrect.</strong></p><p>"+fdbkWrong1+"</p>";
					
					
				}
			}
		}
		
		//parent.updateUserA(pagecorrect);
		showFeedback(strFeedback);
	}
}
 
function disableQ() {
	$("input:checkbox").attr("disabled", "disabled");
    $("input:checkbox").css("cursor", "default");
}
 
//function changeCursor(strCursorName) {
//	//cursor for radio buttons
//	for (i=0; i<nRows; i++) {
//		for (j=0; j<nCols; j++) {
//			document.forms[0].elements[i*nCols+j].style.cursor = strCursorName;
//		}
//	}
//	//cursor for Done button
//	if (strCursorName != "pointer")
//		document.links[0].style.cursor = "default";	
//	else
//		document.links[0].style.cursor = strCursorName;
//}
 


jQuery( function($) {
  $("#qForm").append("<table id='qTable' width='" + widthTable + "%' cellspacing='0' cellpadding='2' border=0></table>");
  myTr = "<tr><th width='" + widthCol0 + "%' class='gridTop' scope='col' >" + arrColTitle[0] + "</th>";
  for (j=1; j<=nCols; j++) {
	  myTr += "<th width='" + arrColWidth[j-1] + "'  class='gridTop' scope='col' >" + arrColTitle[j] + "</th>";
  }
  myTr += "</tr>";
  $("#qTable").append(myTr);
  
  for (i=1; i<=nRows; i++) {
	  myTr = "<tr><td class='gridLeft' scope='row'>" + arrRowTitle[i] + "</td>";
	  //get rid of the punctuation at the end if there is one
	  chrTemp = arrRowTitle[i].substr(arrRowTitle[i].length-1,1);
	  if ( (chrTemp == ".") || (chrTemp == "!") || (chrTemp == "?") ) 
		  strTemp = arrRowTitle[i].substring(0, arrRowTitle[i].length-1);
	  else strTemp = arrRowTitle[i];
	  for (j=1; j<=nCols; j++) {
		  myTr += "<td align='center' valign='middle' class='gridStyle'>";
		  myTr += "<input name='row" + i + j+"' id='r"+i+"c"+j+"' type='checkbox' title='Match " + strTemp + " with " + arrColTitle[j] + ".";
		  myTr += "' tabindex='" + ((i-1)*nCols + j) + "' /></td>";
	  }
	  myTr += "</tr>";
      $("#qTable").append(myTr);
  }
  
  $("input:checkbox").css("cursor", "pointer");

});

/********** disable context menu *************/
var message="This function is disabled!"; 
//document.oncontextmenu = new Function("alert(message); return false;");