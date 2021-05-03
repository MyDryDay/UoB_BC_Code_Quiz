// variables 
let currQuestionIndex = 0; // Index is at 0 
const time = questions.length * 20; // 20 seconds per question
let timer; // Declaring empty constiable for timer

const btnStart = document.getElementById('startQuiz');
const questionEl = document.getElementById('questions');
const queTitleEl = document.getElementById('questionTitle');
const answersEl = document.getElementById('answers');
const ansAEl = document.getElementById('ansA');
const ansBEl = document.getElementById('ansB');
const ansCEl = document.getElementById('ansC');
const initialEl = document.getElementById('initials');
const btnSubmit = document.getElementById('submit');
const timerEl = document.getElementById('timer')

// Function to start quiz
const startQuiz = () => {
    // Assign the 'Start' portion of the site to startEl const
    const startEl = document.getElementById('startScn');
    // Give it the 'hide' class
    startEl.setAttribute('class', 'hide');
    // Remove the 'hide' class from questionEl & answersEl
    const removeHide = [questionEl, answersEl];

    removeHide.forEach(el => {
        el.classList.remove('hide');
        console.log(el);
    });

    getQuestion();
}


// Function to get new question title & choices
const getQuestion = () => {
    let currQuestion = questions[currQuestionIndex];
    queTitleEl.textContent = currQuestion.question;

    const clearEl = [ansAEl, ansBEl, ansCEl];
    clearEl.forEach(el => {
        el.textContent = '';
    });

    ansAEl.textContent = currQuestion.ansA;
    ansBEl.textContent = currQuestion.ansB;
    ansCEl.textContent = currQuestion.ansC;

    const ansIds = ['ansA', 'ansB', 'ansC'];
    ansIds.forEach(el => {
        document.getElementById(el).addEventListener('click', handleClick);
    });

}

// Function to check which answer user has selected
// If correct, move onto next question, if incorrect subtract time
// If correct, indicate this to user somehow, same with incorrect
// If no more questions, end the quiz, if there are questions call this function again
const handleClick = () => {
    currQuestionIndex++;

    if(currQuestionIndex === questions.length){
        console.log("This is where our endQuiz function will be called.");
        endQuiz();
    } else {
        getQuestion();
    }
}


// Function to end the quiz
function endQuiz(){
    // Show the end portion
    const endEl = document.getElementById('endScn');
    endEl.classList.remove('hide');

    // Hide the questions & answers portions
    questionEl.setAttribute('class', 'hide');
    answersEl.setAttribute('class', 'hide');
}

// Function to handle the timer & progress bar
// If timer reaches 0, end the quiz

// Function to handle saving scores & initials to hiscores

// Declare 'on click' events
// submit for hiscore & start for beginning the quiz
btnStart.onclick = startQuiz;
