
// // --- Working with Tuples ---

const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string]; // this is the [ tuple ] type 
} = {
    name: 'Mehmet Deniz',
    age: 33,
    hobbies: ['sports', 'cooking'],
    role: [2 , 'author']
}


// person.role[1] = 10;
// person.role.push('nice');  // //push sould be acceptable in typescript but
// person.role = [ 0, 'admin', 'user'] // // you don't do this ==> person.role = [0, 'admin', 'user'] cause you [define 2 elements] in (role) class