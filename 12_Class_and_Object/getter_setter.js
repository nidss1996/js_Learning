// get method : use to get value from an object 
// set method : set the value to the object variable 
// for each variable or property getter and setter method is defaultly present

class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }
    get password(){
        return this._password.toUpperCase()
    }

    set password(value)
    {
        this._password = value
    }
}

const obj = new User("nidhi@gmail.com", "nidhi")
console.log(obj.password)