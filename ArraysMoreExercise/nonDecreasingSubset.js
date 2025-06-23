function nonDecreasingSubset(arr) {
    let nextNum = arr[0];
    let newArr = arr.filter((num, index) => {
        if (index === 0 || num >= nextNum) {
            nextNum = num;
            return true;
        }
        return false;
    });

    console.log(newArr.join(' '));
}
nonDecreasingSubset([ 1, 3, 8, 4, 10, 12, 3, 2, 24])

// function nonDecreasingSubset (arr) {
//     let newArr = [];
//     let nextNum = arr[0];

//     newArr.push(nextNum)

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > nextNum) {
//             newArr.push(arr[i]);
//             nextNum = arr[i];
//         }
//     }
//     console.log(newArr.join(` `));
// }
// nonDecreasingSubset([ 1, 3, 8, 4, 10, 12, 3, 2, 24])