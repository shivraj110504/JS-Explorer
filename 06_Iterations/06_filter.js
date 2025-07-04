

const coding = ["js", "py", "java", "rb"];

//forEach loop do not return anything
const values = coding.forEach( (item) =>{
    // console.log(item);
    return item;
});
// console.log(values); // => undefined




//********************filter****************************

// // used to return the value instead of for each
// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNums.filter( (num) => {
//     return num>5;  //if we open scope using {}, then return keyword is must.
// });
// console.log(newNums); // => [ 6, 7, 8, 9, 10 ]





//********************************using forEach****************************************
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums = [];

myNums.forEach((item) => {
    if(item>4){
        newNums.push(item);
    }
})

// console.log(newNums); // => [ 5, 6, 7, 8, 9, 10 ]





const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Books Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


let HistoryBooks = books.filter( (bk)=> (bk.genre =='History'));
// console.log(HistoryBooks);
// [
//     {
//       title: 'Book Three',
//       genre: 'History',
//       publish: 1999,
//       edition: 2007
//     },
//     {
//       title: 'Book Seven',
//       genre: 'History',
//       publish: 1986,
//       edition: 1996
//     }
// ]



// userBooks = books.filter( (bk) => { 
//     return bk.publish >= 1995 && bk.genre === "History"
// })
// console.log(userBooks);
// // [
// //     {
// //         title: 'Book Three',
// //         genre: 'History',
// //         publish: 1999,
// //         edition: 2007
// //     }
// // ]




// ********************************************** MAP ********************************************************************************

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNumbers = nums.map((nums) => {return nums + 10})
// console.log(newNumbers);



//  *********************** Chaining ***********************

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const myNumbers = numbers
                    .map((num) => (num * 10))   // => [10, 20, 30, 40,  50, 60, 70, 80, 90, 100]
                    .map((num) => num + 1)      // => [11, 21, 31, 41,  51, 61, 71, 81, 91, 101]
                    .filter((num) => num >= 40) // => [41, 51,  61, 71, 81, 91, 101]
console.log(myNumbers);


