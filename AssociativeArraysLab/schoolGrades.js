function schoolGrades (arr) {
    let students = {};

    arr.forEach(entry => {
        let parts = entry.split(` `);
        let name = parts.shift();
        let grades = parts.map(Number);

        if (students[name]) {

            students[name] = students[name].concat(grades);
        } else {
            
            students[name] = grades;
        }
    });
    
    let sortedStudents = Object.keys(students).sort((a, b) => a.localeCompare(b));

    sortedStudents.forEach(student => {
        let grades = students[student];
        let average = grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
        console.log(`${student}: ${average.toFixed(2)}`);
    });

}
schoolGrades
([
    'Lilly 4 6 6 5',

    'Tim 5 6',
    
    'Tammy 2 4 3',
    
    'Tim 6 6'
])