// # Primitive

// 7 Types : String, Numbber, Boolean, null, undefined, Symbol, BigInt

// Return type of variables in JavaScript

// ***** 1) Primitive Datatypes *****

//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint


// ****** 2) Non-primitive Datatypes********

//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object



// JavaScript is a dynamically typed language. Because data type will automatically assigned at the time of compilation or code execution.

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol(123)

console.log(id === anotherId);

// const bigNumber = 3463278434398678687n


// Reference (#Non Primitive)

// Arryas, Objectss, Functions

const heros = ["shaktiman", "Naagraj", "doga"]
let myObj = {
    name: "shiv",
    age: 22,
}


const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof myFunction);
