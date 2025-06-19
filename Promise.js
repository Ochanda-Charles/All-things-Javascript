//====================== PROMISES IN JAVASCRIPT ======================//
// A Promise is a JavaScript object that represents the eventual completion (or failure)
// of an asynchronous operation and its resulting value.
//A Promise in JavaScript is like a guarantee or a placeholder for a 
//value that you don’t have yet but will get in the future—once an action is done.

// You use promises to handle asynchronous tasks like:
// - fetching data from a server
// - reading files
// - waiting for a delay, etc.


//====================== PROMISE STATES ======================//
// A Promise has 3 states:
// 1. Pending – the initial state (not resolved or rejected)
// 2. Fulfilled – the operation completed successfully (resolve)
// 3. Rejected – the operation failed (reject)


//====================== Creating a Basic Promise ======================//
const promiseExample = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Promise resolved successfully!");
  } else {
    reject("Promise was rejected.");
  }
});


//====================== Consuming a Promise using .then() and .catch() ======================//
promiseExample
  .then((message) => {
    console.log("THEN block:", message);
  })
  .catch((error) => {
    console.log("CATCH block:", error);
  });


//====================== Simulating an Async Task ======================//
// We use setTimeout to mimic something that takes time (e.g., fetching from a server)
const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    let dataAvailable = true;

    if (dataAvailable) {
      resolve("📦 Data fetched successfully after 2 seconds!");
    } else {
      reject("🚫 Failed to fetch data.");
    }
  }, 2000);
});

fetchData
  .then((data) => {
    console.log("Data:", data);
  })
  .catch((err) => {
    console.log("Error:", err);
  });


//====================== Chaining Promises ======================//
// You can chain multiple .then() blocks to run steps in sequence

const processOrder = new Promise((resolve) => {
  resolve("🛒 Order placed");
});

processOrder
  .then((msg) => {
    console.log(msg); // Order placed
    return "🚚 Order shipped";
  })
  .then((msg) => {
    console.log(msg); // Order shipped
    return "📦 Order delivered";
  })
  .then((msg) => {
    console.log(msg); // Order delivered
  });


//====================== Using finally() ======================//
// 'finally' always runs whether the promise is fulfilled or rejected

const payment = new Promise((resolve, reject) => {
  let paymentSuccessful = false;

  if (paymentSuccessful) {
    resolve("💳 Payment processed.");
  } else {
    reject("💥 Payment failed.");
  }
});

payment
  .then((msg) => console.log(msg))
  .catch((err) => console.log(err))
  .finally(() => console.log("🔁 Payment process complete (either way)."));


//====================== Summary ======================//

// A Promise helps deal with asynchronous code in a clean way
// It has 3 states: Pending, Fulfilled, Rejected
// You create a promise using new Promise((resolve, reject) => {})
// You consume a promise using .then(), .catch(), and .finally()

// .then()      - handles the success result (resolve)
// .catch()     - handles any error (reject)
// .finally()   - always runs no matter what

// Promises make it easier to manage operations that take time without freezing the app

