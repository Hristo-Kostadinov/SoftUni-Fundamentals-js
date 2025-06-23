function race (arr) {
    let names = arr.shift().split(', ');
    let results = {};
    names.forEach(name => results[name] = 0);

    let command = arr.shift();
    let letterPattern = /[A-Za-z]/g;
    let digitPattern = /\d/g;

    while (command !== 'end of race') {
        let letterMatch = command.match(letterPattern);
        let name = letterMatch.join('');

        let digitMatch = command.match(digitPattern);
        let distance = digitMatch.map(Number).reduce((acc, val) => acc + val);

        if (name in results) {
            results[name] += distance;
        }
        
        command = arr.shift()
    }

    let sortedRacers = Object.entries(results).sort((a, b) => b[1] - a[1]);
    
    console.log(`1st place: ${sortedRacers[0][0]}`);
    console.log(`2nd place: ${sortedRacers[1][0]}`);
    console.log(`3rd place: ${sortedRacers[2][0]}`);
}