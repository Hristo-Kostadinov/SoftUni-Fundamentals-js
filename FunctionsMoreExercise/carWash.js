function carWash (arr){

    let amountClean = 0;

    for (let i = 0; i < arr.length; i++) {

        switch (arr[i]) {
            case `soap`:
                amountClean += 10;
                break;
            case `water`:
                amountClean += amountClean / 5;
                break;
            case `vacuum cleaner`:
                amountClean += amountClean / 4;
                break;
            case `mud`:
                amountClean -= amountClean / 10;
                break;
        }
    }
        
    console.log(`The car is ${amountClean.toFixed(2)}% clean.`);

}
carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap','water'])