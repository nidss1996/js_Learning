let intervalId
const letters = '0123456789ABCDEF'
let color = '#'
function getRandomColor(){
    for(i=0; i<6 ; i++){
        color += letters[Math.floor(Math.random()*16)]
    }
    console.log(color)  
    return color 
}
  const stratChangeColor = function(){
        color = '#'
       let hashVal = getRandomColor()
       document.body.style.backgroundColor = `${hashVal}`
  }
  
        const sayDate = function(str){
           console.log(str, Date.now())
        }
      // 
       const start = document.querySelector('#start').addEventListener('click',function(e){
         intervalId=  setInterval(stratChangeColor,2000,"hey")
       })

       const stop = document.querySelector('#stop').addEventListener('click',function(e){
        clearInterval(intervalId)
        console.log("no data")
       })