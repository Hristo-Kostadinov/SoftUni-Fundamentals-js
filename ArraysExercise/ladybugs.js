function ladyBugs(arr) {
    let fieldSize = arr[0];
    let ladybugIdxs = arr[1].split(' ').map(Number);
    let field = new Array(fieldSize).fill(0);

    for (let idx of ladybugIdxs) {
        if (idx >= 0 && idx < fieldSize) {
            field[idx] = 1;
        }
    }

    for (let j = 2; j < arr.length; j++) {
        let [ladybugIdx, direction, flyLength] = arr[j].split(' ');
        ladybugIdx = Number(ladybugIdx);
        flyLength = Number(flyLength);

        if (field[ladybugIdx] !== 1) {
            continue;
        }

        field[ladybugIdx] = 0;
        let newIdx = ladybugIdx;

        while (true) {
            if (direction === 'left') {
                newIdx -= flyLength;
            } else if (direction === 'right') {
                newIdx += flyLength;
            }

            if (newIdx < 0 || newIdx >= fieldSize) {
                break;
            }

            if (field[newIdx] === 0) {
                field[newIdx] = 1;
                break;
            }
        }
    }

    console.log(field.join(' '));
}
ladyBugs
([ 
    3, 
    '0 1',
    '0 right 1',
    '2 right 1' 
])