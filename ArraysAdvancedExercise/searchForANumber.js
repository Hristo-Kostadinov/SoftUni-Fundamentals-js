function searchForANumber (arr, elements) {

    const amountToSearch = elements[0];
    const amountToDelete = elements[1];
    const elementToSearch = elements[2];
    let count = 0;
    let newArr = [];

    for (let i = 0; i < amountToSearch; i++) {
        newArr.push(arr[i]);
    }
    
    for (let j = 0; j < amountToDelete; j++) {
        newArr.shift();
    }

    for (let k = 0; k < newArr.length; k++) {
        if (newArr[k] === elementToSearch) {
            count += 1;
        }
    }

    console.log(`Number ${elementToSearch} occurs ${count} times.`);

}
searchForANumber([5, 2, 3, 4, 1, 6],

    [5, 2, 3])