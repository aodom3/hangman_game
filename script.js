// // once the page loads up
// $(document).ready(function(){

// --------------------words and word bank-------------------------------------------

// // words being used
const words = ["pizza", "golden girls", "unicorn", "chimichanga"];
console.log(words)
// // random word chosen from the array of words
let secretWord = words[Math.floor(Math.random() * words.length)];
console.log(secretWord)
// // blank "_" that is shown on the screen to be populated
//has to match the letters;loops to same length as the words
const ansArray = [];
for (let i = 0; i < secretWord.length; i++) {
	ansArray[i] = "_";
}
console.log(ansArray +'working')
let rest = words.length


//push words into secretword 
// for (let x = 0; x < words.length; x++) {
//     secretWord.push(words[x])
//     console.log(secretWord)   
// }
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



