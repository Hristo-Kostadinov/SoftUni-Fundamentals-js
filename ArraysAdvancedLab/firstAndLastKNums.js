function firstAndLastKNums (arr) {

    const k = arr[0];
    let copy = arr.slice(1);

    const firstResult = copy.slice(0,k);
    const secondResult = copy.slice(-k);

    console.log(firstResult.join(` `));
    console.log(secondResult.join(` `));
}
firstAndLastKNums([2, 7, 8, 9])