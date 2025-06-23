function treasureFinder(input) {
    let keySequence = input.shift().split(' ').map(Number);
    let index = 0;
    let result = [];

    while (input[index] !== 'find') {
        let message = input[index];
        let decodedMessage = '';
        
        for (let i = 0; i < message.length; i++) {
            let key = keySequence[i % keySequence.length];
            decodedMessage += String.fromCharCode(message.charCodeAt(i) - key);
        }

        let typeStart = decodedMessage.indexOf('&') + 1;
        let typeEnd = decodedMessage.indexOf('&', typeStart);
        let coordinatesStart = decodedMessage.indexOf('<') + 1;
        let coordinatesEnd = decodedMessage.indexOf('>', coordinatesStart);

        let type = decodedMessage.substring(typeStart, typeEnd);
        let coordinates = decodedMessage.substring(coordinatesStart, coordinatesEnd);

        result.push(`Found ${type} at ${coordinates}`);

        index++;
    }

    result.forEach(r => console.log(r));
}
treasureFinder
([
    "1 2 1 3",

    "ikegfp'jpne)bv=41P83X@",
    
    "ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA",
    
    "find"
])