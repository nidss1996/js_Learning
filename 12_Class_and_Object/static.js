class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username is ${this.username}`)
    }
// it will restrict its own obj to access this method
    static createId(){
        return `123`
    }
}

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email

    }
    addCourse(){
        console.log(`new course added by ${this.username}`)
    }
}

const obj = new User("Nidhi")
//console.log(obj.createId())
const objtech = new Teacher("Neha","neha@gmail.com")
console.log(objtech.createId())