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

	var restart = $('<input type="button" value="Restart"/>');

	var time;

	function startTimer (e) {

		time = 15;

		setInterval(function(){
			console.log(time);
			$("#timer").empty();
			$("#timer").append(time);
			if (time === 0){
			$("#message").text("Out of time!");
			unansweredCount++;
			displayGif();
	}
	time--;}, 1000);
}

startTimer();

	function nextQuestion (e) {
		x++;
		$("#gifs-appear-here").hide();
		$("#message").text("");
		$("#timer").show();
		question.show();
		answer1.show();
		answer2.show();
		answer3.show();
		answer4.show();
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
		if (x === 10){
			setTimeout(function(){
				question.hide();
				answer1.hide();
				answer2.hide();
				answer3.hide();
				answer4.hide();
				$("#correct").show().append("Correct answers: " + correctCount);
				$("#wrong").show().append("Wrong answers: " + wrongCount);
				$("#unanswered").show().append("Unanswered: " + unansweredCount);
				restartFunc();}, 500);
		}
	}

	function displayGif (e) {
		$("#timer").hide();
		question.hide();
		answer1.hide();
		answer2.hide();
		answer3.hide();
		answer4.hide();
		//will need to show after alloted time to display gif is up

		$("#gifs-appear-here").show().empty();
		var gifArray = ["The Republic of Texas", "Civil War", "gibberish", "Mockingbird", "Republican", "Large Crowd", "Texas", "Austin", "Houston", "Greg Abbott"]
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        gifArray[x] + "&api_key=dc6zaTOxFJmzC&limit=10";

      $.ajax({
        url: queryURL,
        method: "GET"
      }).done(function(response) {
      	var results = response.data;
      	var gifDiv = $("<div class='item'>");
      	var gifImage = $("<img>");
      	gifImage.attr("src", results[0].images.fixed_height.url);
      	gifDiv.prepend(gifImage);
          $("#gifs-appear-here").prepend(gifDiv);
	});
      setTimeout(function(){
      	time = 15;
      	nextQuestion();
      	}, 4900);
}

	answer1.bind("click", answerCheck1);
	answer2.bind("click", answerCheck2);
	answer3.bind("click", answerCheck3);
	answer4.bind("click", answerCheck4);

	function answerCheck1 (e) {
		if (answerArray1[x].includes(correctAnswers[x])){
			$("#message").text("Correct!");
			correctCount++;
			displayGif();
		}
		else {
			$("#message").text("Wrong!");
			wrongCount++;
			displayGif();
		}
	}

	function answerCheck2 (e) {
		if (answerArray2[x].includes(correctAnswers[x])){
			$("#message").text("Correct!");
			correctCount++;
			displayGif();
		}
		else {
			$("#message").text("Wrong!");
			wrongCount++;
			displayGif();
		}
	}

	function answerCheck3 (e) {
		if (answerArray3[x].includes(correctAnswers[x])){
			$("#message").text("Correct!");
			correctCount++;
			displayGif();
		}
		else {
			$("#message").text("Wrong!");
			wrongCount++;
			displayGif();
		}
	}

	function answerCheck4 (e) {
		if (answerArray4[x].includes(correctAnswers[x])){
			$("#message").text("Correct!");
			correctCount++;
			displayGif();
		}
		else {
			$("#message").text("Wrong!");
			wrongCount++;
			displayGif();
		}
	}
	nextQuestion();

	var restartFunc = (function() {
    var executed = false;
    return function () {
        if (!executed) {
            executed = true;
            $("#timer").hide();
            time = -1;
            $("#reset").show();
			$("#reset").append(restart);
			executed = false;
        }
    };
})();

restart.on("click", function(){
	$("#correct").empty().hide();
	$("#wrong").empty().hide();
	$("#unanswered").empty().hide();
	$("#reset").hide();
	x = -1;
	correctCount = 0;
	wrongCount = 0;
	unansweredCount = 0;
	time = 15;
	nextQuestion();
	question.show();
	answer1.show();
	answer2.show();
	answer3.show();
	answer4.show();
});

})