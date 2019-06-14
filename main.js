window.addEventListener("load", init);

let time = 3;
let score = 0;
let isPlaying;

const wordInput = document.getElementById("inputWord");
const currentWord = document.getElementById("current-word");
const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("time");
const message = document.getElementById("message");

const words = [
  "constant",
  "document",
  "object",
  "function",
  "symptom",
  "siblings",
  "developer",
  "consider",
  "minute",
  "accord",
  "practice",
  "intend",
  "concern",
  "approach",
  "establish",
  "engage",
  "obtain",
  "scarce",
  "policy",
  "straight",
  "apparent",
  "parent",
  "children",
  "appoint",
  "passage",
  "instance",
  "definitely",
  "absence",
  "acceptable",
  "acknowledge",
  "allegiance",
  "because",
  "embarrass",
  "ignorance",
  "foreign",
  "guarantee",
  "fascinating",
  "guidance",
  "tyranny",
  "whether",
  "tomorrow",
  "vacuum",
  "texture",
  "zebra",
  "disestablishment",
  "aberration",
  "apprehension",
  "benevolent",
  "bewildered",
  "capability",
  "clairvoyant",
  "commemorate",
  "diversity",
  "environment",
  "framework",
  "hereditary",
  "jurisdiction",
  "mayhem",
  "nonetheless",
  "obliterate",
  "paradigm",
  "phenomenon",
  "rehabilitation",
  "stagnant",
  "transformation",
  "unequivocal",
  "xenophobia",
  "zenith"
];

//initialize the game
function init() {
  showWord(words);
  wordInput.addEventListener("input", startMatch);
  setInterval(countdown, 1000);
  setInterval(checkStatus, 50);
}

//show a word from words array
function showWord(words) {
  const randIndex = Math.floor(Math.random() * words.length);
  currentWord.innerHTML = words[randIndex];
}

//begin match
function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    time = 4;
    showWord(words);
    wordInput.value = "";
    score++;
  }
  //reset score to 0 when game is over
  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}

//Match current word to input
function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = "Correct";
    message.style.color = "#00ff15";
    wordInput.style.border = "3px solid #00ff15";
    setTimeout(() => currentWord.style.color = "#fff", 200);
    currentWord.style.color = "#00ff15";
    return true;
  } else {
    message.innerHTML = "";
    return false;
  }
}

//countdown for timer
function countdown() {
  if (time > 0) {
    time--;
  } else if (time === 0) {
    isPlaying = false;
  }
  timeDisplay.innerHTML = time;
}

//check status of the game and reset score on game over
function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = "Game Over!!";
    message.style.color = "#aa0000";
    wordInput.style.border = "3px solid #aa0000"
    currentWord.style.color = "#aa0000";
    score = -1;
  }
}
