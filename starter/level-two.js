/*
 * DOTS: Level Two
 *
 */
let score = 0
let balls = document.querySelectorAll(".js-ball")
let levelWinner = document.querySelector(".level-winner")

for (let i = 0; i < balls.length; i++) {
    balls[i].addEventListener('click', function() {

    
    let scoreDisplay = document.querySelector(".js-score")
    score += 10
    scoreDisplay.innerText = score
   //console.log(scoreDisplay)

    if (score >= 100){

        levelWinner.style.opacity = 1
    }
 

  });
}