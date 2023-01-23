
//variables to keep track of quiz state 
let currentQuestionIndex = 0;
let time = questions.length * 15;
let timerID;


//HTML elements;
let questionsElement = document.getElementById("questions");
let timerElement = document.getElementById("time");
let choicesElement = document.getElementById("choices");
let submitButton = document.getElementById("submit");
let startButton = document.getElementById("start");
let initialElement = document.getElementById("initials");
let feedbackElement = document.getElementById("feedback");


//This is a function 
function questionClick(){
    if (this.value !== questions[currentQuestionIndex].answer) {
    time -= 15; 

    if(time < 0) { 
        time = 0;
    }

    timerElement.textContent = time;

    feedbackElement.textContent = "Wrong"
    } else {
    feedbackElement.textContent = "Correct"; 
    }


    feedbackElement.setAttribute("class", "feedback");
    
    setTimeout(function(){
        feedbackElement.setAttribute("class", "feedback hide")
    }, 1000);

    currentQuestionIndex++;

    if(currentQuestionIndex === questions.length) {
        quizEnd()
    } else {
        getQuestion(); 
    }
}

//this is a function 
function getQuestion(){
    let currentQuestion = questions[currentQuestionIndex];

    let titleElement = document.getElementById("question-title");

    titleElement.textContent = currentQuestion.title;

    choicesElement.innerHTML = "";

    currentQuestion.choices.forEach(function(choice, index) {
        let choiceButton = document.createElement("button");

        choiceButton.setAttribute("class", "choice");
        choiceButton.setAttribute("value", choice);

        choiceButton.textContent = `${index +1}. ${choice}`

        choiceButton.addEventListener("click", questionClick);

        choicesElement.append(choiceButton);
    })

}


//This is a function 
function quizEnd(){
    clearInterval(timerID);

    let endScreenElement = document.getElementById("end-screen");
    endScreenElement.removeAttribute("class");

    let finalScoreElement = document.getElementById("final-score");
    finalScoreElement.textContent = time;

    questionsElement.setAttribute("class", "hide");
}

//This is a function 
function clockTick(){
    time--;
    timerElement.textContent = time;

    if(time <= 0){
        quizEnd();
    }
} 

//This is a function 
function startQuiz (){
    let = startScreenElement = document.getElementById("start-screen");
    startScreenElement.setAttribute("class", "hide");

    questionsElement.removeAttribute("class");

    timerID = setInterval(clockTick, 1000)  

    timerElement.textContent = time;

    getQuestion();
}




//This is a function
function saveHighScore (){
    let initials = initialElement.value.trim();
    console.log(initials);
    
    if  (initials !== "") {
        let highscores = JSON.parse(localStorage.getItem("highscores")) || [];
        let newScore = {
            score: time,
            initials: initials
        }

        highscores.push(newScore);
        localStorage.setItem("highscores", JSON.stringify(highscores));

        window.location.href = "highscores.html";
    }
}

//This is a function
function checkForEnter(event) {
    if(event.key === "Enter") {
        saveHighScore();
    }
}

//These are the events 
startButton.addEventListener("click", startQuiz);

submitButton.addEventListener("click", saveHighScore);

initialElement.addEventListener("keyup", checkForEnter);