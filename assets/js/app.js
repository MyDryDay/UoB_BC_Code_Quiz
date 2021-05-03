// variables 
let currQuestionIndex = 0; // Index is at 0 
let time = questions.length * 20; // 20 seconds per question
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
let timerEl = document.getElementById('timer')

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
    });

    // Set the timer to increment/decrement in units of one second
    timer = setInterval(timerFunct, 1000);
    // Set the contents of timerEl to the value of the timer itself
    timerEl.textContent = time;

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
const handleClick = (e) => {
    console.log(e.target.id);
    // If the answer clicked is not equal to the correct answer, subtract 10 seconds from the timer
    // and check if the timer has hit 0 as a result.
    // Refresh the timer value displayed on the page.
    if(e.target.id !== questions[currQuestionIndex].correct){
        // set time equal to itself - 10
        time -= 10;

        // Check to see if the timer has dropped below 0 as a result of answering incorrectly
        if(time < 0){
            // If it has, set time to 0
            time = 0;
        }

        // Refresh the time displayed on the HTML page
        timerEl.textContent = time;
    }
    
    currQuestionIndex++;

    // if(currQuestionIndex === questions.length){
    //     console.log("This is where our endQuiz function will be called.");
    //     endQuiz();
    // } else {
    //     getQuestion();
    // }

    currQuestionIndex === questions.length ? endQuiz() : getQuestion();
}


// Function to end the quiz
const endQuiz = () => {
    // Prevent the timer from decreasing further
    clearInterval(timer);

    // Show the end portion
    const endEl = document.getElementById('endScn');
    endEl.classList.remove('hide');

    // Hide the questions & answers portions
    questionEl.setAttribute('class', 'hide');
    answersEl.setAttribute('class', 'hide');
}

// Function to handle the timer & progress bar
// If timer reaches 0, end the quiz
const timerFunct = () => {
    // Reduce the timer each second
    time--;
    timerEl.textContent = time;

    // If timer reaches 0, end the quiz
    if(time <= 0){
        endQuiz();
    }
}

// Function to handle saving scores & initials to hiscores

// Declare 'on click' events
// submit for hiscore & start for beginning the quiz
btnStart.onclick = startQuiz;
