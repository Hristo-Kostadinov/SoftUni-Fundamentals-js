function airPollution(map, commands) {
    let matrix = map.map(row => row.split(' ').map(Number));

    for (let command of commands) {
        let [action, value] = command.split(' ');
        value = Number(value);

        switch (action) {
            case 'breeze':
                matrix[value] = matrix[value].map(cell => Math.max(cell - 15, 0));
                break;
            case 'gale':
                for (let i = 0; i < matrix.length; i++) {
                    matrix[i][value] = Math.max(matrix[i][value] - 20, 0);
                }
                break;
            case 'smog':
                for (let i = 0; i < matrix.length; i++) {
                    for (let j = 0; j < matrix[i].length; j++) {
                        matrix[i][j] += value;
                    }
                }
                break;
        }
    }

    let pollutedAreas = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] >= 50) {
                pollutedAreas.push(`[${i}-${j}]`);
            }
        }
    }

    if (pollutedAreas.length > 0) {
        console.log(`Polluted areas: ${pollutedAreas.join(', ')}`);
    } else {
        console.log("No polluted areas");
    }
}
airPollution
(['5 7 3 28 32',

    '41 12 49 30 33',
    
    '3 16 20 42 12',
    
    '2 20 10 39 14',
    
    '7 34 4 27 24'],
    
    ['smog 11', 'gale 3', 'breeze 1', 'smog 2'

])