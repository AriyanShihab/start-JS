// ---------------------
// ARRAY
// -----------------------

// 1. ==>>What is the purpose of JS array?

// declare less variable, add and remove data from it, do some oparetion in it, The Array  lets us store multiple values in a single variable.  An array is used to store a collection of variable.
// here is an example

//without array
var num = 12;
var num2 = 13;
var num3 = 14;
// with array
var numbers = [12, 13, 14];

// 2. ==>>How to declare an array in JS
// thre are some other way to declare an array in js, but for now we will do it in simple way;
// at first writ an keyword called var, then give a vallid variable name and then add a wqual sine after that open and close square bracket [], and then place the values inside the brackets and dont forget to separete them by comma
// here is an example
var arr = [1, 2, 3, 4, 5, 6];

// 3.==>>find the  Number of elements in an Array
// we can easyly do that with .lenght property;
// here is an example
var app = [`facebook`, `instagram`];
var numberOfElements = app.length; //it will give us a number and that will be the totall number of element

// 4. ====>>>>What is index?
// index a posion of an array element, I mean index is an Identifilre of an  array element, and index number start with 0 (zero), in the bellow xample the element one(1) is holding index number (0) and the next element (2) holding the index number 1(one)

// here is an example
var findIndex = [1, 2, 3, 4, 5, 6];

// 5. Find the value of an element by index

var foodItem = [`rice`, `water`, `milk`];
var getRice = foodItem[0]; // it will return the zero index element of the foodItem array

// 6. Change an element by index

foodItem[2] = `Bread`;

// 7. get the index of an element by the value
var valueIndex = foodItem.indexOf(`water`); // return the index of water

// 8. what does it mean when you get undefined while getting the value of an element by index
// it means this index number does not apeare in that array
// here is an example
var testUndifined = foodItem[10]; //sins we have only 3 items in foodItem, that means the last index is 2, and we are try to access the value with (10) index value. witch does not appere in foodItem

// 9. How can you add an element to an array at the last position
// using push() method
// here is an example
var keywords = [`var`, `let`];
keywords.push(`const`);

// 10. How can you remove the last element from array
// using pop method
// here is an example
keywords.pop();

// 11. Add an element at the first position of an array
// using unshift method
keywords.unshift(`for`);

// 12. Remove the first element of an array
// using shift method
keywords.shift();