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