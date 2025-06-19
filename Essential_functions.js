//map
//The map() function is used to transform each element in an array.
//It returns a new array containing the results of calling a function on every element.
//map() does not modify the original array—it creates a new one.
// map example
const numbers = [1, 2, 3, 4, 5];

// multiply each number by 2
const doubled = numbers.map((num) => {
  return num * 2;
});

console.log(doubled); // [2, 4, 6, 8, 10]

//indexOf
//The indexOf() method returns the first index at which a given element is found.
//If the element is not found, it returns -1

// indexOf example
const fruits = ['apple', 'banana', 'mango', 'banana'];

console.log(fruits.indexOf('banana')); // 1 (first banana found at index 1)
console.log(fruits.indexOf('grape')); // -1 (not found)

//concat
//The concat() method is used to combine two or more arrays into a single new array.
//The original arrays are not modified.

// concat example
const arr1 = [1, 2];
const arr2 = [3, 4];
const arr3 = [5, 6];

const combined = arr1.concat(arr2, arr3);

console.log(combined); // [1, 2, 3, 4, 5, 6]

//filter
//The filter() method creates a new array with all elements that pass a test (the condition inside the function).
//It’s perfect for removing unwanted values or selecting specific ones.

// filter example
const ages = [12, 17, 20, 25, 30];

// filter out only ages that are 18 or older
const adults = ages.filter((age) => {
  return age >= 18;
});

console.log(adults); // [20, 25, 30]

//set
//A Set is a built-in object that stores unique values (no duplicates).
//It can hold any data type—just like arrays—but without repeated values.

// set example
const letters = ['a', 'b', 'a', 'c', 'b'];

const uniqueLetters = new Set(letters);

console.log(uniqueLetters); // Set(3) { 'a', 'b', 'c' }

// convert Set back to array
const uniqueArray = [...uniqueLetters];
console.log(uniqueArray); // [ 'a', 'b', 'c' ]

//reduce
//The reduce() method is used to reduce all elements in an array to a single value.
//It takes a callback function and runs it for each value, accumulating the result.

// reduce example
const prices = [10, 20, 30];

// add up all the prices
const total = prices.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0); // initial value is 0

console.log(total); // 60
