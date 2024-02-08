'use strict';

//scoping 
function calcAge(birthYear) {
    const age = 2024 - birthYear;
    // console.log(firstName);

    function printAge() {
        let output = `${firstName}, You are ${age}, born in ${birthYear}`;
        console.log(output);

        if (birthYear >= 1981 && birthYear <= 1996) {
            const str = `Oh you are a millenial ${firstName};`
            console.log(str);
        } else {
            var variable = true;
            const firstName = 'Umer';
            const str = `Oh you are not a millenial ${firstName}`;
            console.log(str);

            function add(a, b) {
                return a + b;
            }

            output = 'NEW OUTPUT';
        }
        console.log(variable);//function scoped
        //in strict mode we can not access this function as function are block scoped in strict mode
        // console.log(add(2, 3));
        console.log(output);
    }

    printAge();
    return age;
}

const firstName = 'Ayesha';
calcAge(2002);

//cont and let variables are block scoped
//var variables are function scoped


//HOISTING IN JAVASCRIPT
//make some type of variable accessible/usable in code before they are actually declared
//variables are magically lifted to the top of function
//let and const are placed in tdz temporal dead zone

console.log('HOISTING');
// console.log(me);
// console.log(job);
// console.log(year);

var me = 'ayesha';
let job = 'freelancer';
const year = 2002;


//FUNCTIONS

console.log(addDecl(2, 3));
// console.log(addExp(2, 5));
// console.log(arrow(7, 3));

function addDecl(a, b) {
    return a + b;
}



//EXAMPLE
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
    console.log('All products deleted');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(x === window.y);
console.log(x === window.z);

//THIS KEYWORD
//points to owner of the function
//value is not static
//does not point to function itself
//also not its variable environment 

// console.log(this);
function calcAgee(birthYear) {
    const age = 2024 - birthYear;
    console.log(this);
}

calcAgee(2002);

const calcAgeArrow = (birthYear) => {
    console.log(2024 - birthYear);
    console.log(this);
};

calcAgeArrow(2002);

const ayesha = {
    firstName: 'Ayesha',
    birthYear: 2002,
    calcAge: function () {
        console.log(this);
        console.log(2024 - this.birthYear);
    }
}

ayesha.calcAge();

const newObject = {
    birthYear: 2003,
};

newObject.calcAge = ayesha.calcAge;

newObject.calcAge();

const f = ayesha.calcAge;
console.log(f);
// f();


//regular functions and arrow functions
const ayeshaa = {
    firstName: 'Ayesha',
    birthYear: 2002,
    calcAge: function () {
        // console.log(this);
        console.log(2024 - this.birthYear);

        //solution 1
        // const self = this;
        // const isMilineal = function () {
        //     console.log(self.birthYear >= 1981 && self.birthYear <= 1996);
        // }
        // isMilineal();

        //solution 2
        const isMilineal = () => {
            console.log(this.birthYear >= 1981 && this.birthYear <= 1996);
        }
        isMilineal();
    },

    greet: function () {
        console.log(`Hey ${this.firstName}`);
    },
}

ayeshaa.calcAge();
// ayeshaa.greet();

//EXAMPLE
//ARGUMENTS KEYWORDS

console.log('KEYWORDS');
//only exist in regular function
const addExp = function (a, b) {
    console.log(arguments);
    return a + b;
}
addExp(2, 3);
addExp(4, 5, 6, 7);

//not in arrow function
const arrow = (a, b) => {
    // console.log(arguments);
    return a + b;
};
// arrow(2, 3, 4);


//PRIMITIVE TYPE AND OBJECTS
console.log('PRIMITIVE TYPE AND OBJECTS');
let age = 22;
let oldAge = age;
age = 21;

console.log(age);
console.log(oldAge);

//objects types
const mee = {
    name: 'ayesha',
    age: 22
}

const friend = mee;
friend.age = 27;

console.log('ME', mee);
console.log('Friend', friend);


//PRACTICE
//primitive types
let lastName = 'khalil';
let oldLastName = lastName;
lastName = 'umer';
console.log(lastName);
console.log(oldLastName);

//objects types
const myObject = {
    firstName: 'Ayesha',
    lastName: 'Khalil',
    age: 22,
    family: [
        'Mom',
        'Dad',
        'Brother'
    ]
}

//will make a shallow copy
const myObjectCopied = Object.assign({}, myObject);
myObjectCopied.lastName = 'Umer';

//it does not work as last name did (array is also an object)
myObjectCopied.family.push('First');
myObjectCopied.family.push('Second');

console.log('Before', myObject);
console.log('After', myObjectCopied);

//how to do a deep clone
//we have to use library