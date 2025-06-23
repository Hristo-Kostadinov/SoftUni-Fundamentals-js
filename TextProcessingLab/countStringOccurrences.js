function countStringOccurrences (sentence, word) {
    let count = 0;
    const wordsArray = sentence.split(' ');
    for (const w of wordsArray) {
        if (w === word) {
            count += 1;
        }
    }

    console.log(count);
}
countStringOccurrences('This is a word and it also is a sentence', 'is')