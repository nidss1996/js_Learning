//console.log("Hello Array") 
//JavaScript array-copy operations create shallow copies(share or point same memory reference )
const ar1 = [1, 3, 44 ,6, 7]
const ar2 = ["a", "b", "cAdudi"]
const array1 = new Array(1, 3, 4, 5, "Nidhi")
//const array2 = array1
//
//array2.push(101)
//console.log(array2) 
//console.log(array1)
//console.log(array1[4])
//##################//Methods on Array #######################3
//console.log(array1.push(89))
//console.log(array1.push(98))
//console.log(array1.pop())
//array1.unshift(10)
//console.log(array1) // add the value at first place 
array1.shift() // remove the first value from starting 
array1.shift()
//console.log(array1)
//array1.shift()
//console.log(array1)
// ##################Slice and Splice########################
 //console.log(na1.join())
 //console.log("A", na1)
 // Slice 
 //console.log("B", na1.slice(1,4)) // exclude the end range
 //console.log("C",na1)
 //Splice 
 //console.log("D" , na1.splice(1,4)) // include the range and remove the data from the array of given range
 //console.log("E",na1)
 const na1 = [1 , 3 ,4, 5,6 ,7 ,8]
 const na2 = [10, 11, 12, 13, 14,15]
 //##################### Push , concate, spread ################################
 //na1.push(na2)
  //console.log(na1)
 // concate 
 //const newMergeArray = na1.concat(na2)
 //console.log(newMergeArray)
const allNewItem = [...na1, ...na2 , ...ar1]
//console.log(allNewItem)

// ############################Methods(isArray,from, of################
// console.log(Array.isArray(na1))
// console.log(Array.from("Nidhi"))
// console.log(Array.from({name:"Jyothi"})) // interesting because it will give emtpty array so we need give either key or value to create a array of that.
const person = {
    name:"Nidhi",
    id:123,
    account:"Private"
}
//console.log(Array.from(person{name,}))
let score = 100 
let score1 = 200
let score2 = 300
console.log(Array.of(score,score1,score2))
