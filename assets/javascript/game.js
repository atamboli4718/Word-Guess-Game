var bandOptions; //options the computer can choose from
var keysToPress; //established that only letters can be pressed
var computerSelection; //the selection the computer has made from bandOptions
var correctGuesses = []; //tracks the correct letters the user has already guess
var remainingLetters; //number of correct letters the user has not guessed yet. Used to push to the html
var incorrectGuesses;  // this is an empty array that will match the number of letters the user has guessed 
var wins = 0

function rungame() {
// this is the selection of bands available for the computer to select from. Purposely chose none with spaces so I didn't have to deal withthat
bandOptions = ["sublime", "tlc", "tupac", "beck"] ;

// these are the characters available for the user to guess the band
keysToPress = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"] ;

// this is the selection the coputer has made from the bandoptions var
computerSelection = bandOptions[Math.floor(Math.random() * bandOptions.length)];
    console.log(computerSelection)

//this sets up the initial blanks for     
var initialDashes = []; 
for (var i=0; i<computerSelection.length; i++ ) {
    initialDashes.push("_");
}

//tracks letters already guessed that were incorrect
incorrectGuesses = [];
console.log("incorrectGuesses: " + incorrectGuesses);

// how many letters are remaining to guess, how many blank spaces to fill
remainingLetters = computerSelection.length;
console.log("remaining letters to guess: "+ remainingLetters);

correctGuesses = [];
document.getElementById("incorrectGuesses").innerHTML = '';
document.getElementById("computerSelection").innerHTML = initialDashes.join(' ');

}

rungame();

document.onkeyup = function(event) {
    console.log(event.key);
    var guess = event.key;
    console.log(keysToPress.includes(guess));
    
    //if the key pressed is not a letter, or not part of keysToPress var
    if (!keysToPress.includes(guess)) {
        alert ("Oops! Looks like you pressed an invalid key. Please try again");
    }
    //if it is a letter (right or wrong!) but it  has already been pressed
    else if ((incorrectGuesses.indexOf(guess)>-1) || (correctGuesses.indexOf(guess)>-1)) {
        alert ("Looks like you've alredy guessed this letter, try again!");   
    }
    //if it is a valid key that has not been pressed and is part of the computerSelection, push to push to computer selection
    else if ((computerSelection.indexOf(guess)>-1)) { 
        correctGuesses.push(guess);
        var orderedCorrectGuesses = [];
        for (var i = 0; i < computerSelection.length; i++) {
            if (correctGuesses.indexOf(computerSelection[i]) == -1) {
                orderedCorrectGuesses.push("_");
            }
            else {
                orderedCorrectGuesses.push(computerSelection[i]);
            }
        };
        console.log("computerSelection length: " + computerSelection.length + "correctGuesses length: " + correctGuesses.length);
        document.getElementById("computerSelection").innerHTML = orderedCorrectGuesses.join(' ');
        if (correctGuesses.length == computerSelection.length) {
            alert("You won! The correct word was " + computerSelection);
           //writes the number of wins to the page
            wins = wins + 1;
            document.getElementById("wins").innerHTML = wins;
            rungame();
        }
        // console.log("correct guesses "+correctGuesses);  
        // for (i=0; i<correctGuesses.length; i++) {
           //document.appendChild(correctGuesses[i]);
        // }
    }
    //if it is incorrect key that has not been pressed before and still has guesses. pushes to the incorrect guess var 
    else if (incorrectGuesses.length<10) {
        incorrectGuesses.push(guess);
        console.log (incorrectGuesses);
        for (j=0; j<incorrectGuesses; j++) {
            //document.appendChild(correctGuesses[i]);
        }
        document.getElementById("incorrectGuesses").innerHTML = incorrectGuesses;
    }
    else if (incorrectGuesses.length == 10) {
        alert("Looks like you're out of guesses! Would you like to play again?");
        console.log(incorrectGuesses);
        //writes the number of wins to the page
        wins = 0;
        document.getElementById("wins").innerHTML = wins;
        rungame();
    }
}



/*
flows to do:

checking guess against computer guess:
-if guess is not part of keysToPress, alert "opps..." and resume game.
-if guess is part of already guess var aler user "looks like you have already used this letter!" resume game. (create a correctGuess var)
-if the guess is a part of of keys to press, compare the guess to the computerSelection. 
    if guess is a subset of computerSelection and is not in already guessed, take one off remaining guesses and log it in the current word. AND
        mark that letter as part of the already guessed letters
-if inin = 10, alert "Looks like you've reached limit of incorrect guesses, computer wins!", reveal computer guess and end game

once remainingLetters goes to zero alert "Game over! Time to brush up on some 90's hits. Press ok to play again" rerun rungame function upon click
once correctGuess var = computerSelection alert "Nice job! Press ok to play again" rerun rungame function
- xxx denotes actions for later


- Need to know how to place correct guesses in the blanks on the HTML file in the correct place.
- adding all this to the HTML file.... I think it's document.getElementBYID("idexample").innerText=...






// helpful for later: 
// var res = str.toLowerCase(); 
// document.getElementById("game").innerText=whoWins
// while (remaingLetters > 0) {
    //gamecode here
    //show the input from the player
    //update answers array and remainingLetters for every correct guess
// }

*/