//key value pairs
'use strict';
const myObject = {
    firstName: 'Ayesha',
    lastName: 'Khalil',
    age: 2024 - 2002,
    job: 'Freelancer',
    friends: ['Zoya', 'Naima', 'Tasha'],
}
console.log(myObject);

//retrieving data from object
console.log(myObject.lastName);
console.log(myObject['lastName']);

const nameKey = 'Name';
console.log(myObject['first' + nameKey]);
console.log(myObject['last' + nameKey]);


// const interestedIn = prompt('What do you want to know abut myObject choose between firstName, lastName, age, job and friends');

// if (myObject[interestedIn]) {
//     console.log(myObject[interestedIn]);
// }
// else {
//     console.log(`${interestedIn} is not found in object`);
// }

//adding new property in object
myObject.location = 'Pakistan';
myObject['insta'] = 'ayeshakhalil432';

console.log(myObject);

console.log(`${myObject.firstName} has ${myObject.friends.length} friends ${myObject.friends[0]},${myObject.friends[1]} and ${myObject.friends[2]} but her best friend is ${myObject.friends[0]}`);

//object methods
const myObject2 = {
    firstName: 'Ayesha',
    lastName: 'Khalil',
    birthyear: 2002,
    job: 'Freelancer',
    friends: ['Zoya', 'Naima', 'Tasha'],
    hasDriverLicense: true,
    //function in object
    // calcAge: function (birthYear) {
    //     return 2024 - birthYear;
    // }

    //reading values directly from object
    // calcAge: function () {
    //     console.log('thissss',this);
    //     return 2024 - this.birthyear;
    // }

    calcAge: function () {
        this.age = 2024 - this.birthyear;
        return this.age;
    }
}

console.log(myObject2.calcAge());
console.log(myObject2.age);
console.log(myObject2.age);
console.log(myObject2.age);
// console.log(myObject2['calcAge'](2002));

//example
console.log(`${myObject2.firstName} is ${myObject2.age} years old ${myObject2.job} she has ${(myObject2.hasDriverLicense)?'a':'no'} driving license`);