//var a = 300
let B = 400 // Global 
//const c = 40

if(true){

    var a = 10
   let b = 20 // block
   const c= 30 
//    console.log("Inner", a)
//    console.log("Inner", b)
//    console.log(c)
}
//console.log(a)
//console.log(b)
//console.log(c)

function one(){
    const userName = " Nidhi"
    function two(){
        let webSite = "youtube" // local 
        console.log(userName)
    }

    //console.log(webSite)

    //two()
}

//one()

// Scope in If condition 

if(true){
    const username = "Nidhi"
    if(username === "Nidhi")
    {
        const website = "youtube"
        console.log(username + website)
    }
    //console.log(website)
}

//console.log(userName)

// ############# function hosting ###############

//console.log(addOne(5))
function addOne(num){
    return num + 1

}

// function expression 
//console.log(addTwo(7))
const addTwo = function(num){  
    return num +2 
}


