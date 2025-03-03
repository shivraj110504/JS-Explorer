const accountId = 1223467
let accountEmail = "shivraj@google.com"
var accountPassword = "12345"
accountCity = "Pune"
let accountState;

//accountId = 2     Not allowed (Constant value)

accountEmail = "ta@shiv.com"
accountPassword = "12121211"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var,
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
