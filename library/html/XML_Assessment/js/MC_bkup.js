/* jQuery based Multiple Choice Question with distractor specific feedback
 * C2 XZ - Sept 2012
 */
var triesUser = 0;
var triesLimit = parent.gtriesLimit;
var letters = new Array("A", "B", "C", "D", "E", "F", "G", "H");

var judgeInteraction = function() {
	//var direction =  "f";
	var ansUser = $("input:radio:checked").attr("id");
	parent.uA[parent.qOrder[parent.iq]-1] = ansUser;
	//$("#btnSubmit").removeAttr("href");
	$("#btnSubmit").click(function () {return false;});
	if (triesLimit > 0) {
		if (ansUser == parent.arrCorrectAns[parent.iq]) {
			showFeedback("Correct!");
			triesUser = triesLimit;
			//alert("haa "+triesUser +", "+ triesLimit)
		} else showFeedback("Incorrect.")
		triesUser += 1;
	} else goNextQ();
	
}

function goNextQ() {

	$("#btnSubmit").unbind('click');
	if (triesUser >= triesLimit) {
	  	//if (direction=="f") {
		  	parent.iq += 1;
		  	if (parent.iq == parent.nQs) {			
			  	if (confirm("This is the last question. Select Cancel if you would like to go back and check your answers. Select OK to continue to the reporting page.")==true) parent.iq += 1;
			  	else parent.iq -= 1;
			}
//	  	} else {
//		  	parent.iq -= 1;
//	  	}
	  triesUser = 0;
	
		if (parent.iq < parent.nQs  ) {		
			tempiq=parent.iq;
			writenextq(parent.qOrder[tempiq])
		} else finalstep()
	}
}



/********** disable context menu *************/
//var message="This function is disabled!"; 
//document.oncontextmenu = new Function("alert(message); return false;");

function writenextq(n) {
	var q_stem_temp = parent.assementData[n-1].getElementsByTagName("QuestionStem")[0] 
	var q_stem = q_stem_temp.childNodes[0].nodeValue;
	

var distracters = new Array();
var dist = parent.assementData[n-1].getElementsByTagName("Option"); 
var nItems = parent.assementData[n-1].getElementsByTagName("Option").length;
for (var i=0; i<nItems; i++) {
		distracters[i] = dist[i].childNodes[0].nodeValue;
		//selected[i]= 0;
	}
	
	var strHTML = ""
		for (var i=0; i<distracters.length; i++) {
			//table cells
			
			strHTML = strHTML + "<tr><td  class='rdck'><input name='mc' id='" + (i+1) + "' type='radio' /></td>";
			strHTML = strHTML + "<td class='letter' >" + letters[i] + ".</td>";
			strHTML = strHTML + "<td class='disTxt' width='95%'><label for='" + letters[i] + "'>" + distracters[i] + "</label></td></tr>"	
		}

	strHTML = strHTML + "<tr><td colspan='3' height='10'></td></tr>"
	//done button		
		strHTML = "<table width='90%' border='0' cellspacing='3' cellpadding='3'>"+ strHTML + "  <tr><td colspan='3' align='center'><span id='done'><a href=\"javascript:judgeInteraction('f')\" id='btnSubmit'><img src=\"assets/submit.png\" name='submit' id='submit' alt='Submit' border='0' /></a></span></td></tr></table>"
	
		
	document.getElementById("question").innerHTML =  "<p class='PageT'>Group "+(parent.group +1)+ " Question "+(parent.iq+1)+" of "+(parent.nQs )+"</p><p>"+q_stem+"</p>"+"<form id='qForm'>"+strHTML+"</form>"
}

//====final step: highlight correct answer and lock them up ==
function finalstep() {
	parent.lastQ = true;
	var totalC = 0; 
	var strHTML = "";
	var strTemp = "";
	var scorePct;

	var arrUnitN = new Array()
	var arrUnitC = new Array()
	//var arrUnitQ = new Array()
	for (var i=0; i<16; i++) {
		arrUnitN[i]=0;
		arrUnitC[i]=0;
		//arrUnitQ[i]="";
	}
	
	//alert(parent.frames['controller'].uA+ " and " + parent.frames['controller'].arrCorrectAns)
	for (var i=0; i<parent.nQs; i++) {
		var unitNum = parent.assementData[i].getElementsByTagName("Unit")[0].childNodes[0].nodeValue;
		
		arrUnitN[unitNum-1]=arrUnitN[unitNum-1]+1;
		//alert(parent.uA[i] + ", and "+ parent.arrCorrectAns[i])
		if (parent.uA[i] == parent.arrCorrectAns[i])	{
			totalC += 1;
			arrUnitC[unitNum-1]=arrUnitC[unitNum-1]+1
		} //else arrUnitQ[unitNum] += "<li>"+parent.frames['controller'].assementData[i].getElementsByTagName("QuestionStem")[0].childNodes[0].nodeValue+"</li>";
		
    }
	for (var i=1; i<arrUnitN.length; i++) {
		if (Math.round(arrUnitC[i]/arrUnitN[i]*100)<70) strTemp = strTemp + "<li>Unit "+ (i+1) +"</li>" //<ul>"+ arrUnitQ[i]+"</ul></li>"
	}
	if (strTemp != "" ) strTemp = "<ul>"+ strTemp +"</ul>" //"<div id='lytable' style='top:-20px; height:350px; padding-right:7px; scrollbar-arrow-color:#000000; scrollbar-base-color:#63570d; overflow: auto;'><ul>"+ strTemp +"</ul></div>";
	
	
	scorePct = Math.round (totalC/parent.nQs * 100)
	
	strHTML = " You answered " + totalC + " questions correctly. Your score is " + scorePct + " %. <br /><br />"
	if (scorePct >= 70) strHTML = "Congratulations! " + strHTML
	
	if (strTemp != "" & scorePct >= 70 ) strHTML = strHTML + "Based on the questions you missed, you should consider reviewing the following Unit(s): " + strTemp;
	else if (strTemp == "" & scorePct >= 70) strHTML = strHTML
	else strHTML = strHTML + "Based on the questions you missed, you need to review the following Unit(s): " + strTemp;
	document.getElementById("question").innerHTML =  "<p class = 'PageT'>Scoring Report</p><p>" + strHTML + "</p>"

	

//	document.getElementById("PageT").innerHTML = "Scoring Report"
//	document.getElementById("Prompt").innerHTML = "You have finished the exam!  Exit the test to return to the Med+Learn menu page."
//	parent.lastQ = true;
//	document.getElementById("Back").style.visibility = "hidden"
//	document.getElementById("Next").style.visibility = "hidden"

}