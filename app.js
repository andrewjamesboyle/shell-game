// import functions and grab DOM elements
const cupOneImg = document.getElementById('cup-one-image');
const cupTwoImg = document.getElementById('cup-two-image');
const cupThreeImg = document.getElementById('cup-three-img');

const cupOneButton = document.getElementById('cup-one-button');
const cupTwoButton = document.getElementById('cup-two-button');
const cupThreeButton = document.getElementById('cup-three-button');

const winsEl = document.getElementById('wins');
const lossesEl = document.getElementById('losses');
const totalEl = document.getElementById('total');

const resetButton = document.getElementById('play-again');

const hidingSpot = document.getElementsByClassName('hiding-spot');

let wins = 0;
let losses = 0;
let total = 0;

function resetCups() {
  cupOneImg.src = '/assets/cup.png';
  cupTwoImg.src = '/assets/cup.png';
  cupThreeImg.src = '/assets/cup.png';
}

function displayScore() {
  winsEl.textContent = wins;
  lossesEl.textContent = losses;
  totalEl.textContent = total;
}




// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
