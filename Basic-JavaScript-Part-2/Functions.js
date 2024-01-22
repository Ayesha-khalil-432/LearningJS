//piece of code that we can reuse

function logger() {
    console.log('My name is Ayesha');
}

//calling function
//we can call as many times as we want
logger();
logger();
logger();

//can also recieve data and return data
function foodProcessor(apple, mango) {
    console.log(apple, mango);
    const juice = `Juice with ${apple} apples and ${mango} mangoes`;
    return juice;
}

console.log(foodProcessor(2, 3));

//function declaration vs expressions
//function declaration
//can call function above declaration
function caculateAge1(birthYear) {
    return 2024 - birthYear;
}
console.log(caculateAge1(2002));


//expression
//anonymous functions
//can not call above declaration (because of hoisting)
const caculateAge2 = function (birthYear) {
    return 2024 - birthYear;
}
console.log(caculateAge2(2000));

//we can call one function in another function
function func1(){
    console.log('Function 1')
    console.log('Function 2 called in function 1 ', func2());
}
function func2(){
    console.log('Function 1 called in function 2 ', func1());
    console.log('Function 2');
}
function func3(){
    func1();
    func2();
    console.log('Function 3');
}

//can also recieve data and return data
function foodProcessor(apple, mango) {
    console.log(apple, mango);
    const juice = `Juice with ${apple} apples and ${mango} mangoes`;
    return juice;
}

console.log(foodProcessor(2, 3));
