let hasDriverLicense = true;
let hasGoodVision = true;

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);

hasDriverLicense = true;
hasGoodVision = false;

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);

console.log(!hasDriverLicense);
console.log(!hasGoodVision);

let shouldDrive = hasDriverLicense && hasGoodVision;
if (shouldDrive) console.log('i should drive(and)')

shouldDrive = hasDriverLicense || hasGoodVision;
if (shouldDrive) console.log('i should drive(or)')