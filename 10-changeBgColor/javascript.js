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

const startchangeBgColor = function(){
  const stratChangeColor = function(){
    color = '#'
   let hashVal = getRandomColor()
   document.body.style.backgroundColor = `${hashVal}`
}
 if(!intervalId ){
  intervalId=  setInterval(stratChangeColor,2000)
 }
  
  
};

const stopchangBgColor = function(){

  clearInterval(intervalId)
  intervalId = null // default meaning is fales
  console.log(intervalId)
};
        // const sayDate = function(str){
        //    console.log(str, Date.now())
        // }
      // 
       const start = document.querySelector('#start').addEventListener('click',startchangeBgColor)
         //intervalId=  setInterval(stratChangeColor,2000)
       

       const stop = document.querySelector('#stop').addEventListener('click',stopchangBgColor)
        
        