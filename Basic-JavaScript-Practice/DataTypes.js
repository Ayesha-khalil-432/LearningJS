//number
let age = 21;

//String
let myName = 'ayesha';

//Boolean
let exam = true;

//undefined
let value;

//null
let anyValue = null;

//Symbol(ES2015) VALUE IS UNIQUE CAN NOT BE CHANGED[NOT USEFUL FOR NOW]
//JS HAS DYAMIC TYPING 
//FOR NAMING WE USE CAMEL CASE CONVERNTION

//type of variable
console.log(typeof (age));
console.log(typeof (myName));
console.log(typeof (exam));
console.log(typeof (value));
console.log(typeof (anyValue));
console.log(typeof (15.2));

//dynamic typing in action
//we can change the type of a value that is hold by a variable
myName = true;
console.log(typeof (myName));