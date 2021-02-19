'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('🤷‍♀️ No number!');
  } else if (guess === secretNumber) {
    displayMessage('👍 Correct Number!');
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '50rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (score > 0) {
    if (guess > secretNumber) {
      displayMessage('📥 Too high!');
      score--;
      document.querySelector('.score').textContent = score;
    } else if (guess < secretNumber) {
      displayMessage('📤 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else {
    document.querySelector('.score').textContent = '🧨 You lost the game!';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 10;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
