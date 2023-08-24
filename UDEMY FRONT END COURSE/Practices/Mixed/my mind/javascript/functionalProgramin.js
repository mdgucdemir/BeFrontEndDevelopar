
/*

------------------------------- Learn About Functional Programming -------------------------
Functional programming is a style of programming where solutions are simple, isolated functions, 
without any side effects outside of the function scope: [ INPUT -> PROCESS -> OUTPUT ]

Functional programming is about:

1- Isolated functions - there is no dependence on the state of the program, which includes global variables that are subject to change
2- Pure functions - the same input always gives the same output
3- Functions with limited side effects - any changes, or mutations, to the state of the program outside the function are carefully controlled

*/

///////////

// const prepareTea = () => 'greenTea';
// const getTea = (numOfCups) => {
//     const teaCups = [];
  
//     for(let cups = 1; cups <= numOfCups; cups += 1) {
//       const teaCup = prepareTea();
//       teaCups.push(teaCup);
//     }
//     return teaCups;
//   };
  
// const tea4TeamFCC = getTea(40);

///////////////////////////////////

// // The global variable
// const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// // Change code below this line
// function add(list, bookName) {
//   return [...list, bookName];  
//   // Change code above this line
// }

// // Change code below this line
// function remove(list, bookName) {  
//     return list.filter(book => book !== bookName);
//     // Change code above this line    
// }

// var newBookList = add(bookList, 'A Brief History of Time');
// var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
// var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

// console.log(bookList);

//////////////////////////////////


///////  map Method /////////////////

// // The global variable
// const watchList = [
//   {
//     "Title": "Inception",
//     "Year": "2010",
//     "Rated": "PG-13",
//     "Released": "16 Jul 2010",
//     "Runtime": "148 min",
//     "Genre": "Action, Adventure, Crime",
//     "Director": "Christopher Nolan",
//     "Writer": "Christopher Nolan",
//     "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
//     "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//     "Language": "English, Japanese, French",
//     "Country": "USA, UK",
//     "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//     "Metascore": "74",
//     "imdbRating": "8.8",
//     "imdbVotes": "1,446,708",
//     "imdbID": "tt1375666",
//     "Type": "movie",
//     "Response": "True"
//   },
//   {
//     "Title": "Interstellar",
//     "Year": "2014",
//     "Rated": "PG-13",
//     "Released": "07 Nov 2014",
//     "Runtime": "169 min",
//     "Genre": "Adventure, Drama, Sci-Fi",
//     "Director": "Christopher Nolan",
//     "Writer": "Jonathan Nolan, Christopher Nolan",
//     "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//     "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//     "Language": "English",
//     "Country": "USA, UK",
//     "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
//     "Metascore": "74",
//     "imdbRating": "8.6",
//     "imdbVotes": "910,366",
//     "imdbID": "tt0816692",
//     "Type": "movie",
//     "Response": "True"
//   },
//   {
//     "Title": "The Dark Knight",
//     "Year": "2008",
//     "Rated": "PG-13",
//     "Released": "18 Jul 2008",
//     "Runtime": "152 min",
//     "Genre": "Action, Adventure, Crime",
//     "Director": "Christopher Nolan",
//     "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//     "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//     "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//     "Language": "English, Mandarin",
//     "Country": "USA, UK",
//     "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
//     "Metascore": "82",
//     "imdbRating": "9.0",
//     "imdbVotes": "1,652,832",
//     "imdbID": "tt0468569",
//     "Type": "movie",
//     "Response": "True"
//   },
//   {
//     "Title": "Batman Begins",
//     "Year": "2005",
//     "Rated": "PG-13",
//     "Released": "15 Jun 2005",
//     "Runtime": "140 min",
//     "Genre": "Action, Adventure",
//     "Director": "Christopher Nolan",
//     "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//     "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//     "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//     "Language": "English, Urdu, Mandarin",
//     "Country": "USA, UK",
//     "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
//     "Metascore": "70",
//     "imdbRating": "8.3",
//     "imdbVotes": "972,584",
//     "imdbID": "tt0372784",
//     "Type": "movie",
//     "Response": "True"
//   },
//   {
//     "Title": "Avatar",
//     "Year": "2009",
//     "Rated": "PG-13",
//     "Released": "18 Dec 2009",
//     "Runtime": "162 min",
//     "Genre": "Action, Adventure, Fantasy",
//     "Director": "James Cameron",
//     "Writer": "James Cameron",
//     "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//     "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//     "Language": "English, Spanish",
//     "Country": "USA, UK",
//     "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
//     "Metascore": "83",
//     "imdbRating": "7.9",
//     "imdbVotes": "876,575",
//     "imdbID": "tt0499549",
//     "Type": "movie",
//     "Response": "True"
//   }
// ];

