//An object is a collection of properties
//An object stores its values in term of Key:value pairs
//It can store data (strings, numbers, booleans),functionality (functions) or even a computed value.
//there are two ways of initialising an object: object literal and constructor function/class

//======Objects literal(most common way)======//

// let registration = "regNO"
// var no = "KAY 307A"
const car = {
  make: "Lamborghini", //key-->make , value-->Lamborghini
  model: "Urus",
  year: 2017,
  type: "SUV",
  // Adding a method (function inside an object)
  getFullName() {
    return this.make + " " + this.model;
  },
  // Computed property (dynamic key using square brackets)
  ["Car_regNO"]: "KAY 307A"
};
console.log(car.getFullName()); // Lamborghini Urus
console.log(car["Car_regNO"]);  // KAY 307A

//========Using a constructor function or class======//
//Used when you want to create many objects with similar properties
//In this case we want a person object, so we can have many people(objects) with different surnames and ages.
//Constructor function
function person(surname , age){
    this.surname = surname ;
    this.age  = age ; 
}
 
const charles  = new person("Charles", 16); 


//====Constructor class====//
class Animal{
    constructor(name, species , age){
    this.name  = name ; 
    this.species = species; 
    this.age = age
    }
}
const myAnimal = new Animal("Lion", "Mammal" , "23");

//The properties may be functions, primitive value or even another object
// Objects can be used to store data in a structured way.
//Objects can be used to represent complex structures.
//Objects can be used to implement behavior.
//Objects can be reused.
//Objects can be passed as arguments to functions.
//Objects can be returned from functions.


//When creating an object by using duplicate property names, the last property will overwrite the prior ones of the same name.
var a = {x: 1, x: 2, x: 3, x: 4};

//====Object Destructuring=====//
//Object can be destructured so as some properties of the object can be assigned to variables
//Think of it as unpacking properties from an object and packing them into variables 
const {animalName, animalSpecies} = myAnimal;
console.log(animalName);//Lion
console.log(animalSpecies);//Mammal


//===Adding and modyfying properties===//
myAnimal.name = "Panda";
myAnimal.species= "Mammal";


//==Deleting properties==//
//When a property is deleted it disappears along with its value this is unlike other programming languages where it is often given the value undefined
delete myAnimal.age;


//object assign() method 
//allows us to combine multiple sources into one target to create a single new object. 
//In the example below we created a new object (newStudent) that took some properties of both the person and student objects
//There are no limitations on the number of source parameters. However, 
//order is important because properties in the second parameter will be overridden by properties of the same name in third parameter,and so on.
let person = {
    name: 'Jack',
    age: 18,
    sex: 'male'
};
let student = {
    name: 'Bob',
    age: 20,
    xp: '2'
};
//the first parameter is normally the target then every parameter after the first will be used as sources for the target
let newStudent = Object.assign({}, person, student);

console.log(newStudent.name); // Bob
console.log(newStudent.age); // 20
console.log(newStudent.sex); // male
console.log(newStudent.xp); // 2


//You can also use object.assign() to duplicate objects
let person = {
    name: 'Jack',
    age: 18
  };
  
  let newPerson = Object.assign({}, person); 
  newPerson.name = 'Bob';
  
  console.log(person.name); // Jack
  console.log(newPerson.name); // Bob


//You can assign a value to an object property in the Object.assign() statement.
  let person = {
    name: 'Jack',
    age: 18
  };
  
  let newPerson = Object.assign({}, person, {name: 'Bob'});
  //==Always remember that the more objects you add the more they overwrite the first objects



  //==indexOf() function==//
  //returns the index of the first substring
  //if the substring is not found it returns -1 instead 
  const str = "foobarbaz";
  const substring = "bar";
  const index = str.indexOf(substring);
    console.log(index); // 3


//