/*
Let's go back to Mark and John comparing their BMIs! This time, 
let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). 
(mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). 
Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. 
Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/

const mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    age: 29,
    mass: 78,
    height: 1.69,
    calBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

const john = {
    firstName: 'John',
    lastName: 'Smith',
    age: 27,
    mass: 92,
    height: 1.95,
    calBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

john.calBMI();
mark.calBMI();

john.bmi>mark.bmi?console.log(`${john.firstName} ${john.lastName}'s bmi (${john.bmi}) is higher than ${mark.firstName} ${mark.lastName}'s bmi (${mark.bmi})`):
console.log(`${mark.firstName} ${mark.lastName}'s bmi (${mark.bmi}) is higher than ${john.firstName} ${john.lastName}'s bmi (${john.bmi})`);