//Datatypes are divided into two types on the basis of :  How data is stored and How to access the data

//dynamically typed
// JavaScript is a weakly typed programming language because you do not have to specify the variable type in advance.


// **********Primitives***********

// 7 types: String, number, boolean, null, undefined, Symbol, BigIng

const score = 100;
const scoreValue = 100.3

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

// console.log(id === anotherId);

const bigNumber = 8439458748954573439847335n




// ********** Reference (Non Primitive) ***********

// Array, Object, Functions

const heros = ["shaktimaan", "naagraj", "doga"]
let myObj = {
    name: "Shivraj",
    age: 20
}

const myFunction = function(){
    console.log("Hello world !")
}

//**** Summery [return types]*****//

// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object


// **************************************************************************************************

// Memory => Stack (Primitive), Heap (Non-Primitive)

// ----Stacck-----

let myYoutubeName = "ShivarajTaware"
let anotherName = myYoutubeName

anotherName = "SakshamLogic"

console.log(myYoutubeName);
console.log(anotherName);


//-----Heap----

let userOne = {
    email: "shivrajtaware1234@google.com",
    upi: "shiv@tbl"
}

let userTwo =userOne

userTwo.email = "user@google.com"

console.log(userOne.email);
console.log(userTwo.email);
