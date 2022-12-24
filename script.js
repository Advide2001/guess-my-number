'use strict';

let currentNumber;

function generateRandomNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}

function reduceScore() {
  const currentScore = Number(document.querySelector('.score').textContent);
  document.querySelector('.score').textContent = currentScore - 1;
}

window.addEventListener('DOMContentLoaded', event => {
  currentNumber = generateRandomNumber();
  console.log(currentNumber);
});

// Add event listeners for the agin button to select a new number
document.querySelector('.again').addEventListener('click', () => {
  currentNumber = generateRandomNumber();
  console.log(currentNumber);
});

// Add event listener for the check button to check the guess
document.querySelector('.check').addEventListener('click', () => {
  const guess = document.querySelector('.guess').value;
  const currentScore = Number(document.querySelector('.score').textContent);
  const highScore = Number(document.querySelector('.highscore').textContent);
  console.log(guess);

  if (Number(guess) === currentNumber) {
    document.querySelector('.message').textContent = 'Correct number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    if (currentScore > highScore) {
      document.querySelector('.highscore').textContent = currentScore;
    }
  } else if (Number(guess) > currentNumber) {
    document.querySelector('.message').textContent = 'Too high!';
    reduceScore();
  } else {
    document.querySelector('.message').textContent = 'Too low!';
    reduceScore();
  }
});
