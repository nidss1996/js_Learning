// use of this(to access the current context of object)
const user = {
    username: "Nidhi",
    price: 1000,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to the website`) // current context 
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "Neha"
// user.welcomeMessage()

//console.log(this)

//  const chai = function (){
//     let name = "Navin"
//     // we ca not access function context using this 
//     console.log(this)
// }

// chai()

// Arrow Function(it return empty object while call this )  

// const chai =  () => {
//     let name = "Navin"
//     // we ca not access function context using this 
//     console.log(this)
// }

// chai() 

// const addTwonum = (num1, num2) =>{

//     return num1+num2

// }

// Implicit arrow function(without return keyword)

//const addTwonum = (num1, num2) => num1 + num2 
//const addTwonum = (num1, num2) => (num1 + num2) 
const addTwonum = (num1, num2) => ({username:"Nidhi"})

// console.log(addTwonum(2,9))



