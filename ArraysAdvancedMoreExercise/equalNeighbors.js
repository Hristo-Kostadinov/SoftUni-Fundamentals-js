function equalNeighbors (arr) {
    let repeatAmount = 0;

    for (let i = 0; i < arr.length; i++) {  
        for (let j = 0; j < arr[i].length; j++) {

            if (j > 0 && arr[i][j] === arr[i][j - 1]) {
                repeatAmount += 1;
            }

            if ( i > 0 && arr[i][j] === arr[i - 1][j]) {
                repeatAmount += 1;
            }
        } 
    }

    
    console.log(repeatAmount);
}
equalNeighbors
([
['test', 'yo', 'yo', 'ho'],

['well', 'done', 'no', '6'],

['not', 'done', 'yet', '5']
])