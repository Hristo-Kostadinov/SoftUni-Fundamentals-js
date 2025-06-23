function multiplicationTable (input) {

    let number = Number(input);
    let finalSum = 0;
    for (let Num = 1; Num <= 10; Num++) {
        let finalSum = number * Num;
        console.log(`${number} X ${Num} = ${finalSum}`); 
        finalSum++;   
    }

}
multiplicationTable(5)