// --------------------
// CONDITIONALS
// --------------------
// 1. meaning of: >, <, >=, <=, ==, !=, ===, !==,
// ans: geater than, lessthan, greater than equal, lesthan equal, eual value, not equal, eqaul value and data type, not  eqaul value and data type

// 2. Meaning of &&
// both conditions have to be true, here is an example
// it will every condions, if any of them returns false, it will not exicute the code block inside the conditios body
if (5 > 3 && 4 > 5) {
    console.log(`both conditions have fulfeid`);
}

// 3. Meaning of ||
// it will ccheck every conditions of around it, if any condiontios returns true, it will exicute the condiotions body
// example:
if (4 > 12 || 11 < 12) {
    console.log(`any condiontios returns true`);
}

// 4. Let's say you have x amount of money. if you have more than 80,000, then you will by a mac
// if more than 60,000 then you will by gaming laptop
// if you more than 40,000 then  you will by Lenovo Yoga
// if you have more than 20, 000 then  you will by an used laptop
// otherwise, you will use you mobile phone

// sloutions
var myBudget = 45000;

if (myBudget > 80000) {
    console.log(`I will buy a macbook`);
} else if (myBudget > 60000) {
    console.log(`I will buy  a gaming laptop`);
} else if (myBudget > 40000) {
    console.log(`I will buy a lenovo yoga`);
} else if (myBudget > 20000) {
    console.log(` I will buy an used laptop`);
} else {
    console.log(`I will use smartphone`);
}