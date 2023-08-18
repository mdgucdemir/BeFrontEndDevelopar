
// Object oriented programing

/////////////

// let duck = {
//     name: "Aflac",
//     numLegs: 2,
//     sayName: function() {return "The name of this duck is " + duck.name + ".";}
//   };
//   duck.sayName();

//////////////////////////////

//   let duck = {
//     name: "Aflac",
//     numLegs: 2,
//     sayName: function() {return "The name of this duck is " + this.name + ".";}
//   };

 /////////////////////////////

////////// Define a Constructor Function ///////////////
// if you write Capitalize a function name like below example, this is define a Constructor function

// function Bird() {
//     this.name = "Albert";
//     this.color = "blue";
//     this.numLegs = 2;
//   }

///////////////

// function Bird() {
//     this.name = "Albert";
//     this.color  = "blue";
//     this.numLegs = 2;
//   }
  
//   let blueBird = new Bird();

//   console.log(blueBird);
//   console.log(blueBird.name);

////////////////////////////

///// object's constructor with intanceof /////

// let Bird = function(name, color) {
//     this.name = name;
//     this.color = color;
//     this.numLegs = 2;
//   }
  
//   let crow = new Bird("Alexis", "black");
  
//   console.log(crow instanceof Bird);

////////////////////////////////////

// function Bird(name) {
//     this.name = name;
//     this.numLegs = 2;
//   }
  
//   let canary = new Bird("Tweety");
//   let ownProps = [];
//   // Only change code below this line
  
//   for(let property in canary){
//     if(canary.hasOwnProperty(property)){
//       ownProps.push(property)
//     }
// }
  
// console.log(ownProps);

///////////////////////////////////////



///////// use prototype /////////////

// function Dog(name) {
//     this.name = name;
//   }
  
//   Dog.prototype.numLegs = 4;
  
//   // Only change code above this line
//   let beagle = new Dog("Snoopy");
  
//   console.log(beagle.numLegs);

/////////////////////////////



///////////////////////// 

// function Dog(name) {
//     this.name = name;  // own property
//   }
  
//   Dog.prototype.numLegs = 4;  // prototype property
  
//   let beagle = new Dog("Snoopy");
  
//   let ownProps = [];
//   let prototypeProps = [];
  
//   // Only change code below this line
  
//   for(let property in beagle) {
//     if(beagle.hasOwnProperty(property)){
//       ownProps.push(property)
//     } else {
//       prototypeProps.push(property)
//     }
//   }
  
//   console.log(ownProps);
//   console.log(prototypeProps);

//////////////////////////////////

// function Bird(name) {
//     this.name = name;
//   }
  
// typeof Bird.prototype;

///////////////////////////



///////  Inherit Behaviors from a Supertype  /////

// function Animal() { }

// Animal.prototype = {
//   constructor: Animal,
//   eat: function() {
//     console.log("nom nom nom");
//   }
// };

// // Only change code below this line

// let duck = Object.create(Animal.prototype); // Change this line
// let beagle = Object.create(Animal.prototype); // Change this line

// duck.eat();     // return "num num num"
// beagle.eat();   // return "num num num"

/////////////////////////////

/// An other inherits example

// function Animal() { }

// Animal.prototype = {
//   constructor: Animal,
//   eat: function() {
//     console.log("nom nom nom");
//   }
// };

// function Dog() { }

// // Only change code below this line
// Dog.prototype = Object.create(Animal.prototype)


// let beagle = new Dog();

// beagle.eat()

//////////////////////////////////



///// Add Methods After Inheritance /////

// function Animal() { }
// Animal.prototype.eat = function() { console.log("nom nom nom"); };

// function Dog() { }

// // Only change code below this line
// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;
// Dog.prototype.bark = function () {
//   console.log('Woof!');
// }
// // Only change code above this line

// let beagle = new Dog();
// beagle.eat();   // nom nom nom
// beagle.bark();  // Woof!

//////////////////////////////


//// Override Inherited Methods ////////

// function Bird() { }

// Bird.prototype.fly = function() { return "I am flying!"; };

// function Penguin() { }
// Penguin.prototype = Object.create(Bird.prototype);
// Penguin.prototype.constructor = Penguin;

// // Only change code below this line

// Penguin.prototype.fly = function () {
//   return "Alas, this is a flightless bird."
// }

// // Only change code above this line

// let penguin = new Penguin();
// console.log(penguin.fly());

////////////////////////

///////////////////////////

// let flyMixin = function(obj) {
//   obj.fly = function() {
//     console.log("Flying, wooosh!");
//   }
// };

// let bird = {
//   name: "Donald",
//   numLegs: 2
// };

// let plane = {
//   model: "777",
//   numPassengers: 524
// };

// flyMixin(bird);
// flyMixin(plane);

// bird.fly();
// plane.fly();



/////////////////////////////


/// Closure ///

// function Bird() {
//   let hatchedEgg = 10;

//   this.getHatchedEggCount = function() { 
//     return hatchedEgg; // this is example of closure.
//   };
// }
// let ducky = new Bird();
// ducky.getHatchedEggCount();


///////////////////////


/// Immediately Invoked Function Expression (IIFE)  //////
// bu fonksiyonda iki adet parantez var 
// ilk parantez fonksiyonu tamamen icerir
// ikinci parantez ise hemem sonuna eklenir 
// ikinci parantezin anlami sudur: immediately executed or invoked (acilen son erdi veya cagirildi)


// (function () {
//   console.log("Chirp, chirp!");
// })();

//// an other one example

// (function() {
//   console.log("A cozy nest is ready");
// })();

///////////////////////////////////////


///// Use an IIFE to Create a Module /////

// let motionModule = (function () {
//   return {
//     glideMixin: function(obj) {
//       obj.glide = function() {
//         console.log("Gliding on the water");
//       };
//     },
//     flyMixin: function(obj) {
//       obj.fly = function() {
//         console.log("Flying, wooosh!");
//       };
//     }
//   }
// })();

//////////////////////////////////////////