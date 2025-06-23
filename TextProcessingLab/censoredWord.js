function censoredWord(text, word) {
    while (text.includes(word)) {
      text = text.replace(word, "*".repeat(word.length));
    }
    console.log(text);
}
censoredWord('A small sentence with some words', 'small')

// function censoredWord (text, word) {

//     const censorship = '*'.repeat(word.length);

//     while (text.includes(word)) {
//         text = text.replace(word, censorship);
//     }

//     console.log(text);
// }
