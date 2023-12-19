let myHeros = ["thor","spiderman"]
let heroPower = { 
    thor:"hammer",
    spiderman: "sling",
    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}
Object.prototype.Nidhi = function() {
    console.log("Nidhi is present in all objects")
}
//console.log(myHeros.Nidhi())

Array.prototype.heyNidhi = function(){
    console.log("is myNidhi available in all objects")
}

//myHeros.heyNidhi()
//heroPower.heyNidhi()

// Inheritance 

const user = { 
    name: "Nidhi",
    password:"nidhi@00"
}

const Teacher = {
    Login: "Hitesh",
    pass:"not"
}

const TeachingSupport = { 
    isAvailable:false,
    count:10
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__:TeachingSupport
}
//console.log(TASupport.__proto__)

Teacher.__proto__ = user
//console.log(Teacher.__proto__)

// Modern syntax 

Object.setPrototypeOf(TeachingSupport, Teacher)

//console.log(TeachingSupport.pass)

// small task : set a prototype to remove the extra space from string 

let name = "nidhi     ";

let myName = "    Puja    ";

String.prototype.trueLength = function () {
    //console.log(`${this}`) 
   // console.log(`${this.name}`)
    console.log(`True length is :${this.trim().length}`)
}
 myName.trueLength()

 "Nidhi".trueLength()




