//An object is a collection of properties
//An object stores its values in term of Key:value pairs
//there are two ways of initialising an object:
//Objects literal(most common way)

let registration = "regNO"
var no = "KAY 307A"

const car = {
    model: "Lamborghini",
    year: 2017,
    make : "Urus",
    Type : "SUV",
//You can also define methods is objects 
   fullname(model, make) {
    this.model = model
    this.make = make 
    return model + make;
   },
//You can also use computed property names as long as you enclose them in square brackets as follows
   [`Car_${registration}`] : `${no}`
};
//Using a constructor function or class
//Used when you want to create many objects with similar properties 
//Constructor function
function person(surname , age){
    this.surname = surname ;
    this.age  = age ; 
}
 
const charles  = new person("Charles", 16); 


//constructor class 
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


//====Object Destructuring=====//
//Object can be destructured so as some properties of the object can be assigned to variables
//Think of it as unpacking variables  
const {animalName, animalSpecies} = myAnimal;
console.log(snimalName);//Lion
console.log(animalSpecies);//Mammal


//===Adding and modyfying properties===//
myAnimal.name = "Panda";
myAnimal.species= "Mammal";


//==Deleting properties==//
//When a property is deleted it disappears along with its value this is unlike other programming languages where it is often given the value undefined
delete myAnimal.age;


