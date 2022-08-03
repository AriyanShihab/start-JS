// ------------------
// VARIABLE
// -------------------
// 1. What is JavaScript?
// js is one of the backbone of world wide web, js is a hight level programming language , it's work in both server and client side, in sever side js use node js runtime ,

// 2. How does JS Works?
// JS is a single threaded and single concurrent programming language which means it can handle one task at a time or, in other words, a piece of code at a time. It's an interpreted programming language, and like most scripting languages, it uses dynamic typing, where type safety is verified at the runtime.

// 3. What is Variable?
// variable is the anemodf an memory adress for an specific data; that means, when we store some data we give it a name and this name is an variable, variable value udate, remove
// 4. Declare a variable

var myName = `Ariyan Shihab`;
// 5. Types of Variable? How can you find out type of a variable
// variable types depend on what kind of data we store in it; for examle; var num= 12; here we store 12 in  num variable, 12 in a number and thats why the type of num variale is number, similerly var name=`Ariyan`; here Ariyan is an string,and for that reason name is string type variavle;
// we can use type of oparetor to find the type of an variable;
var num = 12;
var name = `Ariyan`;
var isAlive = true;
typeof num; //number
typeof name; //string
typeof isAlive; //boolean

// 6. Primitive and non-primitive data types
// well, its an very important topic and it ould take hours to write in details; for now, lets take top evel overveiw;
// threr are two types of data types in js, pritimitive and non-primitive(reffarence) type in js; the primitive data types are
// number
// string
// boolean
// undifined
// null
// bigInt (2020 )
// symbol (advanced)
// every other type of data is a non- primitive data in js

// 7. Naming Convention of JS variables;
// use camel case format, describe as well as possible; try to explain what this variable actually dooing here in sorter format,

// 8. Math Operation +, -, *, /, %
// (+) use for additions; example: console.log(3+4) returns= 7
// (-) use for substraction; example console.log(2-1) returns= 1
// (*) use for multipication; example: console.log(2*2) returns= 4
// (/) use for divsion; example: console.log(4*2) returns= 2
// (%) use for reminder; example: console.log(15*2) returns= 1

// 9. Short hand: +=, -=, *=, /=
//  (+=): v1+=something means  : v1= v1+sometig
//  (-=): v1-=something means  : v1= v1-sometig
//  (*=): v1*=something means  : v1= v1*sometig
//  (/=): v1/=something means  : v1= v1/sometig

// 10. ++, --

// (++) add one two the previous value
// (--) subtract one from previous value

// 11. parseInt, ParseFloat
//  parseInt convert a numerical string in to intiger naumber

console.log(parseInt(12.24254));
//  parseFloat convert a floating point string in to floating point  naumber

console.log(parseFloat(`23324.233423`));

// 12. toFixed
// to declare how many degit we want to rcove after the decimal
var a = 24 / 7;
console.log(a); //3.4285714285714284
console.log(a.toFixed(2)); //3.43
function add(num1, num2) {
    return 1;
    return 2;
    return 3;
}