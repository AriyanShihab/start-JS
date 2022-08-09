// Harry’s mom gave him tk 1000 and asked him to buy some oranges and
// apples. Write a program to help Harry calculate how much money the
// shopkeeper will return. The total cost of 1 kg of oranges and 1 kg of
// apples is tk 700.

let harrysBudget = 1000;
let costOfGoods = 700;
let returnAmount = harrysBudget - costOfGoods;
console.log(returnAmount);

/*
Write a program to calculate the average marks of Mathematics,
Biology, Chemistry, Physics, and Bangla of a student.
 */

function getAvaerage(math, biology, chemistry, physics, bangla) {
    let totallMark = math + biology + chemistry + physics + bangla;
    let average = totallMark / 5;
    return average.toFixed(2);
}
console.log(getAvaerage(87, 78, 89, 79, 93));

/*
John’s teacher gave him two variables. Each variable contains a string.
John’s teacher asked him to combine these two strings(‘I am going to
be’ and ‘an awesome web developer’) and print them in one line. Help
John write the program.

*/
let firstString = `I am going to be`;
let secondString = `an awesome web developer`;
let inOneLine = firstString + secondString;
console.log(inOneLine);

/*
Sarah’s mother is teaching her mathematics. She gave Sarah the number
119 and asked her what the remainder would be if she divided the number
by 5. Help Sarah write the program.
 */

let findReminder = 119 % 5;
console.log(findReminder);

/*
6) You are given an array:

var fruits = ['Apple', 'Banana', 'Orange'];

a) Find the index of ‘Banana’ and replace ‘Banana’ with ‘Mango’.
b) Remove ‘Orange’ and add ‘Watermelon’. */

const fruits = ["Apple", "Banana", "Orange"];
let banana = fruits.indexOf(`Banana`); // return the index of Banana
fruits[banana] = "Mango";
console.log(fruits);
fruits.pop(); //remove Orange
fruits.push(`WaterMelon`); // add WaterMelon
console.log(fruits);

/*
7) You and your friends Tom, Jane, Peter and John got their final exam
results. Your total score is 85, Tom’s total score is 66, Jane’s total score is
95, Peter’s total score is 56 and John’s total score is 40. The grading
chart is

80 or above A grade
60 or above B grade
50 or above C grade
40 or above D grade
39 or less => F grade

Write a program to find your and your friends’ grades using
if-else. */
function findGrade(studentMark) {
    let grade;
    if (studentMark >= 80) {
        grade = " Your grade is A ";
    } else if (studentMark >= 60) {
        grade = " Your grade is B ";
    } else if (studentMark >= 50) {
        grade = " Your grade is C ";
    } else if (studentMark >= 40) {
        grade = " Your grade is D ";
    } else if (studentMark <= 39) {
        grade = " Your grade is f ";
    }
    return grade;
}
//Your total score is 85, Tom’s total score is 66, Jane’s total score is 95, Peter’s total score is 56 and John’s total score is 40
let jane = findGrade(95);
let peter = findGrade(56);
let jhon = findGrade(40);
let myself = findGrade(85);

console.log(jane, peter, jhon, myself);

// You are given three numbers 13, 79, and 45. Write a program that will print the largest number using if-else.
let numOne = 13;
let numTwo = 79;
let numThree = 450;
let leargst = 0;
if (numOne > numTwo && numOne > numTwo) {
    leargst = numOne;
} else if (numTwo > numThree && numTwo > numOne) {
    leargst = numTwo;
} else {
    leargst = numThree;
}
console.log(leargst);

//9) You are given a triangle with the sides 9, 8, 9. Write a program to check whether a triangle is Isosceles or not using if-else.
let sideOne = 9;
let sideTwo = 8;
let sideThree = 9;

if (sideOne == sideTwo || sideOne === sideThree || sideTwo == sideThree) {
    console.log(`yes this triangle is a Isosceles`);
} else {
    console.log(`This triangle is not an Isosceles`);
}

// take action based on trafic light color

