var lives = 5;
    var lettersGuessed = [];
    var wins = 0;
    var losses = 0;
    var wordArr = ["yoshi", "peach", "mario", "ludwig", "bowser", "toadette", "toad", "luigi", "daisy", "wario", "iggy", "larry", "wendy", "link", "isabelle", "lakitu", "rosalina"];
    var randomWord = wordArr[Math.floor(Math.random() * wordArr.length)];
    var hasFinished = false;
    var gameStarted= false;
    var emptyWord = [];
    resetGame();
    
    function resetGame() {
        lives = 5;
        gameStarted = false;
        
        randomWord = wordArr[Math.floor(Math.random() * wordArr.length)];
        
        lettersGuessed = [];
        emptyWord = [];

        // Build the guessing word and clear it out
        for (i = 0; i < randomWord.length; i++) {
        emptyWord.push("_");
        }
              
        document.getElementById("fullContainer").style.cssText = "display: block";
        document.getElementById("youLose").style.cssText = "display: none";
        document.getElementById("youWin").style.cssText = "display: none";

        updateDisplay();
    }



    function updateDisplay() {

        document.getElementById("totalWins").innerText = "Wins: " + wins;
        document.getElementById("currentWord").innerText = "";
        for (var i = 0; i < emptyWord.length; i++) {
        document.getElementById("currentWord").innerText += emptyWord[i];
        }
        document.getElementById("lives").innerText = "You have " + lives + " lives left, choose wisely.";
        document.getElementById("lettersGuessed").innerText = "You have guessed: " + lettersGuessed;
        document.getElementById("totalLosses").innerText = "Losses: " + losses;
        if(lives <= 0) {
        document.getElementById("youLose").style.cssText = "display:block";
        document.getElementById("fullContainer").style.cssText = "display: none";
        document.getElementById("youLose").innerText = "We have a loser! Press any key to play again, and your word was " + randomWord;
        losses++;
        hasFinished = true;
    }
}
    
    document.getElementById("myContainer").innerHTML = "<h1>Welcome to Mike's Hangman Game!</h1>"  
    document.getElementById("totalWins").innerHTML = "<p>Wins: " + wins + "</p>" 
    document.getElementById("currentWord").innerHTML = "<p>Your word is  " + emptyWord.join("") + "</p>"
    document.getElementById("lives").innerHTML = "<p>You have " + lives + " lives left, choose wisely.</p>"
    document.getElementById("lettersGuessed").innerHTML = "<p>You have guessed: " + lettersGuessed + "</p>"
    document.getElementById("totalLosses").innerHTML = "<p>Losses: " + losses + "</p>"
    
    
    console.log(randomWord);
    

    var Guessed = document.getElementById('Guessed');

    document.onkeyup = function(event) {
        if(hasFinished) {
            resetGame();  
            hasFinished = false;
        }
        else {
            if(event.keyCode >= 65 && event.keyCode <=90){
            userGuess(event.key.toLowerCase());
            }
        }
    }

    function userGuess(letter) {
        if (lives > 0) {
            if(!gameStarted) {
                gameStarted = true;
            }
            if (lettersGuessed.indexOf(letter) === -1) {
                lettersGuessed.push(letter);
                guessCheck(letter);
            }
        }
        updateDisplay();
        checkWin();
    }

    function guessCheck(letter) {
        var positions = [];
        
        for (i = 0; i < randomWord.length; i++) {
            if (randomWord[i] === letter) {
                positions.push(i);
            }
        }
        if (positions.length <= 0) {
            lives--;
        }
        else {
            for(i = 0; i < positions.length; i++) {
                emptyWord[positions[i]] = letter;
            }
        }
        

    }

    function checkWin() {
        if (emptyWord.indexOf("_") === -1) {
            document.getElementById("youWin").style.cssText = "display: block";
            wins++;
            hasFinished = true;
        }
    }   