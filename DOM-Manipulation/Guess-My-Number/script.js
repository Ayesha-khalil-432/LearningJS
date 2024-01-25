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
const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    // console.log(guess, typeof guess);
    if (!guess) {
        document.querySelector('.message').textContent = 'Enter the Number!';
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'Correct Number!';
    } else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Guess is too high!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lost the game!';
            document.querySelector('.score').textContent = 0;
        }
    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Guess is too low!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lost the game!';
            document.querySelector('.score').textContent = 0;
        }
    }

})