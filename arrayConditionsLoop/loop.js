// ------------------
// LOOP
// ------------------
// 1. Display "Ajke amar mon valo nei" for 39 times
for (i = 0; i < 40; i++) {
    console.log(`Ajke amar mon valo nei`);
}

// 2. Display numbers between 58 to 98
for (i = 58; i <= 98; i++) {
    console.log(i);
    console.log(`hello`);
}
// 3. Show all even numbers from 412 to 456
for (i = 412; i <= 456; i = i + 2) {
    console.log(i);
}
// 4. Show all odd numbers 581 to 623
for (var i = 581; i <= 623; i = i + 2) {
    console.log(i);
}

// 5. Difference between while loop and for loop

// in for loop, we set the conditios inside the loop

// 6. Declare an array for all the topics that you have learned last few days
// display then as output
var topics = [
    `what is js`,
    `what is variable`,
    `how many type of variable there are`,
    `loop`,
    `conditions`,
];
for (i = 0; i < topics.length; i++) {
    console.log(topics[i]);
}
// 7. Create an array for all the mobile phones. Display all the elements of the array
// by using a while loop
var mobile = [`samsung`, `symphony`, `xiome`];
var phoneNames = 0;
while (phoneNames < mobile.length) {
    console.log(mobile[phoneNames]);
    phoneNames++;
}
// 8. Run a loop from 30 to 86. this loop will stop if the values get higher than 44
for (i = 30; i <= 86; i++) {
    if (i > 44) {
        break;
    }
    console.log(i);
}
// 9. Write the price of the books that you have.
// Display the prices if the prices is lower than 200

var bookPrice = [230, 340, 324, 170, 120, 185, 324, 235];

for (i = 0; i < bookPrice.length; i++) {
    if (bookPrice[i] > 200) {
        continue;
    }
    console.log(bookPrice[i]);
}