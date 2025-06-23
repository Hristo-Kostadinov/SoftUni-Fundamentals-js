function MagicMatrices(mainArr) {

   let firstRowSum = mainArr[0].reduce((num, Num) => num + Num, 0);
   let secondRowSum = mainArr[1].reduce((num, Num) => num + Num, 0);
   let thirdRowSum = mainArr[2].reduce((num, Num) => num + Num, 0); 

    if (firstRowSum === secondRowSum && secondRowSum === thirdRowSum) {
        console.log(true);
    } else {
        console.log(false);
    }
}
MagicMatrices
([
    [4, 9, 2],
    [3, 5, 7],
    [8, 1, 6]
])  


// function MagicMatrices(mainArr) {
//     let size = mainArr.length;
//     let isMagic = true;

//     // Calculate the sum of the first row
//     let rowSum = 0;
//     for (let j = 0; j < size; j++) {
//         rowSum += mainArr[0][j];
//     }

//     // Check all rows
//     for (let i = 1; i < size; i++) {
//         let currentRowSum = 0;
//         for (let j = 0; j < size; j++) {
//             currentRowSum += mainArr[i][j];
//         }
//         if (currentRowSum !== rowSum) {
//             isMagic = false;
//             break;
//         }
//     }

//    // Check all columns
//     for (let j = 0; j < size; j++) {
//         let columnSum = 0;
//         for (let i = 0; i < size; i++) {
//             columnSum += mainArr[i][j];
//         }
//         if (columnSum !== rowSum) {
//             isMagic = false;
//             break;
//         }
//     }

//     console.log(isMagic);
// }

// MagicMatrices([
//     [4, 9, 2],
//     [3, 5, 7],
//     [8, 1, 6]
// ]);