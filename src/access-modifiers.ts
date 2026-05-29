// Variable scope and access modifiers in TypeScript

class StudentDetails {

    public name: string; //instance variable, called via instance of a class
    private fees: number; 
    protected grade: string;
    static schoolName: string; // static variable, belong to the class itself

    constructor(name: string, fees: number, grade: string, schoolName: string) {
        this.name = name;
        this.fees = fees;
        this.grade = grade;
        StudentDetails.schoolName = schoolName;

        console.log(this.grade); //Protected variable can be accessed only within the class & its subclasses only
    }

    getStudentDetails(): string{ 
        return `${this.name}'s school fees are ${this.fees} , school name is ${StudentDetails.schoolName} and his grade is ${this.grade}`;
       }

}

const sd = new StudentDetails("Harshal", 6000, "18th", "Creative High School");
console.log(sd.getStudentDetails());

console.log(sd.name); // Accessing public variable via instance of a class
console.log(StudentDetails.schoolName); // Accessing static variable via class name (recommended)
