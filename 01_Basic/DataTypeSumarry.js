// Primitive and non Primitive 

// Primitive : number, string, boolean, null, undefined, symbol, BigInt

let n1 = null 
let n2 = undefined
let id = Symbol('123')
let otherId = Symbol('123')
console.log((id=== otherId))
console.log(typeof id )

//non Primitive : Object, Array, Function 

let person = { 
    Name: "Nidhi",
    Id: 1010,
};

//console.log(person)
console.log(typeof person)

const array1 = ["IronMan", "SuperMan", "SpiderMan"]
console.log(typeof array1)

const myFunction = function()  {
    console.log("Hello World");
    
}
// console.log(typeof myFunction)

// why we are using const in Array and Function 

// ########### storing data in stack or Heap 

// Primitive datatype store data in stack as a copy of value 

let myName = " Nidhi "
let myName1 = myName 

// console.log(myName1)

myName1 = " Komal "
// console.log(myName1) // Komal 
// console.log(myName) // Nidhi 

// non Primitive data store data in Heap and it uses referance of memory 

let Student1 = {
    Name:"Nidhi",
    email: " nidhi123@gmail.com",

};

let Student2 = Student1 
console.log(Student2)
Student2.email = "Jyothi123@gmail.com" // beacuse it is using the same referance so email 
///Id will change in both the object Student1 and Student2  
console.log(Student1)
console.log(Student2)
