const accountId = 2323232
let accountEmail = "shivrajtaware@gmail.com"  
var accountPass = "1212121" //Prefer not to use 'var' because issue in block scope and functional scope.
accountCity = "Pune"
let accountState;

// accountId = 2   //Not allowed, its a constant, cannot be changed

accountEmail = "shiv@shiv.com"
accountPass = "234232"
accountCity = "Mumbai"

console.log(accountId)

console.table([accountId, accountEmail, accountPass, accountCity, accountState])