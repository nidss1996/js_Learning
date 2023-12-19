// create a object literal and use it 
let name ="Neha";
const user = { 
    username:" Nidhi",
    logingCount:7,
    signedIn:true,

    getUserDetails: function(){
        //console.log("Got user details")
        // console.log(`username : ${this.username}`)
        // console.log(this)
    }
}
// console.log(this)
// user.getUserDetails()

//###### use of Constructor function : create a constructor function of same function using new keyword.
// create a new instacne always 
function User(username,logingCount,isLoggedIn){
    this.username = username;
    this.logingCount = logingCount;
    this.isLoggedIn = isLoggedIn;

    return this
}
const userOne =  new User("Nidhi",9,true)
const userTwo = new  User("Nidss",7,false)

console.log(userOne.constructor) // give detail about itself only


// Notes : New Keyword 
// step1 : it create a empty object everytime.
//stpe 2 : it call a constructor function 
//step 3 : it will add all data or value to this object
// last step: return this 
