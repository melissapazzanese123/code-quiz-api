function printHighScores () {
let highScores = JSON.parse(localStorage.getItem("highscores")) || [];

highScores.sort(function(a,b) {
    return b.score - a.score;

})

highScores.array.forEach(function(score) {
    let li = document.createElement("li");
    li.textContent = `${score.initials} - ${score.score}`

    let ol = document.getElementById("highscores");

})
}


function clearHighScores () {
    localStorage.removeItem("highscores");
    window.location.reload(); 

}

let clearbutton = document.getElementById("clear");
clearbutton.addEventListener("click", clearHighScores); 

printHighScores();