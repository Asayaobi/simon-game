let buttonColors = ["red", "blue", "green", "yellow"]
let gamePatterns = []
let userClickedPattern = []
let level = 0
let started = false

function nextSequence() {
    //pick random color for the game
    let randomNumber = Math.floor(Math.random()*4)
    let randomChosenColor = buttonColors[randomNumber]
    //assign to game pattern
    gamePatterns.push(randomChosenColor)
    //add flash animation to the button
    $(`#${randomChosenColor}`).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)
    //add audio to the button
    playSound(randomChosenColor)
    animatePress(randomChosenColor)
    //add a level to display on #level-title
    level++
    $("#level-title").text(`Level ${level}`)

}

//detect when any of the buttons are clicked 
$(".btn").click(function(){
    //store the id of the button that got clicked.
    let userChosenColor = $(this).attr("id") 
    //assign to userClickedPattern array   
    userClickedPattern.push(userChosenColor)
    //add audio to the button
    playSound(userChosenColor)
    //add animation
    animatePress(userChosenColor)
  })

  function playSound(name) {
    let a = new Audio(`sounds/${name}.mp3`);
    a.play()
  }

  function animatePress(currentColor) {
    $(`#${currentColor}`).addClass("pressed")
    setTimeout(function () {
        $(`#${currentColor}`).removeClass("pressed");
      },100)
 }

//start the game when the keyboard is pressed
$(document).keydown(function(){
    if (!started) {
        nextSequence()
        started = true
        $("#level-title").text(`Level ${level}`)
    }
  })
