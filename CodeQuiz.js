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
var progress = document.getElementById("progress");
var scoreContainer = document.getElementById("scoreContainer");

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
        question: "What does CSS stand for?",
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
var count = 0;
var questionTime = 10; // 10s
var gaugeWidth = 150; // 150px
var gaugeUnit = gaugeWidth / questionTime;
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
    showProgress();
    showCounter();
    TIMER = setInterval(showCounter, 1000);
}

// Function to show how much of the quiz has been completed

function showProgress() {
    for(var qIndex = 0; qIndex <= lastQuestion; qIndex++) {
        progress.innerHTML += "<div class='prog' id =" + qIndex + "></div>";
    }
}

// Functions to show which questions were correct/incorrect in HTML

function answerIsCorrect() {
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

function answerIsWrong() {
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// Function to control the counter

function showCounter() {
    if(count <= questionTime) {
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    } else {
        count = 0;
        answerIsWrong();
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
        answerIsCorrect();
    } else {
        answerIsWrong();
        timer--;
    }
    count = 0;
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

    var scorePercent = Math.round(100 * score/questions.length);

    var finalScore = (scorePercent = 100) ? "Wow, 100%!" :
                     (scorePercent >= 80) ? "Very good!" :
                     (scorePercent >= 60) ? "Not bad!" :
                     (scorePercent >= 40) ? "Could use some work, keep trying!" :
                     (scorePercent >= 20) ? "You will get there eventually!" :
                     "Read some more guides and come back!";
    
    scoreContainer.innerHTML = "<p>" + finalScore + "</p>";
    scoreContainer.innerHTML = "<p>" + scorePercent + "</p>";

}
