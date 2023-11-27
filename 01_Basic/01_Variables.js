const accountId = 123455 // value can not changed
let accountName = "New account"
var accountEmail = "nidhi123@gmail.com"
accountCity = "Hyderabad"
let accountState ; // value will be undefined

// do not use var beacuse we face issue with block scope and functional scope


console.log(accountId)
console.table([accountName,accountEmail,accountCity,accountState])