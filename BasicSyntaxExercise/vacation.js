function vacation(groupSize, groupType, dayOfWeek) {
    let pricePerPerson = 0;

    if (groupType === "Students") {
        if (dayOfWeek === "Friday") {
            pricePerPerson = 8.45;
        } else if (dayOfWeek === "Saturday") {
            pricePerPerson = 9.80;
        } else if (dayOfWeek === "Sunday") {
            pricePerPerson = 10.46;
        }
    } else if (groupType === "Business") {
        if (dayOfWeek === "Friday") {
            pricePerPerson = 10.90;
        } else if (dayOfWeek === "Saturday") {
            pricePerPerson = 15.60;
        } else if (dayOfWeek === "Sunday") {
            pricePerPerson = 16;
        }
    } else if (groupType === "Regular") {
        if (dayOfWeek === "Friday") {
            pricePerPerson = 15;
        } else if (dayOfWeek === "Saturday") {
            pricePerPerson = 20;
        } else if (dayOfWeek === "Sunday") {
            pricePerPerson = 22.50;
        }
    }

    let totalPrice = groupSize * pricePerPerson;

    if (groupType === "Students" && groupSize >= 30) {
        totalPrice *= 0.85;
    } else if (groupType === "Business" && groupSize >= 100) {
        totalPrice -= Math.floor(groupSize / 10) * pricePerPerson;
    } else if (groupType === "Regular" && groupSize >= 10 && groupSize <= 20) {
        totalPrice *= 0.95;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);

}
vacation(30,

    "Students",
    
    "Sunday")