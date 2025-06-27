//function --> block of code that are used to performs the specific task

//definetion
function myfunc(name){
    // console.log(`You are ${this.name}`); // => You are undefined
    console.log(`You are ${name}`); // => You are Shivraj
}

// myfunc ; //function reference
// myfunc("shivraj");//function execution ( function call)

// myfunc("Shivraj");



//***************returning from function ***************************/


// i) What is parameters and arguments....


// //Parameters and arguments
//when we define the function, we get parameters
//function funcName(parameters){
//}
//funcName(arguments) //when we call the function, we pass arguments

//ex:-

// function addTwoNumbers(num1, num2){        // num1, num2 are parameters
//     console.log(num1 +num2);  
// }

// addTwoNumbers(34, 6);  // 34, 6 are arguments




// function addTwoNumbers(num1, num2){ 
//     // let result = num1 + num2  // //no code will execute after the 'return' keyword
//     // return result

//     return num1 + num2
// }
// const result = addTwoNumbers(2, 4)
// console.log(result);




//when no value is assigned to the parameter --> it is undefined
//to avoid this we can pass defult value to the function("hero")


function logUserMessage(username="hero"){ // "hero" --> default value
    if(!username){
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`;
}
console.log(logUserMessage()) // => hero just logged in
console.log(logUserMessage("shivraj"));// => shivraj just logged in

// if we remove default value it will return 'Please enter a username'