let traficLightColor = "red";
if (traficLightColor == "red") {
    console.log(" Dude, it's an sine of danger, dont cross the road");
} else if (traficLightColor == "yellow") {
    console.log(" Dude, it's an sine of waiting, Please wait");
} else if (traficLightColor == "green") {
    console.log(" Dude, it's an sine of safe, Please cross the road");
}

// printing task in multiple way, using for loop and while loop

const task = [
    `module unlok at 8`,
    `watch and practice lesson`,
    `taking notes`,
    `own practice`,
    `joining support session`,
];
// using for loop

for (i = 0; i < 3; i++) {
    for (j = 0; j < task.length; j++) {
        console.log(task[j]);
    }
}
// printing task in reverse in reverse way using for loop

for (i = 0; i < 3; i++) {
    for (j = task.length - 1; j >= 0; j--) {
        console.log(task[j]);
    }
    console.log(`======loop over=====`);
}

// using while loop
console.log(`======using while loop========`);
let loopVariable = 0;

while (loopVariable < 3) {
    let j = 0;
    while (j < task.length) {
        console.log(task[j]);
        j++;
    }
    console.log(`reverse while loop end ========`);

    loopVariable++;
}

// reverse the task using while loop
let reverseLoop = 0;
let reversevariable = task.length - 1;
while (reverseLoop < 3) {
    while (reversevariable >= 0) {
        console.log(task[reversevariable]);
        reversevariable--;
    }
    console.log(`reverse while loop end ========`);
    reverseLoop++;
}

// write  cide that will print all the even number X to Y number

for (i = 4; i <= 8; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}
// write  cide that will print all the od number X to Y number
for (i = 10; i <= 15; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

// printin array element using for loop

const topic = [`variable`, `loop`, `condition`, `function`, `object`];
for (i = 0; i < topic.length; i++) {
    console.log(topic[i]);
}

// run a loop from x to z, breack at y

for (i = 2; i <= 5; i++) {
    if (i >= 4) {
        break;
    }
    console.log(i);
}

// skipp values lerger than X

const bookPrice = [234, 45, 363, 34, 353, 234, 54, 456];
for (i = 0; i < bookPrice.length; i++) {
    if (bookPrice[i] > 220) {
        continue;
    }
    console.log(bookPrice[i]);
}

// Write a function called foo() which prints “foo” and a function called bar() which prints
// “bar”. Call function bar() in the foo() function after printing. What will be the output? Now call
// the foo() to see the output.
function bar() {
    console.log(`bar`);
}

function foo() {
    console.log(`foo`);
    bar();
}

foo();

// Write a function called make_avg() which will take an three integers and return the average of those values.

function make_avg(intOne, intTwo, intThree) {
    return (intOne + intTwo + intThree) / 3;
}
console.log(make_avg(2, 1, 3));
console.log(make_avg(2, 2, 5));

// Challenging: Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function arrAvg(arr, arrLength) {
    let totall = 0;
    for (let i = 0; i < arr.length; i++) {
        totall += arr[i];
    }

    return totall / arrLength;
}

console.log(arrAvg([2, 3, 4], 3));
console.log(arrAvg([20, 50, 30, 10, 40], 5));

// Write a function called odd_even() which takes an integer value and tells whether this
// value is even or odd. You need to do it in 4 ways:
// ● Has return + Has parameter
// ● No return + Has parameter

// has param and return
function odd_even(int) {
    if (int % 2 === 0) {
        return `this number is an even number`;
    } else return `this number is an odd number`;
}
console.log(odd_even(5));
console.log(odd_even(4));
// no return has param
function even_odd(num) {
    if (num % 2 === 0) {
        console.log(`this number is an even number`);
    } else {
        console.log(`this number is an odd number`);
    }
}
even_odd(11);
even_odd(12);

// write a function that that takes an number and print out it's multiplication table

function multiplication(num) {
    for (i = 1; i <= 10; i++) {
        // we can do it using teamplte litartel also, but for now we are using normal prosess
        console.log(num + " * " + i + " = " + num * i);
    }
}

multiplication(5);

// write a function that take a name as a param and in lower case format

function convertToLowerCase(nameStr) {
    return nameStr.toLowerCase();
}

