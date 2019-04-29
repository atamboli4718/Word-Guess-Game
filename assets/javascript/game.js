var bandoptions ["Red Hot Chili Peppers", "Spice Girls", "Sublime","Smash Mouth", "TLC","Jewel", "No Doubt", "Oasis", "The Cranberries"] ;
var keystopress ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"] ;
var computerGuess = bandoptions[Math.floor(Math.random() * bandoptions.length)];

var answers = [];
    for (var i = 0; i <bandoptions.length; i++) {
        answers[i] = "_";
    } ;
var remainingLetters = bandoptions.length;

while (remaingLetters > 0) {
    document.write(answers.join(" "));
    
    //show the input from the player
    //update answers array and remainingLetters for every correct guess
}

document.onkeyup = function(event) {}











// helpful for later: 
// var res = str.toLowerCase(); 
// document.getElementById("game").innerText=whoWins
// while (remaingLetters > 0) {
    //gamecode here
    //show the input from the player
    //update answers array and remainingLetters for every correct guess
// }