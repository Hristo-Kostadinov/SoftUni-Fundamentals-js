function addressBook(input) {
    const result = {};

    for (const row of input) {
        const [name, address] = row.split(':');
        result[name] = address;
    }

    const entries = Object.entries(result);
    entries.sort(([keyA], [keyB]) => {
        return keyA.localeCompare(keyB);
    });

    for (const [name, address] of entries) {
       console.log(`${name} -> ${address}`);
    }
}
addressBook(['Tim:Doe Crossing',

    'Bill:Nelson Place',
    
    'Peter:Carlyle Ave',
    
    'Bill:Ornery Rd'])