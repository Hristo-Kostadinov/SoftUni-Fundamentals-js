function spiralMatrix(n, m) {
    // Initialize the matrix with zeros using nested loops
    let matrix = [];

    for (let i = 0; i < n; i++) {
        let row = [];
        for (let j = 0; j < m; j++) {
            row.push(0);
        }
        matrix.push(row);
    }

    let num = 1;
    let top = 0, bottom = n - 1, left = 0, right = m - 1;

    while (num <= n * m) {
        // Fill the top row from left to right
        for (let i = left; i <= right && num <= n * m; i++) {
            matrix[top][i] = num++;
        }
        top++;

        // Fill the right column from top to bottom
        for (let i = top; i <= bottom && num <= n * m; i++) {
            matrix[i][right] = num++;
        }
        right--;

        // Fill the bottom row from right to left
        for (let i = right; i >= left && num <= n * m; i--) {
            matrix[bottom][i] = num++;
        }
        bottom--;

        // Fill the left column from bottom to top
        for (let i = bottom; i >= top && num <= n * m; i--) {
            matrix[i][left] = num++;
        }
        left++;
    }

    for (let row of matrix) {
        console.log(row.join(' '));
    }
}


spiralMatrix(5, 5)