let buttonColors = ["red", "blue", "green", "yellow"]
let gamePatterns = []
let userClickedPattern = []
let level = 0
let started = false

//start the game when the keyboard is pressed
$(document).keydown(function(){
    if (!started) {
        $("#level-title").text(`Level ${level}`)
        nextSequence()
        started = true
    }
  })

function nextSequence() {
    //clear the previous answer from user
    userClickedPattern = []

    //display level
    level++
    $("#level-title").text(`Level ${level}`)

    //pick random color for the game
    let randomNumber = Math.floor(Math.random()*4)
    let randomChosenColor = buttonColors[randomNumber]
    //assign to game pattern
    gamePatterns.push(randomChosenColor)

    //add flash animation to the button
    $(`#${randomChosenColor}`).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)
    //add audio to the button
    playSound(randomChosenColor)
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
    //check answer
    checkAnswer(userClickedPattern.length -1)
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

 function checkAnswer(currentLevel) {
    //check if the most recent user answer is the same as the game pattern.
    if(gamePatterns[currentLevel] === userClickedPattern[currentLevel]){
        console.log('success')
        //then check that they have finished their sequence
        if (gamePatterns.length === userClickedPattern.length) {
            setTimeout(nextSequence,1000)
        }
    } else {
        console.log('wrong')
        $("#level-title").text("Game Over, Press Any Key to Restart")
        playSound('wrong')
        $("body").addClass("game-over")
        setTimeout(function () {
            $("body").removeClass("game-over");
          },200)

    }
 }