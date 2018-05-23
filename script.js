// // once the page loads up
// $(document).ready(function(){
// // words being used
const words = ["pizza", "golden girls", "unicorn", "chimichanga"];
// // random word chosen from the array of words
let secretWord = words[Math.floor(Math.random() * words.length)];
// // blank "_" that is shown on the screen to be populated
//has to match the letters;loops to same length as the words
const ansArray = [];
for (let i = 0; i < words.length; i++) {
	ansArray[i] = "_";
}

function myFunction() {
	location.reload()
}
// let remainingGuesses < 6;
// $function(){
//     $('letters').on('click' function(light))
// }
// function gameEnd(win)
// if (win)
// else
// }