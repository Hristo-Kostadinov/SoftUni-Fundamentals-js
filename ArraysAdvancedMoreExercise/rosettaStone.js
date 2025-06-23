function rosettaStone(input) {
    let n = Number(input.shift());
    let keyMatrix = [];
    
    for (let i = 0; i < n; i++) {
        keyMatrix.push(input.shift().split(' ').map(Number));
    }
    
    let messageMatrix = [];
    while (input.length > 0) {
        messageMatrix.push(input.shift().split(' ').map(Number));
    }
    
    let rows = messageMatrix.length;
    let cols = messageMatrix[0].length;
    
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            let keyValue = keyMatrix[row % n][col % keyMatrix[0].length];
            messageMatrix[row][col] = (messageMatrix[row][col] + keyValue) % 27;
            
            if (messageMatrix[row][col] === 0) {
                messageMatrix[row][col] = ' ';
            } else {
                messageMatrix[row][col] = String.fromCharCode(messageMatrix[row][col] + 64);
            }
        }
    }
    
    let decodedMessage = messageMatrix.map(row => row.join('')).join('');
    console.log(decodedMessage);
}
rosettaStone
([
    '2',
    '59 36',
    '82 52',
    '4 18 25 19 8',
    '4 2 8 2 18',
    '23 14 22 0 22',
    '2 17 13 19 20',
    '0 9 0 22 22'
])