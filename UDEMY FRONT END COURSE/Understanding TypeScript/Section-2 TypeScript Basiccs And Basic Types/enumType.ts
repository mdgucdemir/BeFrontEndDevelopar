
// // Working with Enums

enum Role {ADMIN = 'ADMIN', READ_ONLY = '200', AUTHOR = 'AUTHOR'} // // This is ENUM

const person = {
    name: 'Mehmet Deniz',
    age: 33,
    hobbies: ['sports', 'cooking'],
    role: Role.ADMIN
}

if (person.role === Role.ADMIN) {
    console.log('this is ');
}