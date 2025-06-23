function companyUsers (arr) {
    const companyEmployees = {};

    for (const employeeData of arr) {
        const [company, empolyeeId] = employeeData.split(` -> `);

        if (company in companyEmployees) {
            if (!companyEmployees[company].includes(empolyeeId)) {
                companyEmployees[company].push(empolyeeId);
            }
        } else {
            companyEmployees[company] = [empolyeeId];
        }
    }
    const companyEntries = Object.entries(companyEmployees);
    companyEntries.sort((a, b) => a[0].localeCompare(b[0]));

    for (const [name, employeeIdArr] of companyEntries) {
        console.log(name)

        for (const employeeId of employeeIdArr) {
            console.log(`-- ${employeeId}`);
        }
    }

}
companyUsers
(['SoftUni -> AA12345', 
    'SoftUni -> BB12345', 
    'Microsoft -> CC12345', 
    'HP -> BB12345' 
])