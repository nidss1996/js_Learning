let form = document.querySelector('form')
form.addEventListener('submit',function(event){
    event.preventDefault(); // Prevents the default form submission
    let height =parseInt (document.getElementById("height").value);
    let weight = parseInt(document.getElementById("weight").value);
    let result = document.querySelector('#result')
    // if(height === '' || height < 0 || isNaN(height))
    // {
    //   result.innerHTML = `Please enter valid Height ${height}`;
    // }elseif(weight === ''|| weight <0 || isNaN(weight))
    // {
    //     result.innerHTML = `Please enter valid weight ${weight};
    // }
    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `Please enter valid Height ${height}`;
    } else if (weight === '' || weight <0 || isNaN(weight)) {
        console.log( `please enter valid weight ${weight}`);
    } else {
        // BMI = kg/m*m
        const bmi = (weight/((height*height)/10000)).toFixed(2)
        result.innerHTML = `<span>${bmi}</span>`
        if(bmi <18.6){
            result.innerHTML = `<span> Person is under weight ${bmi}</span>`;
        }else if(bmi>=18.6 && bmi <24.9 ){
            result.innerHTML = `<span> Person is normal weight ${bmi}</span>`;
        }else{

            result.innerHTML = `<span> Person is over weight ${bmi}</span>`;
        }


        //  const guide = document.querySelector('#weight-guide')
        //  for (let i = 0; i < guide.children.length; i++) {
        //     const val1 = guide.children[i].innerHTML
        //     console.log(val1)
            
        //  }
    
    }

});

// document.getElementById("myForm").addEventListener("submit", function(event) {
//     event.preventDefault(); // Prevents the default form submission

//     // Retrieve form values
    

//     // Perform any additional processing or validation here

//     // For demonstration purposes, log the values to the console
    

//     // Add code here to send the form data to a server (e.g., using AJAX)
// });