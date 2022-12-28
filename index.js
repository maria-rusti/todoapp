const obj = {
    students: ["Maria", "Miu", "Marius", "Claudiu", "Denisa", "Florin", "Paula", "Petruta"],
    passedTheExam: [true, true, true, false, false, false, false, false],
    tasks: ["Do some silence", "Open the door", "Clean the table", "Review the code", "Take some notes", "Clean the window", "Do some research", "Take the elevator"],
    exam: [9, 9, 7, 8, 4, 3, 2, 4],
};

const example = [
    {
        students: "Adrian",
        passedTheExam: true,
        tasks: "Make money",
        exam: 10,
    },
];

// // Object.entries(obj) - returneaza o lista de perechi - de forma [key, value]
// // Object.keys(obj) - returneaza lista de keys cu typeof = string
// // Object.values(obj) - returneaza lista cu valori (values) aferente cheilor (keys)
// class Student {
//     constructor(student, passedTheExam, task, exam) {
//         this.student = student;
//         this.passedTheExam = passedTheExam;
//         this.task = task;
//         this.exam = exam;
//     };
//     // calculate() {
//     //     return this.exam/2
//     // }
// };

const size = obj.students.length;
// let arr = [];
// for(let i = 0; i < size; i++) {
//     const newStudent = new Student(obj.students[i], obj.passedTheExam[i], obj.tasks[i], obj.exam[i])
//     arr.push(newStudent);
// }
// console.log(arr);
for(let i=0;i<size;i++){
    console.log(i);
}