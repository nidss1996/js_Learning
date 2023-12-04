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
    //console.log(item, index, arr)
})

const myArrayOfObject = [
    {
        languageName: "JavaScript",
        languageFileName: "js"
    },
    {
        languageName: "C##",
        languageFileName: ".c"
    },
    {
        languageName: "HTML",
        languageFileName: ".html"
    },
    {
        languageName: "JavaScript",
        languageFileName: "js"
    }
]
myArrayOfObject.forEach((item) =>{
    //console.log(item.languageName)

})

 const result = myArrayOfObject.forEach((item) => {
    
    //console.log(item.languageFileName)
    return item
 })
 //console.log(result)

 // Filter : we can return the array value 

 const tryWithFilter = [1,2,3, 4, 5, ,6, 7,8,9]
  const result1 = tryWithFilter.filter((num) =>{
     return num > 4 
  })
  console.log(result1)




