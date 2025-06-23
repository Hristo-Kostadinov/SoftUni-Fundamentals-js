function rotateArray(arr) {
    let totalRotations = Number(arr.pop());
    totalRotations = totalRotations % arr.length;

    for (let curRotation = 1; curRotation <= totalRotations; curRotation++) {
        let element = arr.pop();
        arr.unshift(element);
    }
    console.log(arr.join(' '));
}
rotateArray(['1', '2', '3', '4', '2'])