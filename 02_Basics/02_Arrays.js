const marvelHeros = ["Ironman", "Spiderman", "Thor"];
const dcHeros = [ "superman", "flash", "batman"];


//inserting array into another array
// marvelHeros.push(dcHeros);

// console.log(marvelHeros);
// [ 'Ironman', 'Spiderman', 'Thor', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvelHeros[3][1]); // => flash




//concatenating two arrays
// const allHeros = marvelHeros.concat(dcHeros);
// console.log(allHeros)
//[ 'Ironman', 'Spiderman', 'Thor', 'superman', 'flash', 'batman' ]


//spread  => same work as concat
// const all_new_heros = [...marvelHeros, ...dcHeros];
// console.log(all_new_heros);


//collecting array inside the array into single array
const myNewArr = [ 1, 2, 3 , [ 4, 5, [ 6,7]], [8, 9] ];
// console.log(myNewArr);

//flat
// console.log(myNewArr.flat(Infinity)); // we can mention till which level we have to make flat, or depth of an array



//checks array or not
// console.log(Array.isArray("Shivraj"));                   // => false
// console.log(Array.isArray("Shivraj", "Raj", "Shiv "));   // => false
// console.log(Array.isArray(["Shivraj", "Raj", "Shiv "])); // => true

//convert into the array
// console.log(Array.from("Shivraj")); // => ['S', 'h', 'i','v', 'r', 'a','j']


//console.log(Array.from({name: "hitesh"})) //=> interesting, important for interview. [returns empty array.]


let score1 = 100;
let score2 = 200;
let score3 = 300;

//array of given values
// console.log(Array.of(score1,score2,score3)); // =>(.of) Returns a new Array From set of elements