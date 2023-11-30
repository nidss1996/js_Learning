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
 
 console.log(result)
 //console.log(typeof username)