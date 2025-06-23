function orbit(input) {
    const [n, m, x, y] = input;
    
    const matrix = [];
    for (let i = 0; i < n; i++) {
        const row = [];
        for (let j = 0; j < m; j++) {
            row.push(0);
        }
        matrix.push(row);
    }
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            
            matrix[i][j] = Math.max(Math.abs(i - x), Math.abs(j - y)) + 1;
        }
    }

    
    for (let i = 0; i < n; i++) {
        console.log(matrix[i].join(' '));
    }
}
orbit([5, 5, 2, 2])