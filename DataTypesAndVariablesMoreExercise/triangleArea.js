function triangleArea (side1, side2, side3) {
    let s = 1/2 *  (side1 + side2 + side3);
    let area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));
    console.log(area);
}
triangleArea(2,3.5,4)