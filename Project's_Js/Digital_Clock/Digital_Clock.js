const time = document.querySelector('#clock');

setInterval(function(){             // setInterval is method in js -- those hold the function and then after interval they start the function
    const result = new Date();
    //console.log(result.toLocaleTimeString());
   time.innerHTML = result.toLocaleTimeString();   // toLocaleString is a method -
    
} , 1000);