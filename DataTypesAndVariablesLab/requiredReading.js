function requiredReading (pages, pagesPerHour, days) {

    let sumPages = pages / pagesPerHour;
    let pagesPerDay = sumPages / days;
    console.log(pagesPerDay);

}
requiredReading(212,20,2)