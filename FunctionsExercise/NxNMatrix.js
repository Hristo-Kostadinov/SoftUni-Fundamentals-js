function NxNMatrix (n) {

    for (let i = 0; i < n; i++) {
        let row = '';
        for (let j = 0; j < n; j++) {
            row += n + ' ';
        }
        console.log(row);
    }
}
NxNMatrix(2)