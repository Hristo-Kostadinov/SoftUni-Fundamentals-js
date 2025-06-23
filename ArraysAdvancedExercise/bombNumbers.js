function bombNumbers(arr, elements) {
    const bombNum = elements[0];
    const explosionSize = elements[1];

    let index = arr.indexOf(bombNum);

    while (index !== -1) {
        let start = Math.max(index - explosionSize, 0);
        let end = Math.min(index + explosionSize + 1, arr.length);
        
        arr.splice(start, end - start);
        
        index = arr.indexOf(bombNum);
    }

    console.log(arr.reduce((acc, curr) => acc + curr, 0));
}
    bombNumbers([1, 2, 2, 4, 2, 2,2, 9], [4, 2])