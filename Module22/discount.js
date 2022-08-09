// write a function that will follow these conditions and return the ticket price;
// ==== conditions
// 1. if ticket numbers is less than 100, per ticket price: 100
// 2. if ticket numbers is more than 100, but less than 200. First 100 tickets will be 100/ticket.
// rest tickets will be 90 taka per piece
//     first 100 ---->100tk
//     rest ----> 90tk
// 3. if you purchase more than 200 tickets
//     first 100 ---> 100tk
//     101-200 ---> 90tk
//     200+ ----> 70tk

function calculateTicketValue(numberOfTicket) {
    let firstHundred;
    let secondHundred;
    let amountToPueches;
    if (numberOfTicket <= 100) {
        firstHundred = 100 * numberOfTicket;
        amountToPueches = numberOfTicket * 100;
        return amountToPueches;
    } else if (numberOfTicket <= 200) {
        firstHundred = 100 * 100;

        let extra = numberOfTicket - 100;
        let priceOfExtraTicket = extra * 90;
        amountToPueches = firstHundred + priceOfExtraTicket;
        return amountToPueches;
    } else {
        firstHundred = 100 * 100;
        secondHundred = 100 * 90;

        let avobeTwoHundread = numberOfTicket - 200;
        let avobePrice = avobeTwoHundread * 70;
        amountToPueches = firstHundred + secondHundred + avobePrice;
        return amountToPueches;
    }
}

console.log(calculateTicketValue(205));

// from couerse

console.log(`ProgrammingHero`);

function ticketPrice(ticketQuantity) {
    const first100Rate = 100;
    const second100Rate = 90;
    const restTicketRate = 70;
    if (ticketQuantity <= 100) {
        const price = ticketQuantity * first100Rate;
        return price;
    } else if (ticketQuantity <= 200) {
        const first100Price = 100 * first100Rate;
        const restTicketQuantity = ticketQuantity - 100;
        const restTicketPrice = restTicketQuantity * second100Rate;
        const totalPrice = first100Price + restTicketPrice;
        return totalPrice;
    } else {
        const first100Price = 100 * first100Rate;
        const second100Price = 100 * second100Rate;
        const restTicketQuantity = ticketQuantity - 200;
        const restTicketPrice = restTicketQuantity * restTicketRate;
        const totalCost = first100Price + second100Price + restTicketPrice;
        return totalCost;
    }
}

const price = ticketPrice(205);
console.log("price: ", price);

let numbers = [4, 5, 5, 6, 3, 4, 3, 2, 1, 2, 8, 9, 7];

function biriyani(numbers) {
    const singles = [];
    for (i = 0; i < numbers.length; i++) {
        let number = numbers[i];
        if (numbers.includes(number) === false) {
            singles.push(number);
        }
    }
    return singles;
}

const biriyaniPabe = biriyani(numbers);

console.log(biriyaniPabe);