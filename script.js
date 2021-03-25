// global constants
const clueHoldTime = 1000; //how long to hold each clue's light/sound
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
let pattern = [0, 0, 0, 0, 0, 0, 0, 0];
let progress = 0;
let gamePlaying = false;
let tonePlaying = false;
let volume = 0.5; //must be between 0.0 and 1.0
let guessCounter = 0;

function startGame() {
  //initialize game variables
  progress = 0;
  gamePlaying = true;
  //create new pattern
  createPattern();
  // swap the Start and Stop buttons
  document.getElementById("start-button").classList.add("hidden");
  document.getElementById("stop-button").classList.remove("hidden");
  updateLevel();
  document.getElementById("level-div").classList.remove("hidden");
  playClueSequence();
}

function stopGame() {
  gamePlaying = false;
  // swap the Start and Stop buttons
  document.getElementById("start-button").classList.remove("hidden");
  document.getElementById("stop-button").classList.add("hidden");
  document.getElementById("level-div").classList.add("hidden");
}

function createPattern() {
  for (let i = 0; i < 8; i++) {
    pattern[i] = Math.floor(Math.random() * 4) + 1;
    //pattern[i] = 1;
  }
  //console.log(pattern);
}

function updateLevel() {
  let level = "Progress: " + progress + "/8";
  document.getElementById("level-count").innerHTML = level;
}

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}

function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    //console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}

function guess(btn) {
  //console.log("user guessed: " + btn);
  if (!gamePlaying) {
    return;
  }
  if (btn != pattern[guessCounter]) {
    loseGame();
  } else {
    if (guessCounter < progress) {
      guessCounter++;
    } else {
      if (progress < pattern.length - 1) {
        progress++;
        updateLevel();
        playClueSequence();
      } else if (progress == pattern.length - 1) {
        progress++;
        updateLevel();
        winGame();
      }
    }
  }
}

function winGame() {
  alert("Congrats! You win :)\nProgress: 8/8");
  stopGame();
}

function loseGame() {
  alert("Game Over. You lost.");
  stopGame();
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 500
};

function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  tonePlaying = true;
  setTimeout(function() {
    stopTone();
  }, len);
}

function startTone(btn) {
  if (!tonePlaying) {
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    tonePlaying = true;
  }
}

function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);
