function schoolRegister (arr) {

    let studentList = [];
    let studentsByGrade = {};

    for (let i = 0; i < arr.length; i++) {
        let parts = arr[i].split(`, `);
        let studentName = parts[0].substring(`Student name:`.length);
        let studentGrade = parseInt(parts[1].substring(`Grade: `.length));
        let studentAvgScore = parts[2].substring(`Graduated with an average score: `.length);

        let student = {
            name: studentName,
            grade: studentGrade,
            score: parseFloat(studentAvgScore)
        };

        studentList.push(student);

    }

    for (let i = studentList.length - 1; i >= 0; i--) {
        if (studentList[i].score < 3) {
            studentList.splice(i, 1);
        } else {
            studentList[i].grade += 1;
        }
    }

    
    for (let j = 0; j < studentList.length; j++) {
        let grade = studentList[j].grade;
        if (!studentsByGrade[grade]) {
            studentsByGrade[grade] = []; 
        }
        studentsByGrade[grade].push(studentList[j]); 
    }
    
    let averageScores = {};

    Object.keys(studentsByGrade).forEach(grade => {
        let totalScore = studentsByGrade[grade].reduce((acc, student) => acc + student.score, 0);
        averageScores[grade] = (totalScore / studentsByGrade[grade].length).toFixed(2);
    });

    Object.keys(studentsByGrade).sort((a, b) => a - b).forEach(grade => {
        console.log(`${grade} Grade`);
        console.log(`List of students:${studentsByGrade[grade].map(student => student.name).join(',')}`);
        console.log(`Average annual score from last year: ${averageScores[grade]}`);
        console.log(``);
    });

}
schoolRegister
([

    "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
    
    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
    
    "Student name: George, Grade: 8, Graduated with an average score: 2.83",
    
    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
    
    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
    
    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
    
    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",

    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95", 

    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00", 

    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05", 

    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88", 

    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00" 
])