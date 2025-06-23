function matchFullName (text) {
    const regExp = /\b[A-Z][a-z]+ [A-Z][a-z]+/g;
    const result = text.match(regExp);
    console.log(result.join(" "));

}