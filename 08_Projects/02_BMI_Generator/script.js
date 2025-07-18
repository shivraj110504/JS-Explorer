const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results')
    const message = document.querySelector('#message')


    message.innerHTML = ''; // Clear previous messages

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `please give the valid height ${height}`
    } else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `please give the valid weight ${weight}`
    }else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)

        //show the result
        results.innerHTML = `<span>${bmi}</span>`;

        if(bmi < 18.6){
            message.innerHTML = `<span>${'Under Weight'}</span>`
        }else if(bmi >= 18.6 && bmi < 24.9){
            message.innerHTML = `<span>${'Normal Range'}</span>`
        }else{
            message.innerHTML = `<span>${'Overweight'}</span>`
        }
    }
    
})