// // Only change code below this line

// const ratings = watchList.map(item => ({
//   title: item['Title'],
//   rating: item['imdbRating']
// }))
// // Only change code above this line

// console.log(JSON.stringify(ratings));

//////////////////////////////////


////////////////

// const users = [
//   { name: 'John', age: 34 },
//   { name: 'Amy', age: 20 },
//   { name: 'camperCat', age: 10 }
// ];

// const usersUnder30 = users.filter(user => user.age < 30);
// console.log(usersUnder30); 

////////////////////////

// // The global variable
// const watchList = [
//   {
//     "Title": "Inception",
//     "Year": "2010",
//     "Rated": "PG-13",
//     "Released": "16 Jul 2010",
//     "Runtime": "148 min",
//     "Genre": "Action, Adventure, Crime",
//     "Director": "Christopher Nolan",
//     "Writer": "Christopher Nolan",
//     "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
//     "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//     "Language": "English, Japanese, French",
//     "Country": "USA, UK",
//     "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//     "Metascore": "74",
//     "imdbRating": "8.8",
//     "imdbVotes": "1,446,708",
//     "imdbID": "tt1375666",
//     "Type": "movie",
//     "Response": "True"
//   },
//   {
//     "Title": "Interstellar",
//     "Year": "2014",
//     "Rated": "PG-13",
//     "Released": "07 Nov 2014",
//     "Runtime": "169 min",
//     "Genre": "Adventure, Drama, Sci-Fi",
//     "Director": "Christopher Nolan",
//     "Writer": "Jonathan Nolan, Christopher Nolan",
//     "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//     "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//     "Language": "English",
//     "Country": "USA, UK",
//     "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
//     "Metascore": "74",
//     "imdbRating": "8.6",
//     "imdbVotes": "910,366",
//     "imdbID": "tt0816692",
//     "Type": "movie",
//     "Response": "True"
//   },
//   {
//     "Title": "The Dark Knight",
//     "Year": "2008",
//     "Rated": "PG-13",
//     "Released": "18 Jul 2008",
//     "Runtime": "152 min",
//     "Genre": "Action, Adventure, Crime",
//     "Director": "Christopher Nolan",
//     "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//     "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//     "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//     "Language": "English, Mandarin",
//     "Country": "USA, UK",
//     "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
//     "Metascore": "82",
//     "imdbRating": "9.0",
//     "imdbVotes": "1,652,832",
//     "imdbID": "tt0468569",
//     "Type": "movie",
//     "Response": "True"
//   },
//   {
//     "Title": "Batman Begins",
//     "Year": "2005",
//     "Rated": "PG-13",
//     "Released": "15 Jun 2005",
//     "Runtime": "140 min",
//     "Genre": "Action, Adventure",
//     "Director": "Christopher Nolan",
//     "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//     "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//     "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//     "Language": "English, Urdu, Mandarin",
//     "Country": "USA, UK",
//     "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
//     "Metascore": "70",
//     "imdbRating": "8.3",
//     "imdbVotes": "972,584",
//     "imdbID": "tt0372784",
//     "Type": "movie",
//     "Response": "True"
//   },
//   {
//     "Title": "Avatar",
//     "Year": "2009",
//     "Rated": "PG-13",
//     "Released": "18 Dec 2009",
//     "Runtime": "162 min",
//     "Genre": "Action, Adventure, Fantasy",
//     "Director": "James Cameron",
//     "Writer": "James Cameron",
//     "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//     "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//     "Language": "English, Spanish",
//     "Country": "USA, UK",
//     "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
//     "Metascore": "83",
//     "imdbRating": "7.9",
//     "imdbVotes": "876,575",
//     "imdbID": "tt0499549",
//     "Type": "movie",
//     "Response": "True"
//   }
// ];

