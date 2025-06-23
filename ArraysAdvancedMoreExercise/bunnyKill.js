function bunnyKill(input) {
    let bombs = input.pop().split(' ');
    let matrix = input.map(row => row.split(' ').map(Number));

    let totalDamage = 0;
    let killedBunnies = 0;

    bombs.forEach(bomb => {
        let [bombRow, bombCol] = bomb.split(',').map(Number);
        let bombDamage = matrix[bombRow][bombCol];

        if (bombDamage > 0) {
            totalDamage += bombDamage;
            killedBunnies += 1;

            for (let row = bombRow - 1; row <= bombRow + 1; row++) {
                for (let col = bombCol - 1; col <= bombCol + 1; col++) {
                    if (matrix[row] !== undefined && matrix[row][col] !== undefined) {
                        matrix[row][col] -= bombDamage;
                    }
                }
            }
        }
    });

    matrix.forEach(row => {
        row.forEach(cell => {
            if (cell > 0) {
                totalDamage += cell;
                killedBunnies += 1;
            }
        });
    });

    console.log(totalDamage);
    console.log(killedBunnies);
}

bunnyKill([
    '5 10 15 20',
    '10 10 10 10',
    '10 15 10 10',
    '10 10 10 10',
    '2,2 0,1'
]);