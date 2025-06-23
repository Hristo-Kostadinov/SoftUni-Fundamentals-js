function specialNumbers(num) {

    for (let i = 1; i <= num; i++) {
        let stringifiedNum = i + '';
        let sum = 0;
        let isSpecial = false;

        for (let s = 0; s < stringifiedNum.length; s++) {
            sum += Number(stringifiedNum[s]);
        }
        
        if (sum === 5 || sum === 7 || sum === 11) {
            isSpecial = true 
        }

        let isSpecialStr = isSpecial ? 'True' : 'False';
        
        console.log(`${i} -> ${isSpecialStr}`);
    }
}
specialNumbers(15)