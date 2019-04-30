var bandOptions;
var keysToPress;
var computerGuess;
var answers;
var remaingLetters;

function rungame(){
// this is the selection of bands available for the computer to select from. Purposely chose none with spaces so I didn't have to deal withthat
bandOptions = ["sublime", "tlc","jewel", "tupac", "oasis", "soundgarden", "beck","radiohead","weazer","genesis"] ;

// these are the characters available for the user to guess the band
keysToPress = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"] ;

// this is the selection the coputer has made from the bandoptions var
computerGuess = bandOptions[0];//Math.floor(Math.random() * bandoptions.length)];
    console.log(computerGuess)

// this is an empty array that will match the number of letters the user has guessed 
answers = [];
    for (var i = 0; i <bandOptions.length; i++) {
        answers[i] = "_";
    } ;   
// how many letters are remaining to guess, how many blank spaces to fill
remainingLetters = bandOptions.length;
console.log(remainingLetters);
}

rungame();

document.onkeyup = function(event) {
    console.log(event.key);
    var guess = event.key;

    console.log(keysToPress.includes(guess));
    if (keysToPress.includes(guess)) {
        { if (computerGuess.includes(guess)
            /* )}
        else {
            alert("Oops! Please select a valid letter key. ")
        }
    } */


    // the game loop
    if (remainingLetters > 0) {
    // shows the users progress
    //document.write(answers.join(" "));
    }
    else {
        alert("You're out of guesses, time to brush up on your 90's music.")
        rungame();
    }
    
    //update answers and remainingLetters
    for (var j = 0; j < bandOptions.length; j++) {
        if (bandOptions[j] === guess) {
            andswer[j] = guess;
            remainingLetters--;
        }
    }
}

/*
flows to do:

checking guess against computer guess:
-if guess is not part of keysToPress, alert "opps..." and resume game.
-if guess is part of already guess var aler user "looks like you have already used this letter!" resume game. (create a correctGuess var)
-if the guess is a part of of keys to press, compare the guess to the computerguess. 
    if guess is a subset of computerguess and is not in already guessed, take one off remaining guesses and log it in the current word. AND
        mark that letter as part of the already guessed letters

once remainingLetters goes to zero alert "Game over! Time to brush up on some 90's hits. Press ok to play again" rerun rungame function upon click
once correctGuess var = ComputerGuess alert "Nice job! Press ok to play again" rerun rungame function










// helpful for later: 
// var res = str.toLowerCase(); 
// document.getElementById("game").innerText=whoWins
// while (remaingLetters > 0) {
    //gamecode here
    //show the input from the player
    //update answers array and remainingLetters for every correct guess
// }