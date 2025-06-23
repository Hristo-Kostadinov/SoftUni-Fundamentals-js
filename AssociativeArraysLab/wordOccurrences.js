function wordOccurrences(arr) {
    let map = new Map();

    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
            map.set(arr[i], map.get(arr[i]) + 1);
        } else {
            map.set(arr[i], 1);
        }
    }

    let sorted = Array.from(map.entries()).sort((a, b) => b[1] - a[1]);

    for (let [word, count] of sorted) {
        console.log(`${word} -> ${count} times`);
    }
}
wordOccurrences
([
    "Here",
    "is",
    "the",
    "first", 
    "sentence",
    "Here",
    "is",
    "another",
    "sentence", 
    "And",
    "finally", 
    "the", 
    "third", 
    "sentence"
])