function phoneBook (input) {

    const phoneName = {};
    for (const personDetails of input) {
        const datailsArray = personDetails.split(` `);
        const name = datailsArray[0];
        const number = datailsArray[1];
        phoneName[name] = number;
    }
    
    for (const key in phoneName) {
        console.log(`${key} -> ${phoneName[key]}`);
    }

}
phoneBook(['Tim 0834212554',

    'Peter 0877547887',
    
    'Bill 0896543112',
    
    'Tim 0876566344'])