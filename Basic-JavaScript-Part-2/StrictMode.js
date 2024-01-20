//for strict mode we write 
'use strict';
//at beginning of each file
//to erite more secure code
//to avoid accidental errors
//create visible errors for us on develoepr console

//example
let hasDriversLicense = false;
const passTest = true;

if (passTest) {
    hasDriversLicense = true;
}

if(hasDriversLicense) console.log('set to true');