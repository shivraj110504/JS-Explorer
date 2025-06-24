// Arrays

//JavaScript arrays are resizable and can contain a mix of different data types.
//JavaScript array-copy operations create shallow copies.
//A 'shallow copy' of an object is a copy whose properties share the same references(similar to the Primitive data types)


// const myArr1 = [1, 2, 3, 4, 5, 6]
const myHeros = ["shaktiman", "Shivraj", "SpiderMan"]

const myArr2 = new Array(1, 2, 3, 4, 5)

// console.log(myHeros[2]) // => SpiderMan
// console.log(myHeros[0]) // => shaktiman
// console.log(myHeros[1]) // => Shivraj


// ************* Array Methods ************ //

//premitive array --> directly stored in stack
//Array Object --> reference stored in heap

const myArr = [1, 2, 3, 4, 5, 6]

//push --> insert at end

// console.log(myArr) // [1, 2, 3, 4, 5, 6]
// myArr.push(7)       // 7 insert at end
// console.log(myArr) // [1, 2, 3, 4, 5, 6, 7]



// pop --> delete from end

// console.log(myArr)  // [1, 2, 3, 4, 5, 6, 7]
// myArr.pop() // => Removes the last value
// console.log(myArr) // [1, 2, 3, 4, 5, 6]


//unshift--> insert at start

// console.log(myArr); //[1, 2, 3, 4, 5, 6]
// newArr.unshift(111);    
// console.log(myArr);  //[111, 1, 2, 3, 4, 5, 6]



//shift--> remove element from  start

// console.log(myArr); //[1, 2, 3, 4, 5, 6]
// newArr.shift();    
// console.log(myArr);  //[  2, 3, 4, 5 ]  => remove the first element from the array


// console.log(myArr.includes(3)) // => returns the true if it exist in an array
// console.log(myArr.indexOf(4))  // => returns the index of the element 4, if it not exist then return -1


const newArr = myArr.join() // => convert the array into string
// console.log(myArr)  // => [ 1, 2, 3, 4, 5, 6 ]
// console.log(newArr) // => 1,2,3,4,5,6
// console.log(typeof newArr) // => strinng




// slice, splice

//slice --> do not change the original array , gives the copy of some elements form the array
// console.log(myArr)              // [ 1, 2, 3, 4, 5, 6 ]
// console.log(myArr.slice(1, 3))  // [ 2, 3 ]  => Last index excluded
// console.log(myArr);             // [ 1, 2, 3, 4, 5, 6 ]


//splice --> delete the splice range elements from the original array
console.log(myArr)              // [ 1, 2, 3, 4, 5, 6 ]
console.log(myArr.splice(1, 3)) // [ 2, 3, 4 ] //last index is included, also deleted the elements form that range
console.log(myArr)              // [ 1, 5, 6 ]
