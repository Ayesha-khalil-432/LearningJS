'use strict';

//selecting elemets by id
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const rollDice = document.querySelector('.btn--roll');
const holdDice = document.querySelector('.btn--hold');
const newDice = document.querySelector('.btn--new');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

let scores, currentScore0, activerPlayer, playing;


const switchplayer = function () {
    //switch player
    currentScore0 = 0;
    document.getElementById(`current--${activerPlayer}`).textContent = currentScore0;
    activerPlayer = activerPlayer === 0 ? 1 : 0;
    //toggle will add the class if it doesn't have and remove the class if it contains
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

const init = function () {
    scores = [0, 0];
    currentScore0 = 0;
    activerPlayer = 0;
    playing = true;

    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;

    diceEl.classList.add('hidden');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
}
init();

//rolling dice
rollDice.addEventListener('click', function () {
    if (playing) {
        //generate 
        const randomNumber = Math.trunc(Math.random() * 6) + 1;
        // console.log(randomNumber);
        //display dice
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${randomNumber}.png`;
        //if randome number is 1 
        if (randomNumber !== 1) {
            //add dice to current score
            currentScore0 += randomNumber;
            document.getElementById(`current--${activerPlayer}`).textContent = currentScore0;
            // current0El.textContent = currentScore0;
        } else {
            switchplayer();
        }
    }
});

holdDice.addEventListener('click', function () {
    if (playing) {
        //add current score to score of active player
        scores[activerPlayer] += currentScore0;
        //check score is already at least 100
        document.getElementById(`score--${activerPlayer}`).textContent = scores[activerPlayer];
        if (scores[activerPlayer] >= 20) {
            document.querySelector(`.player--${activerPlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activerPlayer}`).classList.remove('player--active');
            playing = false;
            diceEl.classList.add('hidden');
        } else {
            //if so the finish the game if not then switch player
            switchplayer();
        }
    }
});

newDice.addEventListener('click', init());