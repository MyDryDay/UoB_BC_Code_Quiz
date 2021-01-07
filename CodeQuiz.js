// Declare variable to select elements by ID

var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var questions = document.getElementById("questions");
var qImg = document.getElementById("qImg");
var choices = document.getElementById("choices");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var timer = document.getElementById("timer");
var counter = document.getElementById("counter");
var timeGauge = document.getElementById("timeGauge");
var progress = document.getElementById("progress");
var scoreContainer = docuemnt.getElementById("scoreContainer");

// Create an array to store our questions, choices & correct answer

let questions = [
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