/*
file: module 20: apply js extra practice
author:ariyan Shihab;
date: 4:08:2022;


*/

// Write a function that will take hour as the input parameter and will convert it into minutes and will return the result in minutes.

function getMunites(hours) {
    return hours * 60;
}
console.log(getMunites(3));
console.log(getMunites(5));

// Write a function findLeapYear() that will take the array
// [2023,2024,2025,2028,2030] as the input parameter and will check if
// each year is a leap year. If a year is a leap year insert that year in a
// new array, return the new array and print the result.

function isLeapYear(year) {
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        return true;
    }
}

function findLeapYear(arrayOfYear) {
    let onlyLeapYear = [];
    for (let i = 0; i < arrayOfYear.length; i++) {
        if (isLeapYear(arrayOfYear[i])) {
            onlyLeapYear.push(arrayOfYear[i]);
        }
    }
    return onlyLeapYear;
}
let year = [2023, 2024, 2025, 2028, 2030];

console.log(findLeapYear(year));

// Write a function findOddSum() that will take the array [5, 7, 8, 10, 45, 30]
// as the input parameter and will return the sum of the odd numbers.

function isOdd(number) {
    if (number % 2 === 1) {
        return true;
    }
}

function findOddSum(arrayOfNumber) {
    let oddOnly = [];
    for (i = 0; i < arrayOfNumber.length; i++) {
        if (isOdd(arrayOfNumber[i])) {
            oddOnly.push(arrayOfNumber[i]);
        }
    }
    console.log(oddOnly);
    // creating some of odd numbers
    let oddTotall = 0;
    for (j = 0; j < oddOnly.length; j++) {
        oddTotall = oddTotall + oddOnly[j];
    }
    return oddTotall;
}

let oddNumbers = [5, 7, 8, 10, 45, 30];
console.log(findOddSum(oddNumbers));

// write a function thst convert hours to second

function getSecond(hour) {
    return hour * 60 * 60;
}
console.log(getSecond(1));

// write a function that will take paramiter and check the next year leap year or not

function nextLeapYear(year) {
    let nxtYear = year + 1;

    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        console.log(`it's an leap year`);
        return true;
    } else {
        console.log(` it's not an leap year`);
    }
}

nextLeapYear(2023);
nextLeapYear(2024);

// write a function that tell us closest leap year,from the given year

function closestLeapYear(givneYear) {
    for (i = 0; i <= 3; i++) {
        if (isLeapYear(givneYear + i)) {
            console.log(
                givneYear + i + " is the colsest leap yaer after " + givneYear
            );
            return;
        }
    }
}
closestLeapYear(2022);