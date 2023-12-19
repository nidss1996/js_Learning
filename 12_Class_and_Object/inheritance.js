class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username is ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password 

    }
    addCourse(){
        console.log(`new course added by ${this.username}`)
    }
}

const objTech = new Teacher("nidhi","nidhi.gmail.com","123")

console.log(objTech.logMe())
console.log(objTech.addCourse())