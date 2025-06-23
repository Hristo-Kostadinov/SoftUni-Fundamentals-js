function serializeString (arr) {
    let text = arr[0];
    let result = new Map();

    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (!result.has(char)) {
            result.set(char, []);
        }
        result.get(char).push(i);
    }

    for (let [char, positions] of result.entries()) {
        console.log(`${char}:${positions.join('/')}`);
    }

}
serializeString(["abababa"])