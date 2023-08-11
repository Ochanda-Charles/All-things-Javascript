//===Spread and rest operator====//
//First lets differentiate the two, they are all written the same way but they tend to differ in their purpose
//The operator refers to the three dots (...) but the dots combined with a word eg, ...newYear will now be called 
// a rest or spread parameter and as earlier on stated based on its purpose
//Spread operator as the name suggests it rather expands an array into its elements 
//while a rest operator rather combines multiple elements and condenses them to a single element


//can be used to:
//Add elements of an existing array into a new array
const powerTVshows = [`Power`, `Power Book 2:Ghost` ,`Power Book: Raising Kanaan`, `Power Book4:Force`]
const netflixFavourites = [`Fatal seduction`, `Transformers:Age of civilisation`, ...powerTVshows]
console.logI(netflixFavourites);
//In this case we can say we have used the spread operator since it splits the powerTVshows into its elements



//Pass elements of an array as arguments into a function
const myNumbers = [1,2,3,4]
var multiplyFourNumbers = (x,y,z) =>{
    return x*y*z;
}
multiplyFourNumbers(...myNumbers)//4
//copy arrays 
var myNumbersAgain = [...myNumbers]

//concatenate arrays
var oraimoEarbuds = [`Freepods pro`, `Freepods lite`, `Freepods 3`]
var oraimoProducts  = [`Smart Mouse`, `Vacuum dry`,`Mechanical keyboard`, ...oraimoEarbuds]
//You can concatenate or append an array depends on the position you put the spread operator

//condense multiple elements into an array
//here we can now say we have used the rest operator as we need the array as a whole not its elements rather 