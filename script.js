'use strict';

const rockIcon = document.querySelector('.rock');
const paperIcon = document.querySelector('.paper');
const scissorIcon = document.querySelector('.scissor');
const compDisplay = document.querySelector('#comp-display');
const youDisplay = document.querySelector('#you-display');
const message = document.querySelector('.message');
const compScoreEl = document.querySelector('.comp-score');
const youScoreEl = document.querySelector('.you-score');

let youScore = 0;
let compScore = 0;
let compNum;
let playerNum;
let playing = true;

// COMP DISPLAY
const compChance = function () {
  compNum = Math.trunc(Math.random() * 3) + 1;
  if (compNum === 1) {
    compDisplay.src = 'rock.png';
  } else if (compNum === 2) {
    compDisplay.src = 'paper.png';
  } else if (compNum === 3) {
    compDisplay.src = 'scissor.png';
  }
};

const playerChance = function () {
  if (playerNum === 1) {
    youDisplay.src = 'rock.png';
    document.querySelector('#comp-display').classList.remove('hidden');
    document.querySelector('#you-display').classList.remove('hidden');
    document.querySelector('.again').classList.remove('hidden');
  } else if (playerNum === 2) {
    youDisplay.src = 'paper.png';
    document.querySelector('#comp-display').classList.remove('hidden');
    document.querySelector('#you-display').classList.remove('hidden');
    document.querySelector('.again').classList.remove('hidden');
  } else if (playerNum === 3) {
    youDisplay.src = 'scissor.png';
    document.querySelector('#comp-display').classList.remove('hidden');
    document.querySelector('#you-display').classList.remove('hidden');
    document.querySelector('.again').classList.remove('hidden');
  }
};

// COMP WON
const compWon = function () {
  message.textContent = 'comp win';
  compScore++;
  compScoreEl.textContent = compScore;
};
const youWon = function () {
  message.textContent = 'you win';
  youScore++;
  youScoreEl.textContent = youScore;
};

// GAME ON

const gameOn = function () {
  playerChance();
  compChance();
  gameLogic();
  playing = false;
};

// YOU DISPLAY
rockIcon.addEventListener('click', function () {
  if (playing) {
    playerNum = 1;
    gameOn();
  }
});
paperIcon.addEventListener('click', function () {
  if (playing) {
    playerNum = 2;
    gameOn();
  }
});
scissorIcon.addEventListener('click', function () {
  if (playing) {
    playerNum = 3;
    gameOn();
  }
});

// GAME LOGIC

const gameLogic = function () {
  if (compNum === playerNum) {
    message.textContent = 'draw';
  } else if (playerNum === 1) {
    if (compNum === 2) {
      compWon();
    } else if (compNum === 3) {
      youWon();
    }
  } else if (playerNum === 2) {
    if (compNum === 3) {
      compWon();
    } else if (compNum === 1) {
      youWon();
    }
  } else if (playerNum === 3) {
    if (compNum === 1) {
      compWon();
    } else if (compNum === 2) {
      youWon();
    }
  }
};

// AGAIN BUTTON

document.querySelector('.again').addEventListener('click', function () {
  playing = true;
  message.textContent = 'choose';
  document.querySelector('#comp-display').classList.add('hidden');
  document.querySelector('#you-display').classList.add('hidden');
});

// RESTART BUTTON

document.querySelector('.restart').addEventListener('click', function () {
  youScore = 0;
  compScore = 0;
  compScoreEl.textContent = compScore;
  youScoreEl.textContent = youScore;
  document.querySelector('#comp-display').classList.add('hidden');
  document.querySelector('#you-display').classList.add('hidden');
});

// START

document.querySelector('#triangle').addEventListener('click', function () {
  document.querySelector('.start').classList.add('hidden');
  document.querySelector('.game').classList.remove('hidden');
  playing = true;
});
