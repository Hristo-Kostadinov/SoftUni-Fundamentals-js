function deserializeString(input) {

    let resultArray = [];

    for (let i = 0; i < input.length; i++) {
        if (input[i] === 'end') {
            continue;
        }

        let splitLine = input[i].split(':');
        let character = splitLine[0];
        let positions = splitLine[1].split('/');

        for (const pos of positions) {
            resultArray[parseInt(pos)] = character;
        }    
    }

    let resultString = resultArray.join('');
    console.log(resultString);
}
deserializeString
([
    'a:0/2/4/6',

    'b:1/3/5',
    
    'end'
])