function Student(name, grade) {
    this.name = name;
    this.grade = grade;
    this.study = function () {
        console.log(`${this.name} is studying.`);
    };
    this.getGrade = function () {
        return this.grade;
    };
}
const student1=new Student("Sridhar", "A");
const student2=new Student("Bhanu", "B");
const student3=new Student("Abhiii", "A+");
const studnet4=new Student("Mahii","S")
student1.study();
console.log(`${student1.name}'s grade is: ${student1.getGrade()}`);
student2.study();
console.log(`${student2.name}'s grade is: ${student2.getGrade()}`);
student3.study();
console.log(`${student3.name}'s grade is: ${student3.getGrade()}`);
studnet4.study();
console.log(`${studnet4.name}'s grade is: ${studnet4.getGrade()}`);