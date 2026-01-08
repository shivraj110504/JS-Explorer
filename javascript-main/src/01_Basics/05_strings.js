const name = "shivraj";
const repoCount = 50;
// console.log(name + repoCount + " Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Shivraj");
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('z'));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const newStringOne = "  Shivraj.     ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20chodhary";
console.log(url.replace("%20", "-"));

console.log(url.includes("hitesh"));

const newStringTwo = "shivraj-taware-is-a-good";
console.log(newStringTwo.split("-"));
