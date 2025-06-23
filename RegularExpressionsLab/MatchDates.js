function matchDates(input) {

    let datePattern = /\b(\d{2})([-\/.])([A-Z][a-z]{2})\2(\d{4})\b/g;
    
    let text = input[0];
    let match;

    let dates = [];

    while ((match = datePattern.exec(text)) !== null) {
        let day = match[1];
        let separator = match[2];
        let month = match[3];
        let year = match[4];

        dates.push(`Day: ${day}, Month: ${month}, Year: ${year}`);
    }

    dates.forEach(date => console.log(date));
}