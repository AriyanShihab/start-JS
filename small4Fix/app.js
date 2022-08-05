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