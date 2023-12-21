// const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descriptor);
const chai = {
    name: 'adarak tea',
    price: 100,
    isAvailable: true,
    orderChai:function(){
        console.log("chai nahi bani")
    }

}
Object.defineProperty(chai, 'name',{
    writable: false,
    enumerable:true

})
console.log(chai.name = "chai")
const descriptor = Object.getOwnPropertyDescriptor(chai, "name")
//console.log(descriptor);

for (let [key,value] of Object.entries(chai)) {

    if(typeof value !== 'function' )
    {
        console.log(`${key}: ${value}`)
    }
    
    
}
    





   