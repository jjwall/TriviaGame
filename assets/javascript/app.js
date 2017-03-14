$(document).ready(function() {

	var x = -1;

	var correctCount = 0;

	var wrongCount = 0;

	var unansweredCount = 0;

	var questionArray = ["What was Texas known as before being annexed into the USA?", "What side was Texas on during the Civil War?", "What's the offical language of Texas?", "What's the Official State Bird of Texas?", "Texas is predominantly a _________ state.", "Texas is the 2nd biggest state in terms of population.", "Texas is the 2nd biggest state in terms of land mass.", "What's the Capital of Texas?", "What's the largest city in Texas?", "Who's the governor of Texas?"];

	var correctAnswers = ["The Republic of Texas", "Confederate", "No official language", "Mockingbird", "Republican", "True", "True", "Austin", "Houston", "Greg Abbott"]

	var answerArray1 = ["The United State of Texas", "Union", "English", "Mockingbird", "Democratic", "True", "True", "Houston", "Houston", "Rick Perry"];

	var answerArray2 = ["The Republic of Texas", "French", "Spanish", "Swallow", "Libertarian", "False", "False", "Dallas", "Dallas", "Karl Rove"];

	var answerArray3 = ["The Confederate State of Texas", "North", "French", "Dove", "Republican", "Not sure", "Not sure", "Austin", "Austin", "Dan Patrick"];

	var answerArray4 = ["The Nation of Texas", "Confederate", "No official language", "Feasant", "Green Party", "Texas isn't a state", "Texas isn't a state", "San Antonio", "San Antonio", "Greg Abbott"];

	var answer1 = $("#answer1");

	var answer2 = $("#answer2");

	var answer3 = $("#answer3");

	var answer4 = $("#answer4");

	var question = $("#question");


	function nextQuestion (e) {
		x++;
		question.empty();
		answer1.empty();
		answer2.empty();
		answer3.empty();
		answer4.empty();
		question.append(questionArray[x]);
		answer1.append(answerArray1[x]);
		answer2.append(answerArray2[x]);
		answer3.append(answerArray3[x]);
		answer4.append(answerArray4[x]);
	}

	answer1.bind("click", answerCheck1);
	answer2.bind("click", answerCheck2);
	answer3.bind("click", answerCheck3);
	answer4.bind("click", answerCheck4);

	function answerCheck1 (e) {
		if (answerArray1[x].includes(correctAnswers[x])){
			alert("Correct!");
			correctCount++;
			nextQuestion();
		}
		else {
			alert("Wrong!");
			wrongCount++;
			nextQuestion();
		}
	}

	function answerCheck2 (e) {
		if (answerArray2[x].includes(correctAnswers[x])){
			alert("Correct!");
			correctCount++;
			nextQuestion();
		}
		else {
			alert("Wrong!");
			wrongCount++;
			nextQuestion();
		}
	}

	function answerCheck3 (e) {
		if (answerArray3[x].includes(correctAnswers[x])){
			alert("Correct!");
			correctCount++;
			nextQuestion();
		}
		else {
			alert("Wrong!");
			wrongCount++;
			nextQuestion();
		}
	}

	function answerCheck4 (e) {
		if (answerArray4[x].includes(correctAnswers[x])){
			alert("Correct!");
			correctCount++;
			nextQuestion();
		}
		else {
			alert("Wrong!");
			wrongCount++;
			nextQuestion();
		}
	}
	nextQuestion();

})