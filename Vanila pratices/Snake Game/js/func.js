
const generateFood = (place) => {
    try {
        let food = document.getElementsByClassName("food")[0]
        place.removeChild(food)
    } catch (error) {

    }
    finally {
        let x = Math.floor((Math.random() * 17) + 2);
        let y = Math.floor((Math.random() * 17) + 2);
        let food = document.createElement('div')
        food.classList.add("food");
        food.style.gridColumnStart = x;
        food.style.gridRowStart = y;
        place.appendChild(food);
        return { x, y }; // Return the newly generated position as an object
    }
}



const runSnake = (snakeElements, dir) => {
    if (dir == "up") {
        snakeElements[0].y -= 1
    } else if (dir == "down") {
        snakeElements[0].y += 1
    } else if (dir == "left") {
        snakeElements[0].x -= 1
    }
    else if (dir == "right") {
        snakeElements[0].x += 1
    }
}
const isover = (snakeElements) =>{
    // Snake into wall
    if (snakeElements[0].x == 0 || snakeElements[0].x == 21 || snakeElements[0].y == 0 || snakeElements[0].y == 21) {
        return true
        
    }
    
    // Snake eats itself
    for (let i = 2; i < snakeElements.length; i++) {
        if (snakeElements[i].x == snakeElements[0].x && snakeElements[i].y == snakeElements[0].y) {
           return true  
        }
        
    }

    return false
}

const DisplayScores = (score, hidisplay, sdisplay)=>{
    let hiscore  = localStorage.getItem('hiscore')
    if (hiscore===null) {
        localStorage.setItem("hiscore", JSON.stringify(0))
    }
    else{
        hiscore = parseInt(JSON.parse(localStorage.getItem("hiscore")));
        hidisplay.innerText = `HIGH Score: ${hiscore}`
        if (score>hiscore) {
            localStorage.setItem("hiscore", JSON.stringify(score))
        }
    sdisplay.innerText = `Score: ${score}`

    }
}



export { generateFood, runSnake, isover, DisplayScores};