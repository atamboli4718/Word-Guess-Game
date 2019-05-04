var bandOptions; //options the computer can choose from
var keysToPress; //established that only letters can be pressed
var computerSelection; //the selection the computer has made from bandOptions
var correctGuesses = []; //tracks the correct letters the user has already guess
var remainingLetters; //number of correct letters the user has not guessed yet. Used to push to the html
var incorrrectGuesses;  // this is an empty array that will match the number of letters the user has guessed 

function rungame(){
// this is the selection of bands available for the computer to select from. Purposely chose none with spaces so I didn't have to deal withthat
bandOptions = ["sublime", "tlc","jewel", "tupac", "oasis", "soundgarden", "beck","radiohead","weazer","genesis"] ;

// these are the characters available for the user to guess the band
keysToPress = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"] ;

// this is the selection the coputer has made from the bandoptions var
computerSelection = bandOptions[0];//Math.floor(Math.random() * bandoptions.length)]; xxx
    console.log(computerSelection)

//tracks letters already guessed that were incorrect
incorrrectGuesses = [];
console.log(incorrrectGuesses);

// how many letters are remaining to guess, how many blank spaces to fill
remainingLetters = bandOptions.length;
console.log(remainingLetters);

}

rungame();

document.onkeyup = function(event) {
    console.log(event.key);
    var guess = event.key;
    console.log(keysToPress.includes(guess));
    
    //if the key pressed is not a letter, or not part of keysToPress var
    if (!keysToPress.includes(guess)) {
        console.log ("Oops! Looks like you pressed an invalid key. Please try again"); //change this to an alert later xxx
    }
    //if it is a letter (right or wrong!) but it  has already been pressed
    else if ((incorrrectGuesses.indexOf(guess)>-1) || (correctGuesses.indexOf(guess)>-1)) {
        console.log ("Looks like you've alredy guessed this letter, try again!"); // change to an alert leter xxx     
    }
    //if it is a valid key that has not been pressed and is part of the computerSelection, push to push to computer selection
    else if ((computerSelection.indexOf(guess)>-1)) { 
        correctGuesses.push(guess);
        console.log("correct guesses "+correctGuesses);  
        for (i=0; i<correctGuesses.length; i++) {
            document.appendChild(correctGuesses[i]);
         }
    }
    //if it is incorrect key that has not been pressed before and still has guesses. pushes to the incorrect guess var 
    else if (incorrrectGuesses<10) {
        incorrrectGuesses.push(guess);
        console.log (incorrrectGuesses);
        for (j=0; j<incorrrectGuesses; j++) {
            document.appendChild(correctGuesses[i]);
        }
    }
    else if (incorrrectGuesses = 10) {
        alert("Looks like you're out of guesses! Would you like to play again?");
        console.log(incorrrectGuesses);
        //function rungame();
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