function repeatStrings (str, count) {

    let result = "";
    for (let i = 0; i < count; i ++) {
        result += str;
    }
    console.log(result);
}
repeatStrings("abc", 3)