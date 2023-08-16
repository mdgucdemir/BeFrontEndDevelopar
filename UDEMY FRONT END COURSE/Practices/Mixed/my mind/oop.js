
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