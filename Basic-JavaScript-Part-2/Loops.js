// for loop 
console.log('----FOR LOOP----');
for (let i = 1; i <= 10; i++) {
    console.log('For loop iteration no.', i);
}

const types = [];
const friend = ['Zoya', 'Naima', 'Tasha', 28, ['Ayesha', 'Khalil']];

for (let i = 0; i < friend.length; i++) {
    console.log(friend[i], typeof (friend[i]));
    // types[i] = typeof (friend[i]);
    // we can also do
    types.push(typeof (friend[i]));
}

console.log(types);

const years = [1991, 2000, 2001, 2002, 2003];
const ages = [];


for (let i = 0; i < years.length; i++) {
    ages.push(2024 - years[i]);
}
console.log(ages);

//continue (skip the current iteration of loop)
//break (terminate all the remaining iterations in loop)

//looping backward
console.log('-----LOOPING BACKWARD-----');
for (let i = friend.length - 1; i >= 0; i--) {
    console.log(friend[i], typeof (friend[i]));
}

//nested loop
for (let i = 1; i <= 3; i++) {
    console.log('---EXERCISE ', i, '---');
    for (let j = 1; j <= 5; j++) {
        console.log(`Exercise ${i}, repetition ${j}`);
    }
}

//while loop
console.log('----WHILE LOOP----');
let i = 0;
while (i < friend.length) {
    console.log(friend[i], typeof (friend[i]));
    i++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

while (dice !== 6) {
    console.log('You rolled a ', dice);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end');
}