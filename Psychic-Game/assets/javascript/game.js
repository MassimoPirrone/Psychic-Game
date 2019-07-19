// Variables for tracking wins, losses, and guesses left
var wins= 0;
var losses= 0;
var guessesLeft= 9;
var lettersGuessed = [];
var computerGuess = 0;

//Initial letter
window.onload = function() {
    reset();
}
//Actual Game
document.onkeyup= function(event) {
    var playerGuess = event.key;
    lettersGuessed.push(playerGuess);
    console.log(computerGuess);

    if(playerGuess === computerGuess) {
        wins++;
        reset();
    }
    else{
        guessesLeft = guessesLeft-1;
    }
    if(guessesLeft <=0) {
        losses++;
        reset();

    }

    var html = "<p>Guess what letter I'm thinking of!</p>" +
            "<p>Wins: " + wins + "</p>" +
            "<p>Losses: " + losses + "</p>" +
            "<p>Guesses left: " + guessesLeft + "</p>" +
            "<p>Your guesses so far: " + lettersGuessed + "</p>";

    document.querySelector("#game").innerHTML = html;

}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function reset(){
    guessesLeft= 9;
    lettersGuessed.length = 0;
    computerGuess.length = 0;
    // Get random letter between a-z using Charcode
    var compGuess = String.fromCharCode(getRandomInt(65,90)).toLowerCase();
    computerGuess= compGuess;
    console.log(computerGuess);
}