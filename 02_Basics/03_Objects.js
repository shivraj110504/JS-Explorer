// Objects


// Singleton:

//if object is made by constructor ,(it is only single object)
// Object.create   // => used to create object and singleton made using it. (Conctructor)
// const obj = new Object();
// console.log(typeof obj);


//Literals

//Contains keys and values

const jsUser = {
    name: "Shivraj",   // here name is a kye, Shivraj is a value
    age: 20,
    location: "Pune",
    email: "shivrajtaware@abc.com",
    isLoggedIn: false,
    lastLogInDays: ["monday", "saturday"]
}



// ********* 1) Access value in Objects **********

// console.log(jsUser.email)
// console.log(jsUser["email"])




// ******** 2) Access the key values using [""] ********

// const newUser = {
//     "First name": "Shivraj"
//     // here I used space in key value, it will not accessed by (.)dot operator
//     // it will only accessed by using JsUser["First name"]
// }
// console.log(newUser["First name"])




// ********** 3) Access the symbol in Objects *******

// const mySym = Symbol("shiv");
// const userData = {
//     [mySym]: "symbol"  //we have to write the symbols key inside [] sqr braces.
// }
// console.log(userData[mySym]);// access symbols inside the objects using [] sqr. braces


// common mistakes
// const mySym = Symbol("shiv");
// const userData = {
//     mySym: "symm"  //heres the datatype of mySym is "String" 
// }
// console.log(typeof userData["mySym"])


// ******************** Other common discussion ****************************

// *********** How to fix value in object *************************

/*
 if we have to fix value of the key, means it will not change
  when it is manupulated 
*/
const myObj= {
    name : "shivraj",
    email: "shiv@chatgpt.com"
}

// console.log(myObj); // => { name: 'shivraj', email: 'shiv@chatgpt.com' }

// Object.freeze(myObj);
// myObj.email = "shiv@microsoft.com";

// the original email value will not change, bcoz it is fixed
// console.log(myObj); //{ name: 'shivraj', email: 'shiv@chatgpt.com' }








/*
 if we have to insert new function and 
we have to use the key value of same object inside that function then
we use 'this' key word ,it refers to  the current object 
*/
const Obj ={
    name : "shivraj",
    age: 21
}


// defining greeting in obj

Obj.greeting = function(){
    // console.log(`Hello ${name} , you are ${age} years old.`);   //  console.log(`Hello ${name} , you are ${age} years old.`); ReferenceError: name is not defined
    console.log(`Hello ${this.name} , you are ${this.age} years old.`); 
}

Obj.greeting();// calling function
