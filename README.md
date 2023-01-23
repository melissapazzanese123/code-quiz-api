# code-quiz-api

API Code Quiz Project


# Description


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

At the scores js file I set the functions to store the initials and the score and to clear the scores. 


# Deployed link 

https://melissapazzanese123.github.io/code-quiz-api/

# Screenshot link

https://github.com/melissapazzanese123/code-quiz-api/commit/8177324f4e012c9b23f15252ee5d474d81274067#diff-045dc65a83ea40605bb4ffd44136abd7f6096568210adb7edc2074b305038bbf

https://github.com/melissapazzanese123/code-quiz-api/commit/8177324f4e012c9b23f15252ee5d474d81274067#diff-0b5bc8119e1c81b705d9915377eebcc4b51ff41094424ef7a3385b170f043efd

https://github.com/melissapazzanese123/code-quiz-api/commit/8177324f4e012c9b23f15252ee5d474d81274067#diff-dff6243df08021499eab71555ca3b1d80b1b2580414d91c815e666f3e8c8b361

https://github.com/melissapazzanese123/code-quiz-api/commit/8177324f4e012c9b23f15252ee5d474d81274067#diff-cd739cf10068aa88b0b15fa65cae9231b23c5e023cb3d766341fcbf1c96adcc2

https://github.com/melissapazzanese123/code-quiz-api/commit/8177324f4e012c9b23f15252ee5d474d81274067#diff-f7cec7714e23d012514958dbb89e521fc1042cea76aab6be21effc1fa36b4fa0




# Credits
List your collaborators, if any, with links to their GitHub profiles.

If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

If you followed tutorials, include links to those here as well.

# License
MIT License

Copyright (c) [year] [fullname]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

# Badges
badmath

Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by shields.io. You may not understand what they all represent now, but you will in time.


