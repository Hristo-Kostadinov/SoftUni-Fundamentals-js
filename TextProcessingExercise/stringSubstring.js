function stringSubstring (word, text) {
    const lowerCaseText = text.toLowerCase();
    const textWords = lowerCaseText.split(` `);

    if (textWords.includes(word)) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }

}
stringSubstring('javascript','JavaScript is the best programming language')