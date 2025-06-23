// function dayOfWeek (day) {

//     if (day === 1) {
//         console.log(`Monday`);
//     } else if (day === 2) {
//         console.log(`Tuesday`);
//     } else if (day === 3) {
//         console.log(`Wednesday`);
//     } else if (day === 4) {
//         console.log(`Thursday`);
//     } else if (day === 5) {
//         console.log(`Friday`);
//     } else if (day === 6) {
//         console.log(`Saturday`);
//     } else if (day === 7) {
//         console.log(`Sunday`);
//     } else {
//         console.log(`Invalid day!`);
//     }

// }
// dayOfWeek(3)

function dayOfWeek (dayNr) {
    const days = [
        `Monday`,
        `Tuesday`,
        `Wednesday`,
        `Thursday`,
        `Friday`,
        `Saturday`,
        `Sunday`,
    ]

    const result = days[dayNr - 1];

    if (result != undefined) {
        console.log(result);
    } else {
        console.log(`Invalid day!`);
    }
}
dayOfWeek(3)