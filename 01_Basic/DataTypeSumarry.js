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
console.log(typeof myFunction)

// why we are using const in Array and Function 

