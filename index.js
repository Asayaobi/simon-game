let buttonColors = ["red", "blue", "green", "yellow"]
let gamePatterns = []

function nextSequence() {
    //pick random color for the game
    let randomNumber = Math.floor(Math.random()*4)
    let randomChosenColor = buttonColors[randomNumber]
    //assign to game pattern
    gamePatterns.push(randomChosenColor)
    //add flash animation to the button
    $(`#${randomChosenColor}`).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)
    //add audio to the button
    let a = new Audio(`sounds/${randomChosenColor}.mp3`);
    a.play()
}