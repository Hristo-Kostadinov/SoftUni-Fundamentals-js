function orders (product, amount) {

    let price = 0;

    switch (product) {
        case `water`:
            price += 1 * amount;
            break;
        case `coke`:
            price += 1.40 * amount;
            break;
        case `coffee`:
            price += 1.50 * amount;
            break;
        case `snacks`:
            price += 2.00 * amount;
            break;
    }
    console.log(price.toFixed(2));
}
orders(`water`, 5)