function division (divNum) {

    if (divNum % 10 === 0) {
        console.log(`The number is divisible by 10`);
    } else if (divNum % 7 === 0) {
        console.log(`The number is divisible by 7`);
    } else if (divNum % 6 === 0) {
        console.log(`The number is divisible by 6`);
    } else if (divNum % 3 === 0) {
        console.log(`The number is divisible by 3`);
    } else if (divNum % 2 === 0) {
        console.log(`The number is divisible by 2`);
    } else {
        console.log(`Not divisible`);
    }

}
division(31)