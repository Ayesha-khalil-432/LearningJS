//shorter form of function
//for one line of code
const calculateAge = birthYear => 2024 - birthYear;
console.log(calculateAge(2002));


//for more code
const yearUntilRetirment = birthYear => {
    const age = 2024 - birthYear;
    const retirement = 60 - age;
    return retirement;
}
console.log(yearUntilRetirment(2002));

//for more parameters
const yearUntilRetirmentWithName = (birthYear, firstName) => {
    const age = 2024 - birthYear;
    const retirement = 60 - age;
    return `${firstName} will retire in ${retirement} years`;
}
console.log(yearUntilRetirmentWithName(2002,'Ayesha'));
