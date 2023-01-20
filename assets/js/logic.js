// Variables
let time = 60; // starting time in seconds
let currentQuestion = 0; // keep track of current question
let score = 0; // keep track of score
// select elements
const startButton = document.getElementById("start");
const questionsDiv = document.getElementById("questions");
const questionTitle = document.getElementById("question-title");
const choicesDiv = document.getElementById("choices");
const endScreen = document.getElementById("end-screen");
const finalScore = document.getElementById("final-score");
const initialsInput = document.getElementById("initials");
const submitButton = document.getElementById("submit");
const feedback = document.getElementById("feedback");
const timer = document.getElementById("time");



// Event listeners
startButton.addEventListener("click", startQuiz);
choicesDiv.addEventListener("click", checkAnswer);
submitButton.addEventListener("click", saveScore);

// Functions
function startQuiz() {
    // hide start screen
    startButton.parentElement.classList.add("hide");
    
    // start timer
    setInterval(function() {
    time--;
    timer.textContent = time;
    if (time === 0) {
    endQuiz();
    }
    }, 1000);
    
    // show questions
     questionsDiv.classList.remove("hide");
    displayQuestions();
    // 
  }


function displayQuestions(questions) {
      // let currentQuestion = 0;
      let title = document.getElementById("question-title");
      let choices = document.getElementById("choices");
      //console.log(choices);
              function showQuestion() {
                title.innerHTML = questions[currentQuestion].title;
                //console.log(title);
                  choices.innerHTML = "";
                  for (let i = 0; i < questions[currentQuestion].choices.length; i++) {
                    let button = document.createElement("button");
                    button.textContent = questions[currentQuestion].choices[i];
                    let choice = document.createElement("div");
                    choice.innerHTML = questions[currentQuestion].choices[i];
                    choice.addEventListener("click", checkAnswer);
                    choices.appendChild(choice);
                  }
                }
   showQuestion(); 
}
      
 displayQuestions(question);

    function checkAnswer(event) {
    // check if answer is correct
    const selected = event.target;
    if (!selected.classList.contains("choice")) {
    return;
    }
    const correct = selected.textContent === questions[currentQuestion].answer;
    
    // display feedback
    feedback.classList.remove("hide");
    if (correct) {
    feedback.textContent = "Correct!";
    score++;
    } else {
    feedback.textContent = "Incorrect!";
    time -= 10; // subtract time for incorrect answer
    }
    
    // move to next question
    currentQuestion++;
    if (currentQuestion === questions.length) {
    endQuiz();
    } else {
    loadQuestion();
    }
    }
    function endQuiz() {
        // hide questions
        questionsDiv.classList.add("hide");
        
        // show end screen
        endScreen.classList.remove("hide");
        
        // set final score
        finalScore.textContent = score;
    }
        
    function saveScore() {
      // get initials
      const initials = initialsInput.value;
      
      // save score
      localStorage.setItem("initials") 
    }

