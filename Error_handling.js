//====================== ERROR HANDLING IN JAVASCRIPT ======================//
// In JavaScript, errors can happen during code execution.
// We use try...catch...finally blocks to handle these errors gracefully,
// instead of crashing the whole program.


//====================== try...catch block ======================//
// 'try' contains the code that might throw an error.
// 'catch' is used to handle any error that occurs inside the try block.

try {
  // This will work
  let result = 10 / 0;
  console.log("The result is:", result); // Output: Infinity

  // This will throw a ReferenceError because 'undefinedVariable' is not defined
  console.log(undefinedVariable); 

} catch (error) {
  // This block catches the error and prevents the program from crashing
  console.log("An error occurred!");
  console.log("Error message:", error.message);
}

console.log("Code continues after try...catch block...\n");


//====================== throw keyword ======================//
// You can also manually throw errors using the 'throw' keyword.
// This is useful when you want to enforce rules in your code.

function divide(a, b) {
  if (b === 0) {
    // We are creating and throwing a custom error
    throw new Error("Cannot divide by zero!");
  }
  return a / b;
}

try {
  console.log("10 / 2 =", divide(10, 2)); // Output: 5
  console.log("5 / 0 =", divide(5, 0));   // This will throw our custom error

} catch (error) {
  console.log("Custom error caught:", error.message);
}

console.log("Continuing after custom error handling...\n");


//====================== finally block ======================//
// 'finally' block always runs, no matter what happens in try or catch.
// It is useful for cleanup tasks or final messages.

try {
  let userInput = "123a";

  // Check if the input is a valid number
  if (isNaN(userInput)) {
    throw new Error("Invalid number!");
  }

  console.log("Valid number:", userInput);

} catch (error) {
  console.log("Caught an error:", error.message);

} finally {
  // This will always execute
  console.log("This will always run no matter what!\n");
}


//====================== Real-Life Example: Login System ======================//
function login(user) {
  if (!user) {
    // If user data is missing, throw a custom error
    throw new Error("User data missing!");
  }

  // Simulate a login success
  console.log(`${user} logged in successfully.`);
}

try {
  login("Charles"); // Works fine
  login();          // Throws error due to missing argument

} catch (e) {
  console.log("Login failed:", e.message);

} finally {
  console.log("Login attempt completed."); // Runs regardless of success or failure
}


//====================== Summary ======================//
// try     - Defines a block of code to test for errors
// catch   - Handles the error that occurred in try
// throw   - Allows you to manually create (throw) your own errors
// finally - A block that always runs, used for cleanup or confirmation
