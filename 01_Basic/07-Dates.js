// Dates 
let mydate = new Date()
// console.log(mydate)
// console.log(mydate.toString())
// console.log(mydate.toDateString())
// console.log(mydate.toLocaleDateString())
// console.log(mydate.toLocaleString())

// how to create a date 

let myCreatedDate = new Date(2023 , 0 , 25)
// console.log(myCreatedDate.toDateString())
myCreatedDate = new Date(2023 , 0 , 26 , 12, 43 , 14)
// console.log(myCreatedDate.toLocaleString())

myCreatedDate = new Date("2023-01-15") // get the date in given format 
//console.log(myCreatedDate.toDateString())
let timeStamp = Date.now()
// console.log(timeStamp)
// console.log(myCreatedDate.getTime()) // get the time in milisecond 
// console.log(Math.floor(Date.now()/1000))

myCreatedDate.toLocaleString('default', {
   weekday:"short", month:"short"})

console.log(myCreatedDate)




