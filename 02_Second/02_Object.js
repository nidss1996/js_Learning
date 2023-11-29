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
// console.log(newUser)

// Creating singleton object

// const tinderUser = new Object()
// console.log(tinderUser)

const tinderUser1 = {}
tinderUser1.name = "Nidhi"
tinderUser1.id = "123abc"
tinderUser1.Email = "abc@gmail.com"
//console.log(tinderUser1)
// create object inside the object nested object 

const regularUser = { 
    id:"123bbb",
    Name:"Jyothi",
    userDetails:{
        userName:{
            firstName:"Nithya",
            secondName:"Singh"
        }
    }
}

//console.log(regularUser.userDetails.userName.secondName)
//console.log(regularUser.userDetails?.userName.secondName) // Optional chaining 

// Using some Pridefine Methods

const obj1 = {1:"a", 2:"b", 3:"c"}
const obj2 = {3:"d", 4:"e", 5:"f"}

// mmerge two object 

//const obj3 = {obj1, obj2}
//console.log(obj3)

//const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3)
// console.log(obj1)
// console.log(obj3===obj1)
const obj3 = {...obj1, ...obj2}
// console.log(obj3)

// when we get the data from database generally it is in format of Arrya of Object 

const userFromDatabase = [
    {
        id:"123abc",
        name:"Hitesh"
    },
    {
        id:"222bca",
        name:"Sravani"
    },
    {
        id:"999bbb",
        name: "Jyothi"
    },
]

// console.log(userFromDatabase[1].name)

// console.log(Object.keys(tinderUser1))
// console.log(Object.values(tinderUser1))
console.log(Object.entries(tinderUser1))
console.log(tinderUser1.hasOwnProperty('Email1'))