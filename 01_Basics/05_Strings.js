
// This is the module for String And String methods

//Follow the backtick `` for printing the string , it is more convenient method
//Although we can use ""  or ''  for printing the string

// const name = 'shivraj';
// const rollNo = '35';
// console.log(`I am ${name} and my roll number is ${rollNo}`);

//------------------------------------------

// String concatenation

// const str1 = "shivraj";
// const str2 = "is cool";
// const str3 = str1 + ' ' + str2;

// console.log(str3);
// console.log(str1.concat(' ', str2));

//------------------------------------------

// Another way to declare a string

// const myStr = "shivraj"; //primitive string

// const str = new String('shivraj'); //object String
// it creates the string in form of object , although normal declaration also follows the same procedure

// we can access individual element using respective index
// console.log(str); // => [String: 'shivraj']

// to access the char at particular index
// console.log(str[3]); 
// console.log(str5.charAt(2)); 

//---------------------------------------------

let str5 = "shivraj";
const str6 = "is-COOL";

// for Uppercase & Lowercase
// console.log(str5.toUpperCase());
// console.log(str6.toLowerCase());

// tells index of particular char
// console.log(str5.indexOf('s'));

// provides access to the prototype of an object
// console.log(str5.__proto__);

// gives length of the string
// console.log(str5.length);

// substring
// console.log(str5.substring(2, 5)); // 5th index is excluded

// slice
// const str = 'The quick brown fox jumps over the lazy dog.';

// console.log(str.slice(31));
// Expected output: "the lazy dog."

// console.log(str.slice(4, 9)); //9th is excluded
// Expected output: "quick"

// console.log(str.slice(-4)); //from end
// Expected output: "dog."

// console.log(str.slice(-9, -5));
// Expected output: "lazy"

// .split
// const strName = "shi-vra-j ";
// console.log(strName.split('-')); // => [ 'shi', 'vra', 'j' ]

// replace first occurrence
// console.log(strName.replace('-', "*"));
// replaceAll
// console.log(strName.replaceAll('-', "*"));

// repeat
// console.log(strName.repeat(3));

// convert obj string to primitive string
// const strObj = new String('shivraj');

// console.log(strObj); //[String: 'shivraj']
// console.log(strObj.toString()); //shivraj

// trim()
// const myStr1 = "     shivraj      ";
// console.log(myStr1.trim()); //removes extra right and left whitespaces

// includes -->checks if given text is present or not
// const url = "https://hitesh.com/hitesh%20choudhary"

// console.log(url.replace('%20', '-'));
// console.log(url.includes('sundar'));
