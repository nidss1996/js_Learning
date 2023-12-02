// for each loop 

const coding = ["java", "Python", "C++", "C#"]
coding.forEach(function (item) {
    //console.log(item)
})
// arrow function 
coding.forEach((item)=>{
   //console.log(item)
})

// function printMe(item){
//     console.log(item)

// }

// coding.forEach(printMe)
coding.forEach((item, index, arr) =>{
    console.log(item, index, arr)
})