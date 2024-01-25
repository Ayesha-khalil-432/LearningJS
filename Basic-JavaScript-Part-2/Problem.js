///////////////////////////////////////
// Using Google, StackOverflow and MDN

// PROBLEM 1:
// We work for a company building a smart home thermometer.
// Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude.
// Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it
function calcAmplitude(temperatures) {
    let min = temperatures[0], max = temperatures[0];
    for (let i = 0; i < temperatures.length; i++) {
        if (typeof (temperatures[i]) === 'number') {
            if (temperatures[i] < min) {
                min = temperatures[i];
            } else if (temperatures[i] > max) {
                max = temperatures[i];
            }
        } else {
            continue;
        }
    }
    console.log(`Amplitude is ${max} - ${min} = ${max - min}`);
}

calcAmplitude(temperatures);
//PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays

function calcAmplitude(temp1, temp2) {
    let temperatures = temp1.concat(temp2);
    let min = temperatures[0], max = temperatures[0];
    for (let i = 0; i < temperatures.length; i++) {
        if (typeof (temperatures[i]) === 'number') {
            if (temperatures[i] < min) {
                min = temperatures[i];
            } else if (temperatures[i] > max) {
                max = temperatures[i];
            }
        } else {
            continue;
        }
    }
    console.log(`Amplitude is ${max} - ${min} = ${max - min}`);
}

calcAmplitude(temperatures, [32, 48, 'ayesha', 66, -12]);

///////////////////////////////////////
// Debugging with the Console and Breakpoints

const measurementKelvin = function () {
    const measurement = {
        type: 'temperature',
        unit: 'celsius',
        value: prompt('Degrees celsius'),
    }

    const kelvin = Number(measurement.value) + 273;
    return kelvin;
}
// identify the bug
console.log(measurementKelvin());
//find the bug

//using a debugger
function calcAmplitudeBug(temp1, temp2) {
    let temperature = temp1.concat(temp2);
    let min = temperature[0], max = 0;
    // debugger;
    for (let i = 0; i < temperature.length; i++) {
        if (typeof (temperature[i]) === 'number') {
            if (temperature[i] < min) {
                min = temperature[i];
            } else if (temperature[i] > max) {
                max = temperature[i];
            }
        } else {
            continue;
        }
    }
    console.log(`Amplitude is ${max} - ${min} = ${max - min}`);
}

calcAmplitudeBug([2, 5, 7, 8], [32, 48, 'ayesha', 66]);