var triesLimit = 2;
var triesUser = 0;

function showCorrect() {
	var form = document.form1;
	for (i = 0; i < form.Quiz.length; i++) {
		form.elements[i].value = correctAnswer.charAt(i);
	}
}

function judgeInteraction() {	
	var form = document.form1
	var userAnswer = ""
	
	//checks to see if the question has been attempted or not
	for (var i=0; i < form.Quiz.length; i++)  {
		userAnswer = userAnswer + form.Quiz[i].value;
	}		
	if (userAnswer.length != correctAnswer.length) strTemp = "<p>You have not filled in all fields.  Please try again.</p>";
	else {
		triesUser = triesUser + 1;
		if (userAnswer == correctAnswer) { 
			//Correct
			triesUser = triesLimit;
			strTemp = fdbkCorrect;
			disableQ();
		} else {
			if (triesUser == triesLimit) {
				//Last Incorrect
				showCorrect();
				strTemp = fdbkWrong2;
				disableQ();
			} else {
				//First incorrect
				for (i = 0; i < form.Quiz.length; i++) {
					if (userAnswer.charAt(i) != correctAnswer.charAt(i)) {	
						form.Quiz[i].value = ''
					}
				}
				strTemp = fdbkWrong1;
			}
		}
	}
	showFeedback(strTemp);	
}

function disableQ() {
	for (var i=0; i < document.form1.Quiz.length; i++) {					
		 document.form1.Quiz[i].disabled = "disabled";
	}
}

/********** disable context menu *************/
//var message="This function is disabled!"; 
//document.oncontextmenu = new Function("alert(message); return false;");