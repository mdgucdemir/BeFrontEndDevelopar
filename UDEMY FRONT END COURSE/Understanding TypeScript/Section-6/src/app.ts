

// // --- Intersection Types ---

type Admin = {
    name: string;
    privileges: string[];
}

type Employee = {
    name: string;
    date: Date;
}

type ElevatedEmployee = Admin & Employee;

const employee1: ElevatedEmployee = {
    name: 'Mehmet deniz',
    privileges: ['admin','to many'],
    date: new Date()
}

console.log(employee1);