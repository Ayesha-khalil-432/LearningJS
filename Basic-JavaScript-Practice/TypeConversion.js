// type conversion (we manually covert type)
const inputYear = '1991';
//not correct way
// console.log(inputYear + 18);

console.log(Number(inputYear) + 18);

//converting number to string
console.log(String(23));

//type coercion (when js covert type behind the scenes)
//whenever an operator deals with two values having different types

console.log('I am ' + 21 + ' years old');
//ouput: I am 21 years old

//minus opearator triggers the opposite operation
console.log('23' - '10' - 3);
//ouput: 10

console.log('23' * '3');
//output: 69

console.log('24' * '3');
//output: 8

let n = '1' + 1;
n = n - 1;
console.log(n);
//output: 10

console.log(2 + 3 + 4 + '5');
//output: 95

console.log('10' - '5' - '1' + '6');
//output: 46

