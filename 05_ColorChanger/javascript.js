 const button = document.querySelectorAll('.button')
//console.log(button)
button.forEach(function(btn){
    btn.addEventListener('click', function(e){
        //console.log("nidhi")
        //console.log(e)
        //console.log(e.target)
        if(e.target.id === 'grey')
        {
           document.body.style.backgroundColor = e.target.id
           document.body.style.color = "white"
        }

        if(e.target.id === 'yellow')
        {
           document.body.style.backgroundColor = e.target.id
           document.body.style.color = "black"
        }
        if(e.target.id === 'blue')
        {
           document.body.style.backgroundColor = e.target.id
           document.body.style.color = "white"
        }
        if(e.target.id === 'white')
        {
           document.body.style.backgroundColor = e.target.id
           document.body.style.color = "black"
        }

    })

});
    


