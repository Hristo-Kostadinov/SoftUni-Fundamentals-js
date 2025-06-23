function flightSchedule(arr) {
    let flights = arr[0];
    let statusUpdates = arr[1];
    let statusToCheck = arr[2];

    let flightStatusList = [];

    for (let flight of flights) {
        let [flightNumber, destination] = flight.split(' ');
        flightStatusList.push({
            flightNumber,
            destination,
            status: 'Ready to fly'
        });
    }

    for (let i = 0; i < statusUpdates.length; i++) {
        let [flightNumber, newStatus] = statusUpdates[i].split(' ');
          
        for (let j = 0; j < flightStatusList.length; j++) {
            if (flightStatusList[j].flightNumber === flightNumber) {
                flightStatusList[j].status = newStatus;
                break;
            }
        }
    }

    let filteredFlights = flightStatusList.filter(flight => flight.status === statusToCheck[0]);

    for (let flight of filteredFlights) {
        console.log(`{ Destination: '${flight.destination}', Status: '${flight.status}' }`);
    }
}
flightSchedule
([
    [
        'WN269 Delaware',

        'FL2269 Oregon',
    
        'WN498 Las Vegas',
    
        'WN3145 Ohio',
    
        'WN612 Alabama',
    
        'WN4010 New York',
    
        'WN1173 California',
    
        'DL2120 Texas',
    
        'KL5744 Illinois',
    
        'WN678 Pennsylvania'
    ],
    
    [
        'DL2120 Cancelled',
    
        'WN612 Cancelled',
    
        'WN1173 Cancelled',
    
        'SK430 Cancelled'
    ],
    
    ['Cancelled']

])