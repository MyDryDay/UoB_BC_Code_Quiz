// Declare variable to select elements by ID

var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var qImg = document.getElementById("qImg");
var choices = document.getElementById("choices");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var timer = document.getElementById("timer");
var counter = document.getElementById("counter");
var timeGauge = document.getElementById("timeGauge");
var scoreContainer = document.getElementById("scoreContainer");

var totalScore = document.getElementById("totalScore");
var totalTime = document.getElementById("totalTime");
var message = document.getElementById("message");

// Create an array to store our questions, choices & correct answer

var questions = [
    {
        question: "What are the 3 core technologies used in web development?",
        imgSrc: "images/WebTech.jpg",
        choiceA: "HTML, CSS & Javascript",
        choiceB: "HTML, Typescript & jQuery",
        choiceC: "CSS, Javascript & PHP",
        correct: "A"
    }, {
        question: "What does HTML stand for?",
        imgSrc: "images/HTML.png",
        choiceA: "Holy Trinity of Machine Learning",
        choiceB: "HyperText Markup Language",
        choiceC: "Human Telepathy Magic Liquid",
        correct: "B"
    }, {
        question: "What does DOM stand for?",
        imgSrc: "images/DOM.png",
        choiceA: "Disco Oriented Mechanics",
        choiceB: "Document Object Model",
        choiceC: "Delicate Oriental Manuscripts",
        correct: "B"
    }, {
        question: "What kind of loop is pictured?",
        imgSrc: "images/ForLoop.jpg",
        choiceA: "A while loop",
        choiceB: "A for each loop",
        choiceC: "A for loop",
        correct: "C"
    }
];

// The following variables the index of the starting question & the index of the previous question

var lastQuestion = questions.length - 1;
var runningQuestion = 0;
var count = 60;
var quizTime = 60; // 10s
var gaugeWidth = 150; // 150px
var gaugeUnit = gaugeWidth / quizTime;
var TIMER;
var score = 0;

// Function to show each question

function showQuestion() {
    var q = questions[runningQuestion];

    question.innerHTML = "<p>" + q.question + "</p>";
    qImg.innerHTML = "<img src = " + q.imgSrc + ">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

// Event listener to begin a function upon clicking the "Start Quiz" button

start.addEventListener("click", startQuiz); 

// Function to begin the quiz - shows first question, progress & begins timer

function startQuiz() {
    start.style.display = "none";
    showQuestion();
    quiz.style.display = "block";
    // showProgress();
    showCounter();
    TIMER = setInterval(showCounter, 1000);
}

// Function to control the counter

function showCounter() {
    if(count <= quizTime && count >= 0) {
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count--;
    } else {

        if(runningQuestion < lastQuestion) {
            runningQuestion++;
            showQuestion();
        } else {
            clearInterval(TIMER);
            showScore();
        }
    }
}

// Function that checks the answer & moves onto the next question or decreases the timer

function checkAnswer(answer) {
    if(answer == questions[runningQuestion].correct) {
        score++;
    } else {
   
    }
    // count = 10;
    if(runningQuestion < lastQuestion) {
        runningQuestion++;
        showQuestion();
    } else {
        clearInterval(TIMER);
        showScore();
    }
}

// Function to show the score

function showScore() {
    scoreContainer.style.display = "block";

    // Here the percentage a user scores is calculated

    var scorePercent = Math.round(score / questions.length * 100);
    
    // This is a variation of the score, the remaining time left of the quiz 

    var timeRemaining = count;

    // The following displays a message based on the number of questions answered correctly

    var finalScore = (scorePercent >= 80) ? "Very good!" :
                     (scorePercent >= 60) ? "Not bad!" :
                     (scorePercent >= 40) ? "Could use some work, keep trying!" :
                     (scorePercent >= 20) ? "You will get there eventually!" :
                     "Read some more guides and come back!";

    totalScore.innerHTML = "You got " + scorePercent + "%";
    totalTime.innerHTML = "You had " + timeRemaining + " seconds left!";
    message.innerHTML = finalScore;

}



// TO DO
// Fix timer, currently counts up from 0. Must count down from 10s               - FIXED
// Timer is also dependant on each question i.e - a new timer for each question  - FIXED
// Needs to be altered such that there is a single timer for the whole quiz      - FIXED

// Fix showScore. Currently always displays 100%                                 - FIXED
// scoreContainer is missing finalScore message                                  - FIXED

// Create leaderboard feature where users are able to record their score         -
// & their initials

// Progress works but does not actually display anything to screen               -
// Create CSS for app                                                            -