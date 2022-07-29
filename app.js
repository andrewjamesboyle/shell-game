// import functions and grab DOM elements
const cupOneImg = document.getElementById('cup-one-image');
const cupTwoImg = document.getElementById('cup-two-image');
const cupThreeImg = document.getElementById('cup-three-image');

const cupOneButton = document.getElementById('cup-one-button');
const cupTwoButton = document.getElementById('cup-two-button');
const cupThreeButton = document.getElementById('cup-three-button');
const resetButton = document.getElementById('play-again');

const winsEl = document.getElementById('wins');
const lossesEl = document.getElementById('losses');
const totalEl = document.getElementById('total');

const ballLocations = [cupOneImg, cupTwoImg, cupThreeImg];

let wins = 0;
let losses = 0;
let total = 0;

cupOneButton.addEventListener('click', () => {
    const finalAnswer = getRandomItem(ballLocations);
    theGameFunction(finalAnswer, cupOneImg);
    total++;
    finalAnswer.src = '/assets/cup-winner.png';
    displayScore();
    disableButtons();
});

cupTwoButton.addEventListener('click', () => {
    const finalAnswer = getRandomItem(ballLocations);
    theGameFunction(finalAnswer, cupTwoImg);
    total++;
    finalAnswer.src = '/assets/cup-winner.png';
    displayScore();
    disableButtons();
});

cupThreeButton.addEventListener('click', () => {
    const finalAnswer = getRandomItem(ballLocations);
    theGameFunction(finalAnswer, cupThreeImg);
    total++;
    finalAnswer.src = '/assets/cup-winner.png';
    displayScore();
    disableButtons();
});

resetButton.addEventListener('click', () => {
    resetCups();
    cupOneButton.disabled = false;
    cupTwoButton.disabled = false;
    cupThreeButton.disabled = false;
});

function getRandomItem(arr) {
    const hidingSpotIndex = Math.floor(Math.random() * arr.length);
    const answer = ballLocations[hidingSpotIndex];
    return answer;
}

function theGameFunction(correctGuess, userGuess) {
    if (userGuess === correctGuess) {
        console.log('You win!');
        wins++;
    } else {
        console.log('You lose!');
        losses++;
    }
}

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

function disableButtons() {
    cupOneButton.disabled = true;
    cupTwoButton.disabled = true;
    cupThreeButton.disabled = true;
}
