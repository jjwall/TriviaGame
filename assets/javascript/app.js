$(document).ready(function() {

	var x = -1;

	var questionArray = ["Yes or no?", "X or Y?"];

	var correctAnswers = ["yes", "y"]

	var answerArray1 = ["yes", "x"];

	var answerArray2 = ["no", "y"];

	var answerArray3 = ["maybe", "z"];

	var answerArray4 = ["so", "abc"];

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
			alert("correct!");
			nextQuestion();
		}
		else {
			alert("wrong!");
			nextQuestion();
		}
	}

	function answerCheck2 (e) {
		if (answerArray2[x].includes(correctAnswers[x])){
			alert("correct!")
			nextQuestion();
		}
		else {
			alert("wrong!")
			nextQuestion();
		}
	}

	function answerCheck3 (e) {
		if (answerArray3[x].includes(correctAnswers[x])){
			alert("correct!");
			nextQuestion();
		}
		else {
			alert("wrong!");
			nextQuestion();
		}
	}

	function answerCheck4 (e) {
		if (answerArray4[x].includes(correctAnswers[x])){
			alert("correct!")
			nextQuestion();
		}
		else {
			alert("wrong!")
			nextQuestion();
		}
	}
	nextQuestion();

})