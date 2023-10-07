
// // -- Type Aliases(baska adlar || takma adlar) / Custom Types

// this model of type (below this) is [ Type Aliases or Custom types ]
type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text' ;

function combine(
    input1: Combinable,
    input2: Combinable,
    resultConversion: ConversionDescriptor
    // Above this, type Aliases or Custom type
  ) {
    let result;
    if (
      (typeof input1 === "number" && typeof input2 === "number") ||
      resultConversion === "as-number"
    ) {
      result = +input1 + +input2;
    } else {
      result = input1.toString() + input2.toString();
    }
    return result;
}
  
const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);
  
const combinedStringAges = combine("30", "26", 'as-number');
  
const combinedNames = combine("Max", "Anna", 'as-text');
console.log(combinedNames);