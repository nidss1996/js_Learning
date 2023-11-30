// ways to create a function and use it 
const myFunctions = function(){
    console.log("test")
}

function myFunctions1(){
    console.log("N")
    console.log("Nidhi")
}

/*function addTwoNumber(num1, num2){
    num3 = num1 + num2 
    console.log(num3)
} */
/*function addTwoNumber(num1, num2){
    //num3 = num1 + num2 
    return num1+num2
}*/

//  const result = addTwoNumber(4, 4 )
//  console.log(result)
function userLoggedMessage(username= "Nidhi"){
   /*if(username === undefined){
    console.log("Please enter username")
    return
   } */

// ! vise versa , for some value defualt result is false like "" , undefined 
   if(!username){
    console.log("Please enter username")
    return
   }
    return `${username} just logged in `

}
 const result = userLoggedMessage()
 
 //console.log(result)
 //console.log(typeof username)

 // Rest Operator in function (rest operator is used to add dynamic argument in a function)
 function addProduct(val1, val2,...num) { 
    return num

 }
 console.log(addProduct(100, 200, 1 , 300))

 // pass objeect in function 
 const user  = {
    username: "Nidhi",
    price:900
 }

 function handleObject(anyobject){
    return `userName is ${anyobject.username} and price is ${anyobject.price}`

 }

 //console.log(handleObject(user))
 /*console.log(handleObject({
    username:"Nidhi",
    price:400
 })) */

 // pass array in a function 

 const ar1 = [12, 14, 1,5 ,16]
 function handleArray(getArray){
    return getArray[3]
 }
 console.log(handleArray(ar1))

