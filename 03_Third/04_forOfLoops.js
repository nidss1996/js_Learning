// for of loops 
const arr = [1, 2, 3, 4,5 ,6, 7]
for (const num of arr) {
    //console.log(`number is ${num}`)
}

// Maps: it a Ojbect which holds unique key,  value pairs(it is not iterable )

const map = new Map()
map.set("IN", "India")
map.set("USA", "Unitated state")
map.set("FR", "France")
map.set("IN", "India")
//console.log(map)

for (const [key, value] of map) 
{
    //console.log(key, ":", value)
}
// Object : for of loop does not work on Object
 const person = { 
     name: "Nidhi",
     id:123
 }

// for (const obj of person) {
    
//     console.log(obj)
// }

for (const key in person) {

   // console.log(`${key} is the key of  ${person[key]}`)
    
}


