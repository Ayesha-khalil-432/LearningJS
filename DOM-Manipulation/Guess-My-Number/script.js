'use strict';

// //getting an elements based on class name
// //document.querySelector('.className')
// //document.querySelector('#id')
// console.log(document.querySelector('.message'));

// //get value in that element
// console.log(document.querySelector('.message').textContent);

// //DOM are part of web API's

// document.querySelector('.message').textContent = 'Correct Number!';
// console.log(document.querySelector('.message').textContent);

// console.log(document.querySelector('.number').textContent);
// console.log(document.querySelector('.score').textContent);

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

//event handler on button guess
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    // console.log(guess, typeof guess);
    //when there is no input
    if (!guess) {
        // document.querySelector('.message').textContent = 'Enter the Number!';
        displayMessage('Enter the Number!');
    } else if (guess === secretNumber) {
        // document.querySelector('.message').textContent = 'Correct Number!';
        displayMessage('Correct Number');
        document.querySelector('body').style.backgroundColor = '#60b347';
        // document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.number').style.width = '35rem';
        document.querySelector('.number').textContent = secretNumber;

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    } else {
        const message = guess > secretNumber ? 'Guess is too high!' : 'Guess is too low!';

        if (score > 1) {
            // document.querySelector('.message').textContent = message;
            displayMessage(message);
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            // document.querySelector('.message').textContent = 'You lost the game!';
            displayMessage('You lost the game!');
            document.querySelector('.score').textContent = 0;
        }
    }
})

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.score').textContent = score;
    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
})

const displayMessage = (message) => {
    document.querySelector('.message').textContent = message;
}