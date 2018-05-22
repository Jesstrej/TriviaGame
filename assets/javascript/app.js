

$(document).ready(function () {
    var index = 0;
    var countdownTimer = {
        time: 30,
        reset: function () {
            this.time = 30;
            $('.timer').html('<h3>' + this.time + ' seconds remaining</h3>');
        },
        start: function () {
            counter = setInterval(countdownTimer.count, 1000);
        },
        stop: function () {
            clearInterval(counter);
        },
        count: function () {
            countdownTimer.time--;
            //console.log(countdownTimer.time+"()");
            //$(".timer").innerHTML=countdownTimer.time;
            if (countdownTimer.time >= 0) {
                $(".timer").html("<h3>" + countdownTimer.time + " seconds remaining</h3>");
            }
            else {
                index++;
                answerWrong();
                countdownTimer.reset();
                if (index < questionArray.length) {
                    loadQuestion(index);
                } else {
                    $(".answerchoice").hide();
                    showScore();


                }
            }
        }

    }

var correct = 0;
var wrong = 0;
var q1 = {
    question: "Who is the current President of the U.S.?",
    possibleAnswer: ["A. G.Bush",
        "B. D.Trump",
        "C. B.Obama",
        "D. R.Reagen"],

    flags: [false, true, false, false],
    answer: "B. D.Trump"
};

var q2 = {
    question: "Who was the first woman to be inducted into the Rock and Roll Hall of Fame?",
    possibleAnswer: ["A. Aretha Franklin", "B. Tina Turner", "C. Janet Jackson", "D. Beyonce"],
    flags: [true, false, false, false],
    answer: "A. Aretha Franklin"

};

var q3 = {
    question: "Which 1993 American science-fiction adventure film had a plot that involved creating a theme park from cloned dinosaurs?",
    possibleAnswer: ["A. The Land Before Time", "B. Ice Age", "C. Jurassic Park", "D. The Good Dinosaur"],
    flags: [false, false, true, false],
    answer: "C. Jurassic Park"
};

var q4 = {
    question: "Which is the smallest state in the U.S.?",
    possibleAnswer: ["A. California", "B. Texas", "C. Rhode Island", "D. Arizona"],
    flags: [false, false, true, false],
    answer: "C. Rhode Island"
};

var q5 = {
    question: "Which is the biggest state in the U.S.?",
    possibleAnswer: ["A. California", "B. Alaska", "C. Rhode Island", "D. Texas"],
    flags: [false, true, false, false],
    answer: "B. Alaska"
};

var q6 = {
    question: "Which actor played a FedEx employee that became stranded on an Island in the 2000 drama film cast away.?",
    possibleAnswer: ["A. Brad Pitt", "B. Jack Nicholson", "C. Robert De Niro", "D. Tom Hanks"],
    flags: [false, false, false, true],
    answer: "D. Tom Hanks"
};



var questionArray = [q1, q2, q3, q4, q5, q6];

function loadQuestion(questionSelection) {
    console.log(questionSelection);
    countdownTimer.reset();

    $(".question").html("<h3>" + questionArray[questionSelection].question + "</h3>");
    $("#buttonA").text(questionArray[questionSelection].possibleAnswer[0]);
    $("#buttonB").text(questionArray[questionSelection].possibleAnswer[1]);
    $("#buttonC").text(questionArray[questionSelection].possibleAnswer[2]);
    $("#buttonD").text(questionArray[questionSelection].possibleAnswer[3]);
    $(".buttonContainer").show();
       
}

function setup() {
    index = 0;
    $('.question').append('<button id="startButton">START</button>');
    $('#startButton').on('click', function () {
        $(this).hide();
        countdownTimer.start();
        loadQuestion(index);
    });
}

function getAnswer() {

    $('.answerchoice').on('click', function () {
        console.log('alert', index);
        index++;
        console.log('click', index);
        $(".question").text('');
        $("#buttonA").text('');
        $("#buttonB").text('');
        $("#buttonC").text('');
        $("#buttonD").text('');
        loadQuestion();
    })
}

function answerCorrect() {
    correct++;
    alert("Correct!");
    console.log("correct");
}

function answerWrong() {
    wrong++;
    alert("Incorrect!");
    console.log("wrong");
}


function showScore() {
    $('.question').empty();
    $('.question').append("<h2><p>" + correct + " correct</p></h2>");
    $('.question').append("<h2><p>" + wrong + " incorrect</p></h2>");
    countdownTimer.stop();
    $('.timer').empty();

}

setup();
$('.answerchoice').on('click', function() {
 console.log($(this));
 if(this.id == 'buttonA') {
 	var answerChosen = 'A';
 } else if(this.id == 'buttonB') {
 	answerChosen = 'B';
 } else if (this.id == 'buttonC') {
 	answerChosen = 'C';
 } else if (this.id == 'buttonD') {
 	answerChosen = 'D';
 } 
 if ((answerChosen == 'A') && (questionArray[index].flags[0] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'A') {
 	answerWrong();
 }
 if ((answerChosen == 'B') && (questionArray[index].flags[1] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'B') {
 	answerWrong();
 }
if ((answerChosen == 'C') && (questionArray[index].flags[2] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'C') {
 	answerWrong();
 }
if ((answerChosen == 'D') && (questionArray[index].flags[3] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'D') {
 	answerWrong();
 }

 $(".question").text('');
 $("#buttonA").text('');
 $("#buttonB").text('');
 $("#buttonC").text('');
 $("#buttonD").text('');
 index++;
 if (index < questionArray.length) {
 	loadQuestion(index);
 } else {
 	$(".answerchoice").hide();
 	showScore();
 }
});
})

