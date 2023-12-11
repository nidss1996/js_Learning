//console.log("Hello Again")
let randomNumber = parseInt(Math.random() * 100) + 1;
console.log(randomNumber);
const submit = document.querySelector('#sub')
const userInput = document.querySelector('#guessNumber')
const preGuess = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const valLowOrHigh = document.querySelector('.Loworhigh')
const startOver = document.querySelector('.resultParas')
const p = document.createElement('p')
let guessList = []
let numGuess = 1
let playGame = true 
//List of Methods 
if(playGame){
    submit.addEventListener('click',function(event){
        event.preventDefault();
         const inputnumber = parseInt(userInput.value)
         console.log(inputnumber)
         validateGuess(inputnumber)

    })
}

function validateGuess(inputnumber){
    if(isNaN(inputnumber))
    {
           alert('please enter a number')
    }else if(inputnumber <1 ){
        alert('please enter a number greater or equal to 1')
    }else if(inputnumber>100){
        alert('please enter a number less or equal to 100')
    }else if(inputnumber === ''){
        alert('please enter a number between 1 to  100')
    }else{
        guessList.push(inputnumber)
        if(numGuess === 11){
            cleanupGuess(inputnumber)
            displayMessage(`Game Over, random number was ${randomNumber}`)
            endGame()
        }else{
            cleanupGuess(inputnumber)
            checkGuess(inputnumber)
        }
    }


}
function checkGuess(inputnumber){
    if(inputnumber === randomNumber )
    {
        displayMessage(`you guessed it right, won the game !`)
        endGame();
    }else if(inputnumber > randomNumber){
        displayMessage(`Number is Too High`)
    }else if(inputnumber < randomNumber){
        displayMessage(`Number is Too Low`)
    }

}

function cleanupGuess(inputnumber){
 userInput.value = ''
 preGuess.innerHTML = `${guessList}`
 numGuess++
 remaining.innerHTML = `${11 - numGuess}`

}

function displayMessage(message){
    valLowOrHigh.innerHTML = `<h3>${message}</h3>`

}
function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = '<h4 id="newgame">Start New Game</h4>';
    startOver.appendChild(p);
    playGame = false;
   newGame();

}

function newGame(){
    let newgameButton = document.querySelector('#newgame')
    newgameButton.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random() * 100) + 1;  
        guessList = []
        numGuess = 1
        preGuess.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true

    })

}