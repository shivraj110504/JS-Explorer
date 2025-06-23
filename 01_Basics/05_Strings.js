const name = "Shivraj Taware"
const repoCount = 20

// console.log(name + repoCount + " Value"); ==> Outdated, preffer not to use;

console.log(`Hello there, my name is ${name} and my repo count is ${repoCount}`); //==> More convinient. (String Interpolation)

const newName = new String('Shivraj-st')  // ==> Another type of string declaration
// console.log(newName[0]);
// console.log(newName.__proto__);



// console.log(newName.length);
// console.log(newName.toUpperCase());
console.log(newName.charAt(2));
console.log(newName.indexOf('i'));

const newString = newName.substring(0, 4)
console.log(newString);

const anotherSting = newName.slice(4, 9)
console.log(anotherSting);


const newStringOne = "   Shivraj   "
console.log(newStringOne);
console.log(newStringOne.trim())

const url = "https://shivarajtaware/shivraj%20taware"
console.log(url.replace("%20", "-"))
console.log(url.includes("shivraj")) //check the given argument present in url or not
console.log(newName.split('-')); // split the string based on saperator (in this case, saperator is '-').It may be " "



