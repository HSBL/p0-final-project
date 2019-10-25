// collection of sentences
const sentences = [
  "The quick brown fox jumps over the lazy dog",
  "Pack my box with five dozen liquor jugs",
  "The five boxing wizards jump quickly",
  "How vexingly quick daft zebras jump",
  "We promptly judged antique ivory buckles for the next prize"
];

// pick a sentence and split into words
var arrWords = sentences[Math.floor(Math.random() * sentences.length)].split(
  " "
);

// THE SENTENCE
// DOM element
const gameSentence = document.getElementById("game-sentence");

// Loop arr words
for (let i = 0; i < arrWords.length; i++) {
  gameSentence.innerHTML += `<span class="word" id="word${i}">${arrWords[i]}</span>`;
}

// THE TIMER
// DOM element
var timerDisplay = document.getElementById("timer");

var seconds = 0,
  intervalTime,
  intervalStatus;
// function timer start on body load
function timerStart() {
  // add 1 every second
  // interval for timer
  intervalTime = setInterval(function() {
    seconds++;
    timerDisplay.innerHTML = seconds;
    speed.innerHTML = `${Math.round((60 / seconds) * score * 10) /
      10} words per minute`;
  }, 1000);
  // interval for game status
  intervalStatus = setInterval(checkStatus, 50);
}

// THE SCORE
//DOM element
const scoreElement = document.getElementById("accuracy");
const speed = document.getElementById("speed");

// THE GAME
//DOM element
const wordInput = document.getElementById("word-input");

var wordCounter = 0,
  score = 0;

// listen for "space bar"
wordInput.addEventListener("keyup", event => {
  if (event.code === "Space") {
    if (wordInput.value.trim() === arrWords[wordCounter]) {
      score++;
    }
    document.getElementsByClassName("active")[0].className = "word done";
    scoreElement.innerHTML = `${Math.round(
      (score / (wordCounter + 1)) * 100
    )} %`;
    wordCounter++;
    wordInput.value = "";
  }
});

// CURRENT WORD & END GAME
function checkStatus() {
  if (wordCounter === arrWords.length) {
    clearInterval(intervalTime);
    clearInterval(intervalStatus);
  } else {
    var current = document.getElementById(`word${wordCounter}`);
    current.className = "word active";
  }
}
