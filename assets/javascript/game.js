var bandOptions; //options the computer can choose from
var keysToPress; //established that only letters can be pressed
var computerSelection; //the selection the computer has made from bandOptions
var correctGuesses = []; //tracks the correct letters the user has already guess
var remainingLetters; //number of correct letters the user has not guessed yet. Used to push to the html
var incorrectGuesses;  // this is an empty array that will match the number of letters the user has guessed 
var wins = 0

window.onload = alert("Let's test your 90s music knowledge. Here's a few hints: Choose from 90's bands or musicians. Letters and numbers count. You get 8 chances. Good luck!");

function rungame() {
// this is the selection of bands available for the computer to select from. Purposely chose none with spaces so I didn't have to deal withthat
bandOptions = ["sublime", "tlc", "tupac", "beck","rem","blur","blink182","u2"] ;

// these are the characters available for the user to guess the band
keysToPress = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z","1","2","3","4","5","6","7","8","9","0"];

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
document.getElementById("incorrectGuesses").innerHTML = '&nbsp;';
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
    }
    //if it is incorrect key that has not been pressed before and still has guesses. pushes to the incorrect guess var 
    else if (incorrectGuesses.length<7) {
        incorrectGuesses.push(guess);
        console.log (incorrectGuesses);
        for (j=0; j<incorrectGuesses; j++) {
            //document.appendChild(correctGuesses[i]);
        }
        document.getElementById("incorrectGuesses").innerHTML = incorrectGuesses;
    }
    else if (incorrectGuesses.length == 7) {
        alert("Time to brush up on your 90's music. The correct word was " + computerSelection);
        console.log(incorrectGuesses);
        //writes the number of wins to the page
        wins = 0;
        document.getElementById("wins").innerHTML = wins;
        rungame();
    }
}

