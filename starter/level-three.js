/*
 * DOTS: Level Three
 *
 */
let score = 0
let balls = document.querySelectorAll(".js-ball")
let levelWinner = document.querySelector(".level-winner")
let scoreDisplay = document.querySelector(".js-score")
let heightBall = document.querySelector(".level-three .ball:first-of-type")



for (let i = 0; i < balls.length; i++) {
    balls[i].addEventListener('click', function() {
        let inc = parseInt(this.getAttribute('data-increment'))
        let sizeChange = (heightBall.clientHeight)
        sizeChange -= 2
        sizeChange = sizeChange + "px"
        console.log(sizeChange)
       // let sizeBall = .1
        score += inc
        scoreDisplay.innerText = score
        heightBall.style.height = sizeChange
        heightBall.style.width = sizeChange
        
        console.log(balls[i].getAttribute('data-increment'))

        if (balls[i] === "yes"){
            console.log("yes")
        } else {
            console.log("no")
        }

        if (score >= 100){

            levelWinner.style.opacity = 1
        }
 

  });
}