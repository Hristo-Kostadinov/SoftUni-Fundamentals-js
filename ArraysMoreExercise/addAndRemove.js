function addAndRemove(arr) {
    let result = [];
    let currentNumber = 1;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'add') {
            result.push(currentNumber);
        } else if (arr[i] === 'remove') {
            result.pop();
        }
        currentNumber++;
    }

    if (result.length === 0) {
        console.log("Empty");
    } else {
        console.log(result.join(' '));
    }
}
addAndRemove(['add', 'add', 'remove', 'add', 'add'])