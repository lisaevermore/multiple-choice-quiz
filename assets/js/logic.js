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
    loadQuestion();
    }

    // function loadQuestion() {
        // // reset feedback
        // feedback.classList.add("hide");
        // feedback.textContent = "";
        
        // // get current question
        // const current = questions[currentQuestion];
        
        // // set question title
        // questionTitle.textContent = current.title;
        
        // // clear previous choices
        // choicesDiv.innerHTML = "";
        
        // // load choices
        // current.choices.forEach(function(choice) {
        // const button = document.createElement("button");
        // button.classList.add("choice");
        // button.textContent = choice;
        // choicesDiv.appendChild(button);
        // });
        // }
        function displayQuestions(questions) {
            let currentQuestion = 0;
            let title = document.getElementById("question-title");
            let choices = document.getElementById("choices");
          
            function showQuestion() {
              title.innerHTML = questions[currentQuestion].title;
              choices.innerHTML = "";
              for (let i = 0; i < questions[currentQuestion].choices.length; i++) {
                let choice = document.createElement("div");
                choice.innerHTML = questions[currentQuestion].choices[i];
                choice.addEventListener("click", checkAnswer);
                choices.appendChild(choice);
              }
            }
            showQuestion(); 
  }
  
  displayQuestions(question);
        
