// function theatrePromotions(input) {
//     let day = input[0];
//     let age = Number(input[1]);

//     let finalPrice;

//     if (day === 'Weekday') {
//         if (age >= 0 && age <= 18) {
//             finalPrice = 12;
//         } else if (age > 18 && age <= 122) {
//             finalPrice = 18;
//         } else {
//             finalPrice = 'Error!';
//         }
//     } else if (day === 'Weekend') {
//         if (age >= 0 && age <= 18) {
//             finalPrice = 15;
//         } else if (age > 18 && age <= 122) {
//             finalPrice = 20;
//         } else {
//             finalPrice = 'Error!';
//         }
//     } else if (day === 'Holiday') {
//         if (age >= 0 && age <= 18) {
//             finalPrice = 5;
//         } else if (age > 18 && age <= 122) {
//             finalPrice = 12;
//         } else if (age > 18 && age <= 122) {
//             finalPrice = 10;
//         } else {
//             finalPrice = 'Error!';
//         }
//     } else {
//         finalPrice = 'Error!';
//     }

//     if (typeof finalPrice === 'number') {
//         console.log(`${finalPrice}$`);
//     } else {
//         console.log(finalPrice);
//     }
// }

// theatrePromotions(['Weekday', 0]);



function theatrePromotions(day, age) {
    let finalPrice;

    if (day === 'Weekday') {
        if (age >= 0 && age <= 18) {
            finalPrice = 12;
        } else if (age > 18 && age <= 122) {
            finalPrice = 18;
        } else {
            finalPrice = 'Error!';
        }
    } else if (day === 'Weekend') {
        if (age >= 0 && age <= 18) {
            finalPrice = 15;
        } else if (age > 18 && age <= 122) {
            finalPrice = 20;
        } else {
            finalPrice = 'Error!';
        }
    } else if (day === 'Holiday') {
        if (age >= 0 && age <= 18) {
            finalPrice = 5;
        } else if (age > 18 && age <= 122) {
            finalPrice = 12;
        } else {
            finalPrice = 'Error!';
        }
    } else {
        finalPrice = 'Error!';
    }

    if (typeof finalPrice === 'number') {
        console.log(`${finalPrice}$`);
    } else {
        console.log(finalPrice);
    }
}
theatrePromotions