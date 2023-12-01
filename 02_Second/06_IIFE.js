// Immediately invoked function expression : is used to prevent your code from globally declared variables
// and it is aslos used to invoked the function at same time when it is created

// Named IIFE
(function chaiCode(){
    console.log("Welcome to chai and code")
})();
// () () - first is to write function defination inside and second() is for execution 

(function chaiandCode(){
    console.log("Welcome to chai and code part 2")
})(); // end of first function 

// arrow function/ unnamed IIFE

( (name) =>{
    console.log(`welcome here again ${name}`)
})("Nidhi")