import { generateFood, runSnake, isover, DisplayScores } from './func.js'
let board = document.getElementById("board");
const foodSound = new Audio("../music/food.mp3");
const gameOverSound = new Audio("../music/gameover.mp3");
const moveSound = new Audio("../music/move.mp3");
const music = new Audio("../music/music.mp3");
let snakeElements = [{ x: 17, y: 16 }, { x: 0, y: 0 }]
let foodElement = { x: 10, y: 12 }
let dir = "left"
let score = 0
let CreatedIDS = []
let scoredisplay = document.getElementById("score")
let hiscoredisplay = document.getElementById("hiscore")


// Game loop
const gameSpeed = 7;
let lastRender = 0;


function loop(timestamp) {
    window.requestAnimationFrame(loop);
    let progress = parseInt(timestamp) - lastRender
    if (progress / 1000 < 1 / gameSpeed) {
        return;
    }
    gameEngine()
    lastRender = parseInt(timestamp)

}


// display scores
DisplayScores(score, hiscoredisplay, scoredisplay)


// initial food generation
foodElement = generateFood(board)


// snake head intialization
let snakeHead = document.createElement("div")
snakeHead.className = "head"
snakeHead.style.gridColumnStart = snakeElements[0].x
snakeHead.style.gridRowStart = snakeElements[0].y
board.appendChild(snakeHead)



// main function
function gameEngine() {



// Food eating logic
if (foodElement.x === snakeElements[0].x && foodElement.y === snakeElements[0].y) {
    score += 1;
    foodSound.play();
    snakeElements.push(foodElement);
    let newFoodPosition;
    do {
        newFoodPosition = generateFood(board); // Generate new food position
    } while (snakeElements.some(segment => segment.x === newFoodPosition.x && segment.y === newFoodPosition.y));

    foodElement = newFoodPosition; // Update the foodElement with the new position
}






    // Snake head running logic
    runSnake(snakeElements, dir)
    snakeHead.style.gridColumnStart = snakeElements[0].x
    snakeHead.style.gridRowStart = snakeElements[0].y



    // Eaten food create and run with snake

    snakeElements.forEach((elem, index) => {
        if (index != 0) {
            if (!CreatedIDS.includes(index)) {
                let eatenFood = document.createElement('div')
                eatenFood.classList.add("Eatenfood")
                eatenFood.id = index
                eatenFood.style.gridColumnStart = elem.x
                eatenFood.style.gridRowStart = elem.y
                board.appendChild(eatenFood)
                CreatedIDS.push(index)
                console.log(CreatedIDS)
            }
        }
    })

    for (let i = snakeElements.length - 2; i >= 0; i--) {
        let element = document.getElementById(i + 1)
        snakeElements[i + 1] = { ...snakeElements[i] };
        element.style.gridColumnStart = snakeElements[i + 1].x
        element.style.gridRowStart = snakeElements[i + 1].y
    }



    // Game over logic
    if (isover(snakeElements)) {
        gameOverSound.play()
        music.pause()
        alert("Game over!")
        location.reload()
    }

    // Display score and hiscore
    DisplayScores(score, hiscoredisplay, scoredisplay)
}

//snake direction
window.addEventListener("keydown", (key) => {
    switch (key.key) {
        case "ArrowDown":
            if (dir != "up") {
                dir = "down"
                moveSound.play()
            }
            break;
        case "ArrowUp":
            if (dir != "down") {
                dir = "up"
                moveSound.play()
            }

            console.log("pressed")
            break;
        case "ArrowLeft":
            if (dir != "right") {
                dir = "left"
                moveSound.play()
            }
            break;
        case "ArrowRight":
            if (dir != "left") {
                dir = "right"
                moveSound.play()
            }
            break;
        default:
            window.requestAnimationFrame(loop)
            music.play()
            break;
    }
})