// // Only change code below this line

// const filteredList = watchList
// .filter(movie => movie.imdbRating >= 8.0)
// .map(movie => ({title: movie['Title'], rating: movie['imdbRating']}));

// // Only change code above this line

// console.log(filteredList);


/////////////////////////////////


// const users = [
//   { name: 'John', age: 34 },
//   { name: 'Amy', age: 20 },
//   { name: 'camperCat', age: 10 }
// ];

// const usersObj = users.reduce((obj, user) => {
//   obj[user.name] = user.age;
//   return obj;
// }, {});
// console.log(usersObj);

//////////////////////////

//////////// sort()  /////////
/// .sort((a,b) => a - b) sayilari artan bir sekilde siralar
/// .sort((a,b) => b - a) sayilari azalan bir sekilde siralar

 

// 
// const arr = [3,2,1,4,5]
// arr.sort();

// console.log(arr); // cikti = [1,2,3,4,5]  sayilari artan bir sekilde siraladi.

/////

 
// const arr = [10,2,21,7]
// arr.sort()
// console.log(arr) // cikti = [10,2,21,7]  sayilari artan bir sekilde siralamadi.

/// yukarida ki gibi bir ornekte sayilari dogru siralamak icin; bir karsilastirma function i kullanmak gerekir
/// .sort((a,b) => a - b) karsilastirma function

// const arr = [10,2,21,7];
// arr.sort((a,b) => a - b);
// console.log(arr);  // cikti = [2,7,10,21] sayilari artan bir sekilde siraladi.

// const arr = [3,2,1,4,5];
// arr.sort((a,b) => b - a);
// console.log(arr);

////////////

// function alphabeticalOrder(arr) {

//     // Only change code below this line
//     return arr.sort(function (a, b) {
//       return a === b ? 0 : a < b ? -1 : 1;
//     })
//     // Only change code above this line
// }
  
// let result = alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);
// console.log(result);

//////////////////////////////

// const str = "Hello World";
// const bySpace = str.split(" ");

// const otherString = "How9are7you2today";
// const byDigits = otherString.split(/\d/);
// console.log(byDigits);

////////////////////////////\

// Only change code below this line
// function urlSlug(title) {
//     return title
//     .toLowerCase()
//     .trim()
//     .split(/\s+/)
//     .join('-');
    
//     }
//     // Only change code above this line
//     let result = urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");
//     console.log(result);

///////////////////////////


///////// every() /////////

/*
The every method works with arrays to check if every element passes a particular test. 
It returns a Boolean value - true if all values meet the criteria, false if not.
*/


// function checkPositive(arr) {
//     // Only change code below this line
  
//   return arr.every((number) => number > 0)
  
//     // Only change code above this line
// }
  
// let result = checkPositive([1, 2, 3, -4, 5]);
// console.log(result); // outpput = false

///////////////////////////////


////////// some() /////////

/*
The some method works with arrays to check if any element passes a particular test.
It returns a Boolean value - true if any of the values meet the criteria, false if not.
*/

// function checkPositive(arr) {
//     // Only change code below this line
//   return arr.some((currentValue) => currentValue > 0)
  
//     // Only change code above this line
// }
  
// let result1 = checkPositive([1, 2, 3, -4, 5]);
// let result2 = checkPositive([-1, -2, -3, -4, -5]);
// console.log(result1);  // output true
// console.log(result2);  // output false

////////////////////////////////\\

function add(x) {
    // Only change code below this line
  
  return y => z => x + y + z;
    // Only change code above this line
}
  
let result = add(10)(20)(30);
console.log(result);