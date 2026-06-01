class Student {
    public _fees: number = 0;

    get fees(): number {
        console.log("Getting fees");
        return this._fees;
    }

    set fees(value: number) {
        if (value < 0) {
            console.log(`Fees are not valid. Rejected amount: ${value}`);
        }
        else {
            this._fees = value;
            console.log(`Fees are valid. Accepted amount: ${value}`); 
        }
    }
}

let stu = new Student();

stu.fees = 9000;
console.log(stu.fees);