function setUserName(username){
    this.username = username
    console.log("method Called")
}
function createUser(username, email, password){
    setUserName.call(this, username)
    this.email = email
    this.password = password
    //console.log(this)
}

const user = new createUser("nidhi","nidhi.google.com","123")
console.log(user)