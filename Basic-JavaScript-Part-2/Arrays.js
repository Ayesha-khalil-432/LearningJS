//data structures
const friend1 = 'Zoya';
const friend2 = 'Naima';
const friend3 = 'Tasha';

const friend = ['Zoya', 'Naima', 'Tasha'];
console.log(friend);
console.log(friend[0]);
console.log(friend[1]);
console.log(friend[2]);
//length of array
console.log(friend.length);
//get last index value
console.log(friend[friend.length - 1]);

friend[2] = 'Ayesha';
console.log(friend);

const year = new Array(1991, 2000, 2001, 2002, 2003);
console.log(year);

//array with different type data
const values = ['Ayesha', 'Zoya', 1000 - 100, 'Teacher', friend, friend1];
console.log(values);


//example
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);

console.log(friend);
//array methods (builtin)
//push (add at the end of array)
friend.push('Tasha');//returns length of array
console.log(friend);

//unshift (at beginning of array)
friend.unshift('Reesha');//returns length of array
console.log(friend);

//pop (remove last element of array)
friend.pop();//returns removed element
console.log(friend);

//shift (remove first element)
friend.shift();//returns removed element
console.log(friend);

//indexOf (index of particular value)
console.log(friend.indexOf('Naima'));

//includes() returns true and false
//true: when elements is in array
//false: when element is not in array
console.log(friend.includes('Naima'));
console.log(friend.includes('Test'));
