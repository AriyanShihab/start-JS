/*
file: Module-19 extra practice task
author:Aruyan Shihab
date:03-08-2022
 */

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

/*You are in a hurry to go to your school on time. But when you are crossing the road, the
traffic signal is red coloured. In this situation, if you try to cross the road, you may be in
danger.If you notice a yellow coloured traffic signal, you should stop. If you notice a green
coloured traffic signal, you should cross the road. So write a JS code, where there is a
variable called signal. Its value can be green, yellow or red & we will get different activities as
output depending on the variable. So, hurry up.*/

// using if syntaxt

let lightColor = `yellow`;

if (lightColor == `red`) {
    console.log(`Hey dude, red means danger; stop here and weait fro the freen`);
} else if (lightColor == `yellow`) {
    console.log(`Please wait for a little bit of time,green is on the way`);
} else if (lightColor == `green`) {
    console.log(`Ok! finally the grren is here, you can cross the the road now`);
} else {
    console.log(`invalid light-color `);
}

// using switch-case syntax

switch (lightColor) {
    case `red`:
        console.log(
            `Hey dude, red means danger; stop here and weait fro the freen`
        );
        break;

    case `yellow`:
        console.log(`Please wait for a little bit of time,green is on the way`);
        break;

    case `green`:
        console.log(
            `Ok! finally the grren is here, you can cross the the road now`
        );
        break;

    default:
        console.log(`invalid light-color `);
}

// extra practic echallange 01

// write a function that that takes an number and print out it's multiplication table

function multiplication(num) {
    for (i = 1; i <= 10; i++) {
        // we can do it using teamplte litartel also, but for now we are using normal prosess
        console.log(num + " * " + i + " = " + num * i);
    }
}

multiplication(5);

// extra practic echallange 02

// write a function that take a name as a param and in lower case format

function convertToLowerCase(nameStr) {
    return nameStr.toLowerCase();
}

console.log(convertToLowerCase(`Ariyan`));

// extra practic echallange 03
// write a function that concatinate first name and last name ( names come  as parameter)

function fullName(fName, lName) {
    // we can do it using teamplte litartel also, but for now we are using normal prosess
    console.log(fName + " " + lName);
}
fullName(`Ariyan`, `Shihab`);

// extra practic echallange 04

// write a function that takes a number and return the squre of the number

function getSquere(num) {
    return num * num;
}

console.log(getSquere(4));
console.log(getSquere(5));

// extra practic echallange 05
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