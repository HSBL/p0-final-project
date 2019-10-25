// collection of sentences
const sentences = [
  "The quick brown fox jumps over the lazy dog",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam volutpat pellentesque maximus. Donec laoreet finibus lectus in condimentum. Nulla et ante nisl. Vestibulum pharetra mi ex, eget pulvinar metus mollis id. Aenean in libero vestibulum, fringilla risus in, porta odio. In vitae tellus vel libero fringilla dignissim."
];

// pick a sentence and split into words
arrWords = sentences[0].split(" ");

// display the words to the page
// DOM element
const gameSentence = document.querySelector("#game-sentence");

// Loop arr words
for (let i = 0; i < arrWords.length; i++) {
  gameSentence.innerHTML += `<span class="word">${arrWords[i]}</span>`;
}

// timer
// DOM element
var timerDisplay = document.querySelector("#timer");

var seconds = 0;
// function timer start on body load
function timerStart() {
  console.log("timer start");
  // add 1 every second
  setInterval(function() {
    seconds++;
    timerDisplay.innerHTML = seconds;
  }, 1000);
}
