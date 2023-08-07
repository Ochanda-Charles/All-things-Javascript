//==========Functions============//
//A function in JavaScript is a block of code that is executed when it is called. 
//Functions can be used to encapsulate logic, making that code more reusable and easier to understand. 
//The syntax for creating a function in JavaScript is quite simple, however there are various ways of writing a function
//in javascript 



//using the function keyword 
//Note that the way a  function  is declared affects how it is treated
//while being excecuted by the javascript engine during the memory creation phase
function add(x, y) {
    var sum = x+y;  
    console.log(sum);
  }


// Arrow functions 
//This new syntax is quite handy when you just need a simple function with one argument.
//You can skip typing function and return, as well as some parentheses and braces.
//One advantage of arrow functions is that they are more concise. The code for an arrow function can be written on a single line, which can make it easier to read and understand.
//Another advantage of arrow functions is that they are more efficient. 
//Arrow functions do not have their own scope, so they do not need to create a new object on the call stack. 
//This can make them more efficient, especially when they are called many times.
const add = (x, y) => {
    let sum = x + y;  
    console.log(sum);
  }


  //functions also have another syntax 
  var multiply  =  function (x,y ){
    let product  = x*y;
    console.log(product);
  }


  //the way you choose to have your function depends on your aim
  //if you aim to have cleaner code you can go with the second format or the third one 
  //However in the memory execution phase the Java script engine handles the second and third format as variables so they are given the undefined value



