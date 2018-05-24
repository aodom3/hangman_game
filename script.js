// // once the page loads up
// $(document).ready(function(){

// --------------------words and word bank-------------------------------------------

// // words being used
const words = ["pizza", "golden girls", "unicorn", "chimichanga"];


// // random word chosen from the array of words
let secretWord = words[Math.floor(Math.random() * words.length)];

// for (let x = 0; x < words.length; x++) {
//     secretWord.push(words[x])
//     console.log(secretWord)   
// }

// // blank "_" that is shown on the screen to be populated
//has to match the letters;loops to same length as the words
const ansArray = [];
for (let i = 0; i < words.length; i++) {
	ansArray[i] = "_";
}
let rest = words.length
console.log(secretWord)

//push words into secretword 
// ---------------action buttons----------------------------------------------------

//resets the page if player wants to
function myFunction() {
	location.reload()
}
// pushing appending and append music
// .map
// .disable

// start working on read.me and commit a lot

//----------- the game----------------------------------------------------------

let guess




// $function(){
//     $('letters').on('click' function(light))
// }
// function gameEnd(win)
// if (win)
// else
// }