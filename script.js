'use strict';
//selecting elements
const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const current0 = document.getElementById('current--1')
const current1 = document.getElementById('current--2')
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
let currentScore = 0;

score0.textContent = 0;
score1.textContent = 0;
diceEl.classList.add('hidden');

// Rolling dice functionality
btnRoll.addEventListener('click', () => {
  // Generate random #
  const dice = Math.trunc(Math.random() * 6) + 1;
  
  // display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`

  // check for rolled: 1 id true switch to next play
  if(dice !== 1) {
    // add dice to current score
    currentScore += dice;
    current0.textContent = currentScore // Change later for the current player 
  } else {
      // switch player 
    
  }
});
