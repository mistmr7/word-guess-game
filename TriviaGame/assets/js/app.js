let startGame = $('#startGame')
let header1 = $('#header1')
let header2 = $('#header2')
let quiz = $('#quiz')
let score = $('#score')
let correct = 0
let total = 8
let timer = 60
var intervalSet
let percentCorrect = function(correct, total) {
    return correct / total
}

// function to show what happens when start button is clicked
startGame.on('click', function(){
    //change the display to display the quiz
    header1.css('display', 'none')
    header2.css('display', 'none')
    quiz.css('display', 'inherit')
    $('#timerHeader').css('display', 'block')
    console.log('it has been clicked')
    run()
})

//start the countdown timer
let run = function() {
    let intervalSet = setInterval(decrement, 1000)
}

//stop the countdown timer
let stop = function() {
    clearInterval(intervalSet)
}

//display the score at the end
let gameSummary = function () {
    score.text(`Congratulations, you got ${correct / 8 * 100}% correct!`)
}

//countdown timer
let decrement = function () {
    

    $('#time').html(`Time remaining: ${timer} seconds`)
    //decrease timer by 1 second per second
    timer--
    
//end game if timer gets to zero
    if (timer <= 0) {
        $('#quiz').css('display', 'none')
        $('#timerHeader').css('display', 'none')
        $('#gameSummary').css('display', 'block')
        $('#cocosaurusDiv').css('display', 'block')
        gameSummary()
        stop()
    }
}

//calculate the amount of correct answers based on radio buttons clicked
$('input[type=radio]').on("change", function() {
    correct =  $('input[value=correct]:checked').length;
    let percentCorrect = correct / 8
})

// write a complete function for the submit button
let submitAnswers = $('#submitButton').on('click', function(){
    $('#quiz').css('display', 'none')
    $('#timerHeader').css('display', 'none')
    $('#gameSummary').css('display', 'block')
    $('#cocosaurusDiv').css('display', 'block')
    gameSummary()
    stop()
})


