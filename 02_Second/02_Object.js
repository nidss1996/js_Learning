// Singleton object : when we create a object from constructor(only one object will create)

// Object Literals 

const symKey = Symbol("Key1") // how to use Symbol as a key in object

const newUser = { 
    name: "Nidhi",
    "Full Name": "Nidhi Singh",
    [symKey]:123,
    age:27,
    Email:"nidhi.kumari8@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Friday"],
    greeting: function(){
        console.log("Hello User")

    }

}

newUser.greeting1 = function(){
    console.log(`Hello new user ${this.name}`)
}
newUser.hobby = "footbal" // add new variable or funtion in object

// ways to access the objcet 

// console.log(newUser.Email)
// console.log(newUser["Full Name"])
// console.log( typeof newUser["age"]) // in Object keys are also treated as string 
//console.log(typeof newUser[symKey])
//console.log(newUser)
newUser.age = 23 
//Object.freeze(newUser)
//newUser.age= 45 
// console.log(newUser.greeting)
// console.log(newUser.greeting1)
console.log(newUser)