function rounding(number, precision) {
    if (precision < 0) {
        precision = 0;
    } else if (precision > 20) {
        precision = 20;
    }
    let roundedNumber = parseFloat(number.toFixed(precision));
    console.log(roundedNumber);
}

rounding(10.5, 3)

// function rounding(number, precision) {
//     // Ensure precision is within the valid range
//     precision = Math.min(Math.max(precision, 0), 20);
    
//     let roundedNumber = Number(number.toFixed(precision));
//     console.log(roundedNumber);
// }

// rounding(10.5, 3)