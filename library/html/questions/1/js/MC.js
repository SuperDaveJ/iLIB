/* jQuery based Multiple Choice Question with distractor specific feedback
 * C2 XZ - Sept 2012
 */
var triesUser = 0;
var triesLimit = 1;
var letters = new Array("A", "B", "C", "D", "E", "F", "G", "H");

var fdbkIncorrect0  = "<p>You have not made any selections.  Please try again.</p>"

var judgeInteraction = function() {
	var strTemp;
	ansUser = $("input:radio:checked").attr("id");
	if (ansUser == undefined) {
		strTemp = fdbkIncorrect0;
	} else {
		triesUser += 1;
		if (ansUser == ansCorrect) {
			triesUser = triesLimit;
			strTemp = fdbkCorrect;
			disableQ();
		} else {
			if (triesUser == triesLimit) {
				$("input:radio").attr("checked", function(i, value) {
					if ( i == (ansCorrect.charCodeAt(0)-65) ) return "checked";
				});
				strTemp = fdbkFinalIncorrect;
				disableQ();
			} else {
				strTemp = fdbkIncorrect1[ansUser.charCodeAt(0)-65];
			}
		}
	}
	showFeedback(strTemp);
}

function disableQ() {
	$("input:radio").attr("disabled", "disabled");
    $("input[name='mc']").css("cursor", "default");
}

/********** disable context menu *************/
//var message="This function is disabled!"; 
//document.oncontextmenu = new Function("alert(message); return false;");

jQuery( function($) {
  $("#qForm").append("<table id='qTable' width='" + widthTable + "%' cellspacing='0' cellpadding='8' border=0></table>");
  for (var i=0; i<nItems; i++) {
	  myTr = "<tr><td class='rdck'><input name='mc' id='" + letters[i] + "' type='radio' /></td>";
	  myTr += "<td class='letter'>" + letters[i] + ".</td>";
	  myTr += "<td class='disTxt'><label for='" + letters[i] + "'>" + distracters[i] + "</label></td></tr>";
	  $("#qTable").append(myTr);
  }
  $("input[name='mc']").css("cursor", "pointer");
});