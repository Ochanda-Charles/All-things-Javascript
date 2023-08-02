//Output
//Console is part of the web browser and allows you to log in messages, run js code and see errors and warnings
console.log("Hello World!");

//Operators and strings 
//====Mathematical operators======//
let x = 8;
let y = 3;
console.log(x+y);//addition
console.log(x-y);//subtraction
console.log(x*y);//multiplication
console.log(x/y);//division
console.log(x**y);//exponentation
console.log(balls % boxes);//modulo operator//output the remainder after carrying out division


//Increment and decrement operators
let count = 0;
count++;
console.log(count);//returns 1
//post-increment and post-increment
//they return the value of the number before the actual operation has been carried out
let p = 1; 
console.log(p++);

//post-decrement and pre-decrement
//they return the value after the actual operation has taken place 

let r  = 0;
console.log(++r);//returns 1




//=====Variable declaraion =====///
//variables must abide by the following rules:
//variable names must begin with a letter, an underscore _ or a dollar sign $
// variable names cannot contain spaces
// variable names can only contain letters, numbers, underscores, or dollar signs.
// variable names are case-sensitive, which means that, for example, Name and name variables are different
let me_1 = "Javascript learning program";
let b = 5, f = 6, z = 8;

//=======Data types=======//
//Numbers//
var number1 = 10;
var number2 = 2.5;
var number3 = -100;
//Decimal//

//boolean//
//can only take two values true(1) and false(0) 
var boolean1 = true;
var boolean2 = false;


//String//
//You can use quotes inside the strings, just make sure that they are different from the enclosing ones
console.log("I'm happy!");
console.log('She said "Yes!"');


console.log('She said "Yes!"');
var string1 = "Hello, world!";
var string2 = "This is a string.";


/// there is the \ backslash used as an escape character and there is the / foward slash used for division
console.log('I\'m happy');
console.log("She said \"Yes!\"");

// //==Template literals==//
// Template literals are another way to create strings and work with them more flexibly.
//They use back-ticks `` rather than quotes "" to define a string
let temp = `Hello, user!`;

//With template literals, you can use both single and double quotes inside a string.
console.log(`I'm happy, she said "Yes"!`);
//Template literals allow multiline strings, without using \n:
let msg = `Hey! Are you sololearning?
Isn't it awesome?`;
console.log(msg);

//Template literals allow you to use variables inside the strings. You need to add a dollar sign $ and enclose the variable name in braces {}.
let name = "John";
let text = `Welcome, ${name}`;
console.log(text);

//Not only can we add numbers, but we can also add strings, using something called concatenation
console.log("Java" + 'Script');

//Undefined//
//Represents a value that has not been assigned a value yet.
var undefinedValue = undefined;

//Objects//
//A collection of properties and methods
var object1 = {
    name: "John Doe",
    age: 30
  };

//Null//
//Represents a value that is not defined.
var nullValue = null;


//==Arithmetic operations==//
let n = 15;
n+=5; // x = x+5;
n-=5; // x = x-5;
n*=5; // x = x*5;
n/=5; // x = x/5;
n%=5; // x = x%5;


//==Comparison operators==//
//used to evaluate a condition
//Returns a boolean value ; true or false 
// equal to ==
// not equal to !=
// greater than >
// smaller than <
// greater or equal to >=
// smaller or equal to <=

console.log(x == 7) //true
console.log(x!=8) //true
console.log(x > 10) //false
console.log(x < 2) //false
console.log(x >= 7) //true
console.log(x <= 7) //true

//Strict equality === comparison operator returns false for the values which are not of a similar type.

let uv = 5;
let mv = '5';
console.log(uv == mv); //true
console.log(uv=== mv); //false

// Greater than and smaller than operators can also be used to compare strings lexicographically 
//(where the alphabetical order of words is based on the alphabetical order of their component letters). 
console.log('a' < 'b');//true 

console.log("Bob" > "Dave");//false


//==Ternary operator==//
//Conditional, or ternary, operators assign a value to a variable, based on some condition.
//variable = (condition) ? value1: value2
//It takes three operands: a condition followed by a question mark ?, 
//then an expression to execute if the condition is true followed by a colon :, 
//and finally, the expression to execute if the condition is false.
let age = 42;
let isAdult = (age < 18) ? "Too young": "Old enough";
console.log(isAdult);

let bill = 1800;
bill = (bill >= 1500) ? bill * 0.85 : bill;
console.log(bill);