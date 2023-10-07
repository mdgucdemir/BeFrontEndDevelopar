// // -- Arrays ---

const person = {
    name: 'Mehmet Deniz',
    age: 33,
    hobbies: ['sports', 'cooking']
}


let favoriteActivities: string[]; // this is string array
favoriteActivities = ['cooking']

let mixedArray: any[]; // this is mixed array 
mixedArray = ['sdfsf',324,true,false]

console.log(person.name);

for(const hobby of person.hobbies) {
    console.log(hobby);
    // console.log(hobby.toUpperCase);
}