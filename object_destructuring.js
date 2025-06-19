//=================== Object Destructuring in JavaScript ===================//
//Object destructuring is a convenient way of extracting multiple properties from an object 
//and assigning them to variables using a single line of code. 
//Think of it like unpacking items from a box (object) into clearly labeled drawers (variables).

//========== Basic Destructuring ==========//
const person = {
  name: "Charles",
  age: 25,
  country: "Kenya"
};

// Destructuring values into variables
const { name, age, country } = person;

console.log(name);    // Charles
console.log(age);     // 25
console.log(country); // Kenya


//========== Renaming Variables ==========//
//You can rename the variable during destructuring
const { name: fullName, age: years } = person;

console.log(fullName); // Charles
console.log(years);    // 25


//========== Setting Default Values ==========//
//If the property doesn’t exist in the object, you can assign a default value

const student = {
  name: "Alice",
  grade: "A"
};

const { name: studentName, grade, school = "Nairobi High" } = student;

console.log(studentName); // Alice
console.log(school);      // Nairobi High (default used)


//========== Nested Destructuring ==========//
//You can destructure objects inside objects
const user = {
  username: "ochanda",
  address: {
    city: "Nairobi",
    zip: "00100"
  }
};

const { address: { city, zip } } = user;

console.log(city); // Nairobi
console.log(zip);  // 00100


//========== Destructuring in Function Parameters ==========//
//You can destructure directly in the parameter list of a function

function displayUser({ username, address: { city } }) {
  console.log(`${username} lives in ${city}`);
}

displayUser(user); // ochanda lives in Nairobi


//========== Partial Destructuring ==========//
//You can extract only some properties

const product = {
  id: 101,
  name: "Phone",
  price: 500
};

const { price } = product;

console.log(price); // 500


//========== Combining with the Rest Operator ==========//
//You can collect remaining properties into a separate object

const { id, ...rest } = product;

console.log(id);   // 101
console.log(rest); // { name: 'Phone', price: 500 }


//========== Destructuring Inside Loops ==========//
//Works perfectly when looping through objects in arrays

const users = [
  { name: "Alice", age: 22 },
  { name: "Bob", age: 30 }
];

for (const { name, age } of users) {
  console.log(`${name} is ${age} years old`);
}

//Output:
// Alice is 22 years old
// Bob is 30 years old
