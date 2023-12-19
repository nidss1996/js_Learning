// class User {
//     constructor(username, email,password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }
//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUserName(){
//         return this.username.toUpperCase()
//     }
// }

// const obj = new User("nidhi","nidhi@gmail.com","123")
//  console.log(obj.changeUserName())
//  console.log(obj.encryptPassword())

 //Behind the Scene

 function User(username, email, password){
    this.username = username
    this.email = email
    this.password = password
 }

 User.prototype.encryptPassword = function(){
    return `${this.password}abc`
 }

 User.prototype.changeUserName = function(){
    return this.username.toUpperCase()
 }
 
 const obj1 = new User("nidhi","nidhi@gmail.com","123")
 console.log(obj1.changeUserName())
 console.log(obj1.encryptPassword())
