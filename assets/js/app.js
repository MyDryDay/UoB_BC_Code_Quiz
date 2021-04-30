// Variables 
var currQuestion = 0; // Index is at 0 
var time = questions.length * 20; // 20 seconds per question
var timer; // Declaring empty variable for timer

var btnStart = document.getElementById('startQuiz');
var questionEl = document.getElementById('questions');
var queTitleEl = document.getElementById('questionTitle');
var ansAEl = document.getElementById('ansA');
var ansBEl = document.getElementById('ansB');
var ansCEl = document.getElementById('ansC');
var initialEl = document.getElementById('initials');
var btnSubmit = document.getElementById('submit');
var timerEl = document.getElementById('timer')

