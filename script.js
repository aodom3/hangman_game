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
document.getElementById('ansArray').innerHTML = ansArray;
// document.getElementById('triesLeft').innerHTML = triesLeft;

// function changeDeadpool(){
// 	document.getElementsByClassName("deadpool".src)

// }

//everytime the player is wrong, deadpool will vanish partly(loose a life)!! (REEEVIEEEW THIS CODE!!!)

function lettergrab() {
	console.log(this.id)
  }
  $('.button').on('click',lettergrab)
}
let newArray=[];
function push(){
	word.push('newArray');
};
console.log('newArray');
//push words into secretword 
//   
// }

//resets the page if player wants to
function myFunction() {
	location.reload()
}


