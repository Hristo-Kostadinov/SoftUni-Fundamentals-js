function diagonalAttack(input) {
 
    let matrix = input.map(row => row.split(' ').map(Number));
    let size = matrix.length;

    let primaryDiagonalSum = 0;
    let secondaryDiagonalSum = 0;

    // Calculate the sums of the primary and secondary diagonals
    for (let i = 0; i < size; i++) {
        primaryDiagonalSum += matrix[i][i];
        secondaryDiagonalSum += matrix[i][size - 1 - i];
    }

    if (primaryDiagonalSum === secondaryDiagonalSum) {
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                if (i !== j && i !== size - 1 - j) {
                    matrix[i][j] = primaryDiagonalSum;
                }
            }
        }
    }

   
    matrix.forEach(row => console.log(row.join(' ')));
}


diagonalAttack([
    '5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1'
]);
