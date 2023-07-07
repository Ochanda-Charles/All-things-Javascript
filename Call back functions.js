 //a callback function is a function passed inside another function to be excecuted when the parent function is done excecuting

 const button = document.querySelector('button')

//  function toggle(){
//     button.classList.toggle('altcolor')
 
//  toggle();

//You can have  a callback function in 3 ways 
// button.addEventListener('click', toggle) //here you must exempt the paranthesis() as this will result to the function just being called instesd of it being called asychronously before the first functions is called

// button.addEventListener('click', () => {button.classList.toggle('altcolor')})//here the function is called anonymously without the 

// button.addEventListener('click', function()  {button.classList.toggle('altcolor')})
button.addEventListener('click', ()=>  {button.classList.toggle('altcolor')})



//***Asynchronous programming***


function firstAction(callback,message,anotherCallback) {
    console.log(message)
    setTimeout(callback,2000)//secondAction is a callback function
    setTimeout(anotherCallback,3000)

}
function secondAction(message) {
    console.log(message)
}
function thirdAction(){
    console.log('I am the third action')
}


setTimeout(()=>firstAction(()=>secondAction("I am the second action"),'Im the first action',thirdAction), 5000)//firstAction is a callback function




