// == vs ===

const age = 18;

if(age === 18)
    console.log('you just became an adult');

console.log(18 === 18);
//output: true

console.log(18 === 19);
//output: false

// === (Strict equality operator) does not perform type coercion
// == (loose equality operator) it does type coercion

console.log('18' == 18); //true
console.log('18' === 18); //false

const myAge = prompt("What is your age?");
console.log(myAge);

if(myAge == 21){
    console.log('COOL 21 is amazing age');
}

// !== (strict version)
// != (loose version)