window.onload = function(){
// --------------------variables-------------------------------------------
//player only has 6 times to try and guess
const tries = 6;
//all the letters that were guessed incorrectly
var wrongGuess=[];
//how many guesses are left before the game is over
var triesLeft=0;
//changes deadpool image
var changeDeadpool

//dashes in place of each word being guessed
const ansArray = [];

// // words being used
const words = ["pizza", "golden girls", "unicorn", "chimichanga"];
console.log(words)
// // random word chosen from the array of words
let secretWord = words[Math.floor(Math.random() * words.length)];
console.log(secretWord)
// // blank "_" that is shown on the screen to be populated
//has to match the letters;loops to same length as the words when using secretword
for (let i = 0; i < secretWord.length; i++) {
	ansArray[i] = "_";
}
console.log(ansArray +'working')
// document.getElementById("button").addEventListener("click", )
document.getElementsByClassName("ansArray").innerHTML = ansArray;
//everytime the player is wrong, deadpool will vanish partly(loose a life)!! (REEEVIEEEW THIS CODE!!!)
 function changeDeadpool(){
	document.getElementById("deadpool").src = "images"+".png"
 }

//push words into secretword 
//   
// }

//resets the page if player wants to
function myFunction() {
	location.reload()
}
// pushing appending and append music
// .map
// .disable
}
