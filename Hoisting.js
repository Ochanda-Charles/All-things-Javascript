//Hoisting is the act of calling a function or variable before initialisation
//let variables cannot be hoisted hence you do not declare variables using the let keyword




myCar();
console.log(country);
console.log(myCar);

function myCar(){
    console.log("MOBIUS")
} 
var country = "KENYA";
console.log(country);