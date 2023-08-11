//Loops allow you to run the same code multiple times.
//====For loop===//

//for (initializer; condition; final-expression) {
    // code to run
//}

//The initializer is a variable, which increments the number of times the loop has run.
//The condition is used to stop the loop.
//The final expression is run each time after the loop's code has run. It is usually used to increment the variable used in the condition.

for (let i = 1; i <= 10; i++) {
    console.log(i);
}//outputs numbers from 1-10

//==While loop==//
// while(condition) {
//     //code to run
//   }


let i = 0;
while(i<=10) {
  console.log(i);
  i++;
}//outputs 1-10



//===Do while loop ===//
//This loop will execute the code block once, 
//before checking if the condition is true, and then it will repeat the loop as long as the condition is true. 

let z=5;
do {  
    console.log(z);
    z++;  
}
while (z<5);


//==If statement==//
//if (condition) {
    // block of code
//}

let purchase = 1700;

if (purchase>=1500){
    console.log("Discount!")
}

let player = 'John';
let points = 144;
let minPoints = 100;

if(points>=minPoints){
    console.log(`Well done, ${player}!`);
}


//else if statement
let time = 15;

if (time < 10) {
  console.log("Good morning");
} else if (time < 20) {
  console.log("Good day");
} else {
  console.log("Good evening");
}


//===Switch statements====//
// A cleaner option to the nested ifs, it makes the code more readable
//The switch expression is evaluated once. //
//The value of the expression is compared with the values of each case, and if there’s a match, that block of code is executed.
//the break statement is used to tell the code to stop
//In this case 
let choice = 1;

switch(choice){
  case 1://match!
    console.log("Sports");//outputs Sports
    break;
  case 2:
    console.log("Business");
    break;
  case 3:
    console.log("Technology");
    break;
}


//==Default keyword==//
//Often there will be no match, but we still need the program to do some action. 
//For this, we use the default keyword, which specifies the code to run if there’s no case match.
let color ="yellow";

switch(color) {
  case "blue": 
    console.log("This is blue.");
    break;
  case "red": 
    console.log("This is red.");
    break;
  default: 
    console.log("Color not found.");
}

//let is not subject to Variable Hoisting, 
//which means that let declarations do not move to the top of the current execution context.



//===for....in==//
//The for...in loop is intended for iterating over the enumerable keys of an object
let obj = {a: 1, b: 2, c: 3};
for (let v in obj) {
  console.log(v);//a,b,c
}

//===for....of===//
//ES6 introduces the new for...of loop, which creates a loop iterating over iterable objects.
let list = ["x", "y", "z"];
for (let val of list) {
  console.log(val);//x,y,z
}
 //The for...in loop should NOT be used to iterate over arrays because,
 // depending on the JavaScript engine, it could iterate in an arbitrary order. 
 //Also, the iterating variable is a string, not a number, 
 //so if you try to do any math with the variable, you'll be performing string concatenation instead of addition.
