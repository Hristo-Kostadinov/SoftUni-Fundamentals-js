function printNthElement (arr) {

    let n = Number(arr.pop());
    let array = [];

    for (let i = 0; i < arr.length; i += n) {
        array.push(arr[i]);
    }

    console.log(array.join(` `));

}
printNthElement(['5', '20', '31', '4', '20', '2'])