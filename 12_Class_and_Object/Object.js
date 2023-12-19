// function is also a Object 
function mumtiply5(num){
    return num *5 
}
mumtiply5.power = 2
// console.log(mumtiply5(2))
// console.log(mumtiply5.power)
// console.log(mumtiply5.prototype)
//console.log(mumtiply5.length)

function createUser(username, score){
    this.username = username;
    this.score = score
}
createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe= function(){
   console.log(`price is ${this.score}`)
}
const chai =  new createUser("chai",25)
const tea =  new createUser("tea", 150)
chai.printMe()
tea.printMe()