console.log(convertToLowerCase(`Ariyan`));

// write a function that concatinate first name and last name ( names come  as parameter)

function fullName(fName, lName) {
    // we can do it using teamplte litartel also, but for now we are using normal prosess
    console.log(fName + " " + lName);
}
fullName(`Ariyan`, `Shihab`);

// write a function that takes a number and return the squre of the number

function getSquere(num) {
    return num * num;
}

console.log(getSquere(4));
console.log(getSquere(5));

// print an elemt od an array witch is an property of an object

const pizza = {
    toppings: ["cheese", "sauce", "pepperoni"],

    crust: "deep dish",

    serves: 2,
};

// way 01
let getArrayFirst = pizza.toppings;
console.log(getArrayFirst[getArrayFirst.length - 1]);
// way 02
console.log(pizza.toppings[2]);

// write a function that return the sqare of th number
function sqare(num) {
    return num * num;
}
console.log(sqare(3));

function getMinutes(hour) {
    return hour * 60;
}
console.log(getMinutes(1.3));

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

function findOddSum(arrayOfNumber) {
    let oddOnly = [];
    for (i = 0; i < arrayOfNumber.length; i++) {
        if (arrayOfNumber[i] % 2 !== 0) {
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

// return true if age is even either false

function isEven(age) {
    if (age % 2 == 0) {
        return true;
    }
    return false;
}

// write a function that take an input as a celcius, an returt it's fahrenheit value; celicus to fahrenheit converter;

function toFahrenheit(cel) {
    return (cel * 9) / 5 + 32;
}
console.log(toFahrenheit(35));

// wrie a function tha tconvert fahrenheit to celcius

function toCelsius(fahr) {
    return (fahr - 32) * (5 / 9);
}
console.log(toCelsius(64));

// you have a mark of an student, now write a function to tell him his grade according to GPA

function findGrade(marks) {
    let grade;
    if (marks >= 90) {
        grade = `Golden A+`;
    } else if (marks >= 80) {
        grade = `A+`;
    } else if (marks >= 70) {
        grade = `A`;
    } else if (marks >= 60) {
        grade = `A-`;
    } else if (marks >= 50) {
        grade = `B`;
    } else if (marks >= 40) {
        grade = `C`;
    } else if (marks > +33 && marks <= 39) {
        grade = `D`;
    } else if (marks < 33) {
        grade = `F`;
    }
    return grade;
}

console.log(findGrade(79));
console.log(findGrade(99));
console.log(findGrade(29));

// write function that calculate simple iterest;

function simpleinterest(principleAmuount, interestRate, time) {
    let tottalInterest = (principleAmuount * interestRate * time) / 100;
    let tottalAmountToPaid = principleAmuount + tottalInterest;
    return {
        tottalAmountToPaid,
        tottalInterest,
    };
}

console.log(simpleinterest(20000, 10, 2));

// Suppose, you have an array with 8 elements. Find the smallest element of that array.

const findSmallNumber = [234, 546, 34, 67, 54, 743, 653, 64];
let smallest = findSmallNumber[0];
for (i = 0; i < findSmallNumber.length; i++) {
    if (findSmallNumber[i] < smallest) {
        smallest = findSmallNumber;
    }
}

// var Arr = [1, 7, 2, 8, 3, 4, 5, 0, 9] WARNING>> i HAVE SOME PROBLEM HERE, i HAVE TO STUDY;

// for (var i = 1; i < Arr.length; i++) {
//     for (var j = 0; j < i; j++) {
//         if (Arr[i] < Arr[j]) {
//             var x = Arr[i];
//             Arr[i] = Arr[j];
//             Arr[j] = x;
//         }
//     }
// }

//Write a function and take an array as a parameter. Find the average of all the elements of that array and return this average.
function arrAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[1];
    }
    console.log(sum);
    return sum / arr.length;
}

let avagageNumber = [2, 3, 4];
console.log(arrAverage(avagageNumber));

// Write a function which takes the height and width of a rectangle as parameters. Find out the area of that rectangle and print the result.
function rectangleArea(height, width) {
    return height * width;
}
console.log(rectangleArea(4, 6));