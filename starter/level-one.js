/*
 * DOTS: Level One
 *
 */


let score = 0
let ball = document.querySelector(".js-ball")
let levelWinner = document.querySelector(".level-winner")


ball.addEventListener('click', function() {
    
    let scoreDisplay = document.querySelector(".js-score")
    score += 10
    scoreDisplay.innerText = score
   //console.log(scoreDisplay)

    if (score >= 100){

        levelWinner.style.opacity = 1
    }

  });