"use strict";

// Selecting elements
const score0Elem = document.querySelector("#score--0");
const score1Elem = document.getElementById("score--1");
const current0Elem = document.getElementById("current--0");
const current1Elem = document.getElementById("current--1");

const diceElem = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

// Starting conditions
score0Elem.textContent = 0;
score1Elem.textContent = 0;
diceElem.classList.add("hidden");

let currentScore = 0;

// Rolling dice functionality
btnRoll.addEventListener("click", function () {
  // Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  // Display dice
  diceElem.classList.remove("hidden");
  diceElem.src = `dice-${dice}.png`;

  // Check for rolled
  if (dice != 1) {
    currentScore += dice;
    current0Elem.textContent = currentScore;
  } else {
  }
});
