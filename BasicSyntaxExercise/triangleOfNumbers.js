function triangleOfNumbers(n) {
    for (let i = 1; i <= n; i++) { 
        let line = '';
        for (let j = 0; j < i; j++) {
            line += i + ' ';
        }
        console.log(line.trim());
    }
}
triangleOfNumbers(56);  