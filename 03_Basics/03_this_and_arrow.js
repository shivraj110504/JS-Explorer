//this keyword
//'this' keyword only used in context of object
//when we have to access the variable inside the same object 


// const user = {
//     username : "Shivraj",
//     price : 999,
//     welcomeMessage : function(){
//         console.log(`${this.username}, welcome to website`)
//         console.log(this)  // prints the current context, {username: 'Shivraj', price: 999, welcomeMessage: [Function: welcomeMessage]}
//     }
// }

// console.log(user);
// user.welcomeMessage(); //=> Shivraj, welcome to website
// user.username = "hero"; //context of object is changed here
// console.log(user);
// user.welcomeMessage(); // => hero, welcome to website



// console.log(this); //=> {}

// when we print 'this' in browser, it returns the document object
//console.log(this); 
//**'Document'is the Global object of browser .
// in browser, the global object is window object.



// function chai(){
//     const username = "shivraj";
//      //'this' keyword is only applicable in context of objects, not in functions
//     console.log(this.username); // undefined
// }
// chai();




// const user = function(){
//     const username = "shivraj";
//     console.log(username);//shivraj
//     console.log(this.username); //undefined 
//     //this keyword is only applicable in the context of object
//     console.log(this); //return the global object
// } 
// user();





// *********************************** Arrow Function ****************************************************




const chai =  () => {
    let username = "hitesh";
    console.log(this); // => {}
    console.log(username);// => hitesh
}
chai();



// const addNums = (num1,num2) => {
//     return num1+num2;
// }
// console.log(addNums(5,10)); //15




//************************implicit arrow function***********************************


// const addNums = (num1, num2) => num1 + num2;
// const addNums = (num1, num2) => (num1 + num2);     // most used in react
//  console.log(addNums(5,3)); //8



//*****explicit return
//=> when we use {curly braces}in function, we have to write the "return" keyword

 //*****implicit return
//=>  when we use () in function , we do not use 'return' keyword




//*****************************Return object in arrow function***********************

// we return object inside the ()

// const user = () => ({username: "shivraj"})
// console.log(user());





// const myArray = [2, 5, 3, 7, 8]
// myArray.forEach()
