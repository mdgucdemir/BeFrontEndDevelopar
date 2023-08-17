
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