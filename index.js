let buttonColors = ["red", "blue", "green", "yellow"]
let gamePatterns = []
let userClickedPattern = []

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

//detect when any of the buttons are clicked 
$(".btn").click(function(){
    //store the id of the button that got clicked.
    let userChosenColor = $(this).attr("id") 
    //assign to userClickedPattern array   
    userClickedPattern.push(userChosenColor)
  })