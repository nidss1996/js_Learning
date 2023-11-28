// convert one data type to other data type 

let Name = " Nidhi"
let id = undefined
let idIntoNumber = Number(id)
// console.log(typeof id)
// console.log(typeof(id))
// console.log( typeof idIntoNumber)
// console.log(idIntoNumber)
// "202" => 202
// "202abc" => NaN 
// true/ false => 1/0 type is number still 
// null => 0 
// undefined => NaN

let isLoggedIn = "Nidhi"
let isBooleanLoggedIn = Boolean(isLoggedIn)
// console.log(typeof isBooleanLoggedIn)
// console.log( isBooleanLoggedIn)

// 1/0 => true/fales 
// "" => fales 
// "Nidhi" => true 

// #######################Operation ##########################

let num1 = 2+3 
let num2 = 3-2 
let value = 34 
let negValue = -value
console.log(negValue)
let str1 = ("1" + 2 + 2 )
let str2 = (2+3 + "1") 
console.log(str1)
console.log(str2)
// prefix and post work
let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"