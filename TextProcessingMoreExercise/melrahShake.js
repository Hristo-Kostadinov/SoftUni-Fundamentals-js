function melrahShake(input) {

    let text = input.shift();
    let pattern = input.shift();

    while (pattern.length > 0 && text.includes(pattern)) {
        
        let firstOccurrence = text.indexOf(pattern);
        let lastOccurrence = text.lastIndexOf(pattern);

        if (firstOccurrence !== -1 && lastOccurrence !== -1 && firstOccurrence !== lastOccurrence) {

            text = text.slice(0, firstOccurrence) + text.slice(firstOccurrence + pattern.length); 
            lastOccurrence = text.lastIndexOf(pattern);
            
            text = text.slice(0, lastOccurrence) + text.slice(lastOccurrence + pattern.length);
            
            console.log("Shaked it.");

            let middleIndex = Math.floor(pattern.length / 2);
            pattern = pattern.slice(0, middleIndex) + pattern.slice(middleIndex + 1);
        } else {

            break;
        }
    }

    console.log("No shake.");
    console.log(text);
}
melrahShake(['astalavista baby',

    'sta'])