const form = document.querySelector('form');

form.addEventListener('submit' , function(e){
    e.preventDefault();

   const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if(height === " " || height < 0 || isNaN(height)){
        results.innerHTML = `Please Enter the Valid Height ${height}`;
    }else if(weight === " " || weight < 0 || isNaN(weight)){
            results.innerHTML = `Please Enter the Valid Weight${weight}`;
    } else {
        const Bmi = (weight / ((height * height)/10000)).toFixed(2);
        results.innerHTML = `<span>${Bmi}</span>`

        // Show to User you are in underweight or not
     
        if(Bmi < 18.6 ){
        alert("You are UnderWeight")
    }else if(Bmi > 18.6 && results <=24.9){
        alert("You are Normal weight")
    }else{
        alert('Oh! You are Over Weight');
    }
}
})