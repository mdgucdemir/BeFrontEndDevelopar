
// // -- Creating a First Class --

// class Department {
//     name: string;
//     employees: string[] = [];

//     constructor(n:string) {
//         this.name = n;
//     }

//     // describe() {
//     //     console.log('Department is: ' + this.name)
//     // }

//     describe(this: Department) {
//         console.log('Department is: ' + this.name)
//     }

//     addEmployee(employee: string) {
//         this.employees.push(employee);
//     }

//     printEmployeeInformation() {
//         console.log(this.employees.length);
//         console.log(this.employees);
//     }
// }

// const accounting = new Department('Accounting');
// // console.log(accounting);
// accounting.describe();

// const accountingCopy = { describe: accounting.describe };
// const accountingCopy = { name: 'Barzo', describe: accounting.describe };
// accountingCopy.describe();




// // -- "private" and "public" Access Modifiers --

// class Department {
//     public name: string;
//     private employees: string[] = [];

//     constructor(n:string) {
//         this.name = n;
//     }

//     // describe() {
//     //     console.log('Department is: ' + this.name)
//     // }

//     describe(this: Department) {
//         console.log('Department is: ' + this.name)
//     }

//     addEmployee(employee: string) {
//         this.employees.push(employee);
//     }

//     printEmployeeInformation() {
//         console.log(this.employees.length);
//         console.log(this.employees);
//     }
// }

// const accounting = new Department('Accounting');
// accounting.addEmployee('Max');
// accounting.addEmployee('Caroline');

// // accounting.employees[2] = 'Chestnut';

// accounting.describe();
// accounting.printEmployeeInformation();




// // -- Shorthand Initialization --

// class Department {
    
//     private employees: string[] = [];

//     constructor(private readonly id: string ,public name:string) {
//         // this.name = n;
//     }

//     describe(this: Department) {
//         console.log(`Department id: ${this.id} and Department Name: ${this.name}`)
//     }
//     addEmployee(employee: string) {
//         this.employees.push(employee);
//         // this.id = 'id_2'; // // can not assign to id, because id is readonly.
//     }
//     printEmployeeInformation() {
//         console.log(this.employees.length);
//         console.log(this.employees);
//     }
// }

// const accounting = new Department('id_1','Accounting');
// accounting.addEmployee('Max');
// accounting.addEmployee('Caroline');

// accounting.describe();
// accounting.printEmployeeInformation();



// // -- Inheritance --

class Department {
    // public name: string
    // private employees: string[] = [];
    protected employees: string[] = [];

    constructor(private readonly id: string ,public name:string) {
        // this.name = n;
    }

    describe(this: Department) {
        console.log(`Department id: ${this.id} and Department Name: ${this.name}`)
    }
    addEmployee(employee: string) {
        this.employees.push(employee);
        // this.id = 'id_2'; // // can not assign to id, because id is readonly.
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ITDepartment extends Department {
    admins: string[];
    constructor(id: string, adminS: string[]) {
        super(id,'IT');
        this.admins = adminS;
    }  

}

class AccountingDepartment extends Department {
    private lastReport: string;

    get mostRecentReport() { // get method for read
        if(this.lastReport) {

            return this.lastReport;   // getter method must return something.
        }
        throw new Error('No report found.');
    }

    set mostRecentReport(value: string) {
        // setter method needs take an argument
        if(!value) {
            throw new Error('Please pass in a valid value!');
        }
        this.addReport(value);
    }

    constructor(id: string, private reportS: string[]) {
        super(id,'Accounting Department');
        this.lastReport = reportS[0];
    }

    addReport(text: string) {
        this.reportS.push(text);
        this.lastReport = text;
    }

    showReports() {
        console.log(this.reportS);
    }

    addEmployee(employee: string): void {
        if(employee === 'Max') {
            return;
        }
        this.employees.push(employee);
    }

}
const department = new Department('id_1','Main Department');
const it = new ITDepartment('id_2',['Caroline']);
it.addEmployee('Max');
it.addEmployee('Caroline');

it.describe();
it.name = 'IT Department';
it.printEmployeeInformation();
console.log(it);

const accounting = new AccountingDepartment('id_3' , []);

accounting.mostRecentReport = 'year end report'; // setter method trigger like this. You don't need any parenthesis [accounting.mostRecentReport() = '' || you can't use like this.]
accounting.addReport('Something went wrong...');
console.log(accounting.mostRecentReport); // for getter method you don't need any parenthesis.

console.log(accounting);
accounting.showReports();

accounting.addEmployee('Max'); // Max not added, cause we declarate a condition
accounting.addEmployee('Hun');
accounting.printEmployeeInformation();