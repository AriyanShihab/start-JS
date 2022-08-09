// feetToInchi

function feetToInchi(feet) {
    return feet * 12;
}
console.log(feetToInchi(4.5));

//centimeterToMeter
function centimeterToMeter(centimeter) {
    return centimeter / 100;
}
console.log(centimeterToMeter(1250));

function paperRequirements(book1Qantity, book2Quantity, book3Quantity) {
    // requerd pages
    const forBookOne = 100;
    const forBookTwo = 200;
    const forBookThree = 300;
    const tottalPageRequerment =
        book1Qantity * 100 + book2Quantity * 200 + book3Quantity * 300;

    return tottalPageRequerment;
}
console.log(paperRequirements(3, 2, 1));

// bestFriend (find leargest strring insidee an aray)

function bestFriend(arrOfFriends) {
    let leargest = "";
    for (let i = 0; i < arrOfFriends.length; i++) {
        if (arrOfFriends[i].length > leargest.length) {
            leargest = arrOfFriends[i];
        }
    }
    return leargest;
}
const friends = [`Ariyan`, `Masum`, `Parvej`, `Vai tumi sob theke boro`];
console.log(bestFriend(friends));

function onlyPositive(arrOfNumber) {
    const positiveOnly = [];
    let i = 0;
    while (i < arrOfNumber.length) {
        if (arrOfNumber[i] >= 0) {
            positiveOnly.push(arrOfNumber[i]);
        } else {
            break;
        }

        i++;
    }

    // =========using for loop for practice

    // for (i = 0; i < arrOfNumber.length; i++) {
    //     if (arrOfNumber[i] >= 0) {
    //         positiveOnly.push(arrOfNumber[i]);
    //     } else {
    //         break;
    //     }
    // }
    console.log(positiveOnly);
    return positiveOnly;
}
const numbers = [2, 3, 4, 56, 34, 43, -23, 23];
console.log(onlyPositive(numbers));