//========== HOISTING IN JAVASCRIPT ==========//
// Hoisting is a JavaScript behavior where function and variable declarations
// are moved to the top of their scope during the memory creation phase,
// even before the code is executed.

//---------- Function Hoisting ----------//
// Function declarations are hoisted completely — you can call them before they are defined.

greet(); // This works
function greet() {
  console.log("Hello from the greet function!");
}


//---------- Variable Hoisting with 'var' ----------//
// Variables declared with 'var' are hoisted, BUT only the declaration is hoisted, not the value.

console.log(animal); // Outputs: undefined (declaration hoisted, assignment is not)
var animal = "Elephant";
console.log(animal); // Outputs: Elephant


//---------- Variable Hoisting with 'let' ----------//
// Variables declared with 'let' are NOT hoisted in the same way.
// They are in a "temporal dead zone" until the line where they are declared.

console.log(country); // ReferenceError: Cannot access 'country' before initialization
let country = "Kenya";
console.log(country);


//---------- Function Expression (Not Hoisted) ----------//
// Functions assigned to variables (function expressions) behave like variables.

console.log(myCar); // Outputs: undefined (variable is hoisted, not the function)
myCar();            // TypeError: myCar is not a function

var myCar = function() {
  console.log("MOBIUS");
};
