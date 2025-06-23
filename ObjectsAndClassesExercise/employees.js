function employees (arr) {

    for (const employeeName of arr) {
        const personalNumber = employeeName.length;
        console.log(`Name: ${employeeName} -- Personal Number: ${personalNumber}`)
    }

}
employees([

    'Silas Butler',
    
    'Adnaan Buckley',
    
    'Juan Peterson',
    
    'Brendan Villarreal'
    
    ])