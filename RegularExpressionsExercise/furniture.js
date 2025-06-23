function furniture (input)  {

    let pattern = />>(?<name>[A-Z][A-Za-z]+)<<(?<price>\d+\.?\d+)!(?<quantity>\d+)/;
    let totalPrice = 0;
    let command = input.shift();
    let items = [];

    while(command !== 'Purchase') {

        let match = command.match(pattern);

        if (match) {
            let {name, price, quantity} = match.groups;
            items.push(name);
            let furniturePrice = Number(price) * Number(quantity);
            totalPrice += furniturePrice;
        }
        command = input.shift();
    }
    console.log('Bought furniture:');
    items.forEach(item => console.log(item));
    console.log(`Total money spend: ${totalPrice.toFixed(2)}`);


}