// // -- Arrays ---
var person = {
    name: 'Mehmet Deniz',
    age: 33,
    hobbies: ['sports', 'cooking']
};
var favoriteActivities; // this is string array
favoriteActivities = ['cooking'];
var mixedArray; // this is mixed array 
mixedArray = ['sdfsf', 324, true, false];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
    // console.log(hobby.toUpperCase);
}
