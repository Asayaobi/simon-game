let buttonColors = ["red", "blue", "green", "yellow"]
let gamePatterns = []

function nextSequence() {
    let randomNumber = Math.floor(Math.random()*4)
    let randomChosenColor = buttonColors[randomNumber]
    gamePatterns.push(randomChosenColor)
}

