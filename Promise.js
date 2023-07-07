const GITHUB_API ="https://api.github.com/users/lyricalcoder16"

//fetch returns a promise 
//A promise is an object reperesenting an eventual completion or failure of an asynchronous event
const user = fetch(GITHUB_API);

co