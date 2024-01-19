//falsy values 
//0, '', undefined, null, NaN

console.log(Boolean(0));//false
console.log(Boolean(undefined));//false
console.log(Boolean(''));//false
console.log(Boolean({}));//true
console.log(Boolean(NaN));//false

const money = 200;
if(money){
    console.log('do not spend your money ;)')
}
else{
    console.log('you should get a job!')
}

let height;
if(height){
    console.log('height is defined')
}
else{
    console.log('height is not defined')
}

//BOOLEAN LOGIC (LOGICAL OPERATORS)
// AND &&
// || OR
// ! NOT 