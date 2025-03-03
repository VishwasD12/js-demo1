const accountsId = 12344
let accountEmail = "vish@gmail.com"
var accountPassword = "12345"
accountCity = "Bengaluru"

// accountsId = 2
accountEmail = "vivd.@gmail.com"
accountPassword = "111111"
accountCity = "Bellary"
let accountState;

console.log(accountsId);

/*
Prefer not to use var because issue in block scope and function scope
*/

console.table([accountsId, accountEmail, accountPassword, accountCity, accountState]);