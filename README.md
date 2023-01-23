# code-quiz-api
API code quiz

The first thing Idecided to do was to break down the Javascript work but separating it on 3 different files within the Javascript folder 

One called Logi.js, another one called questions.js and the third one called scores.js.

Then I created 2 functions to begin with on the score js file. One functio nto print the score and other one to clear the score 

I created a variable let clearButton to be able to add an eventListener for when people click on "clear" 

I added the 3 questions into the questions js file. 

I then started working on the logic into the logic js file. 

I create variables to keep track of the quiz state and variables for my HTML elements selecting them all by Ids. 

After that I added the events using addEventListener to listen to the click at the start, to save the highscore check for when the enter key is pressed. 

At the start quiz function I set added the attributes class and hide then I set that function to remove that attribute of class so that questions would be hidden and the clock was set to start to tick.

I then set the timer at the clockTick function.

At the getQuestions function I created two variables. The first one let currentquestions I set its value to be the question variable in the question js file. The other variable, titleElement I set to get the Id elemtn "question-title" then titleElement will change the text.content to what is the current question index value. 

Then I set the questionClick function to penalise the timer when the answer is wrong, to keep the time equals zero if the time is less than zero and I sued of and else if conditions to tell the computer to write "Correct or Wrong depending on the answer. 

