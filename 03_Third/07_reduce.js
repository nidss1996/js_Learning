// reduce 

const myCode = [1,2,3]
 const result2 = myCode.reduce(function (acc, currenval) {
   // console.log(`accumulator ${acc} and currecnt value ${currenval}`)
    return acc + currenval

}, 0)

//console.log(result2)
 
let currentInd = 1
const result3 = myCode.reduce( (acc ,currenval) => acc + currenval , currentInd)
console.log(result3)