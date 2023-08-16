//A class is like a template of an object 
//It defines the object's properties 
//There are various ways to declare a class

//===Using the CLASS keyword===//
class Person {
    //A constructor is a special function that helps to assign properties to objects
    //in some cases when you use the new keyword it is used to create new objects 
    constructor(name,age){//===>Constructor function
        this.name =  name 
        this.age  =age
    }
    
}

const student  = new Person("James" , 18)

//==Using a constructor function
function Car(color, brand){
    this.color = color
    this.brand = brand 
}
const myCar  = new Car("black", "Nissan")


//here we  are using a constructor function also but in a different way 
var myPlant = function(name,colour) {
    this.name = name
    this.colour = colour
}
const desertPlant= new myPlant("Cactus", "green")

//You can also leave the class unnamed in which the variable will simply be assigned the class definitions




