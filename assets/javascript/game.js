var bandOptions; 
var keysToPress;
var computerSelection;
var correctGuesses = [];
var remaingLetters;
var incorrrectGuesses; 

function rungame(){
// this is the selection of bands available for the computer to select from. Purposely chose none with spaces so I didn't have to deal withthat
bandOptions = ["sublime", "tlc","jewel", "tupac", "oasis", "soundgarden", "beck","radiohead","weazer","genesis"] ;

// these are the characters available for the user to guess the band
keysToPress = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"] ;

// this is the selection the coputer has made from the bandoptions var
computerSelection = bandOptions[0];//Math.floor(Math.random() * bandoptions.length)]; xxx
    console.log(computerSelection)

// this is an empty array that will match the number of letters the user has guessed 
incorrrectGuesses = [];
    //for (var i = 0; i <bandOptions.length; i++) {
    //incorrectGuesses[i] = "_";
    //} ;   

//tracks letters already guessed that were incorrect
incorrrectGuesses = [];
console.log(incorrrectGuesses);

// how many letters are remaining to guess, how many blank spaces to fill
remainingLetters = bandOptions.length;
console.log(remainingLetters);
//what letters has the user already guessed
//incorrrectGuesses = [];
  //  for (var x = 0; x <)
}

rungame();

document.onkeyup = function(event) {
    console.log(event.key);
    var guess = event.key;

    console.log(keysToPress.includes(guess));
    if (!keysToPress.includes(guess)) {
        console.log ("Oops! Looks like you pressed an invalid key. Please try again"); //change this to an alert later xxx
    }
    else if ((incorrrectGuesses.indexOf(guess)>-1) || (correctGuesses.indexOf(guess)>-1)) {
        console.log ("Looks like you've alredy guessed this letter, try again!"); // change to an alert leter xxx 
    }
    else if (computerSelection.indexOf(guess)>-1 ) { 
        correctGuesses.push(guess);
        console.log("correct "+correctGuesses);   
    }
    else {console.log("incorrrectGuesses")}
        //else if ()
        


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
-if the guess is a part of of keys to press, compare the guess to the computerSelection. 
    if guess is a subset of computerSelection and is not in already guessed, take one off remaining guesses and log it in the current word. AND
        mark that letter as part of the already guessed letters
-if inin = 10, alert "Looks like you've reached limit of incorrect guesses, computer wins!", reveal computer guess and end game

once remainingLetters goes to zero alert "Game over! Time to brush up on some 90's hits. Press ok to play again" rerun rungame function upon click
once correctGuess var = computerSelection alert "Nice job! Press ok to play again" rerun rungame function
- xxx denotes actions for later
- add a limit for the number of incorrect guesses to detrimint from (thinking10)








// helpful for later: 
// var res = str.toLowerCase(); 
// document.getElementById("game").innerText=whoWins
// while (remaingLetters > 0) {
    //gamecode here
    //show the input from the player
    //update answers array and remainingLetters for every correct guess
// }

*/