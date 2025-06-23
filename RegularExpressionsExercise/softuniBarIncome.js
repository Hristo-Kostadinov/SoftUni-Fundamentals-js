function softuniBarIncome(arr) {
    let regex = /%(?<customer>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.]*?(?<price>\d+\.?\d+)\$/;

    let total = 0;
    let line = arr.shift();

    while (line !== 'end of shift') {
        let isValid = line.match(regex);

        if (!isValid) {
            line = arr.shift();
            continue;
        }

        let currentTotal = Number(isValid.groups.count) * Number(isValid.groups.price);
        total += currentTotal;

        console.log(`${isValid.groups.customer}: ${isValid.groups.product} - ${currentTotal.toFixed(2)}`);
        line = arr.shift(); 
    }

    console.log(`Total income: ${total.toFixed(2)}`);
}