
 
 //--1. Set beginning counter variables.--//

 var wins = 0,
 losses = 0,
 guessesLeft = 10,
 guessesSofar = [];

var userChoiceText = document.getElementById("user-text");
var winsText = document.getElementById("numbWins");
var lossesText = document.getElementById("numbLosses");
var guessesLeftText = document.getElementById("remaining");
var guessesSofarText = document.getElementById("soFar");

//--this determines what letters are available to the computer to choose from to start the game.
var availableLetters = ["p", "s", "y", "c", "h", "i", "q", "g", "a", "m", "e"];

 //--this allows computer to randomly pick a letter from the array.
 var computerChoice = availableLetters[Math.floor(Math.random() * availableLetters.length)];

//--2. Get user input(guess) using keypress and store in varible for later use.--//

 //--this function is run whenever user presses a key...
document.onkeyup = function(event) {

 //--this determines which key was pressed...
 var userGuess = event.key;
 
 //--3. Create array listing available guesses.--//

 var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
     "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
           
 //--4. Compare user guess to computer choice to determine result.--//

 //--if user guess is one of those in our alphabet array...
 if ((userGuess === "a") || (userGuess === "b") || (userGuess === "c") || (userGuess === "d") || (userGuess === "e") ||
 (userGuess === "f") || (userGuess === "g") || (userGuess === "h") || (userGuess === "i") || (userGuess === "j") ||
 (userGuess === "k") || (userGuess === "l") || (userGuess === "m") || (userGuess === "n") || (userGuess === "o") ||
 (userGuess === "p") || (userGuess === "q") || (userGuess === "r") || (userGuess === "s") || (userGuess === "t") ||
 (userGuess === "u") || (userGuess === "v") || (userGuess === "w") || (userGuess === "x") || (userGuess === "y") ||
 (userGuess === "z"))   {

//--then decide what the app will do (display)...

//--if user correctly selects the same letter as computer...
 if (userGuess === computerChoice) {
     wins++;
     guessesLeft = 11;
     guessesSofar = [];
     computerChoice =  availableLetters[Math.floor(Math.random() * availableLetters.length)];
         alert("You selected the letter ( " + userGuess + " ).....   Congratulations!  That is the letter I was thinking of!");
     userGuess = "";
 }
 
 //--if user incorrectly selects the letter...
 if (userGuess !== computerChoice) {
     guessesLeft--;
     guessesSofar.push(userGuess); 
 }
 
 //--if user guess counter runs out (= 0)...
 if (guessesLeft === 0) {
     losses++;
     userGuess = "";
 }

 //--if user guess counter does not run out (> 0)...
 if (guessesLeft > 0) {          
 }
 //--reset guesses left counter and clear guess so far field...
 else    {guessesLeft = 10;
         guessesSofar = [];
 }

     //--5. Display results to browser.--//

 userChoiceText.textContent = userGuess;
 winsText.textContent = wins;
 lossesText.textContent = losses;
 guessesLeftText.textContent = guessesLeft;
 guessesSofarText.textContent = guessesSofar;

 }
 
};

