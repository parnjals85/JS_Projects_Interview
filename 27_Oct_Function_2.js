/*function greet(){
    console.log(1);
    console.log(1);
    console.log(1);
    console.log(1);
    console.log(1);
    console.log(1);
}

greet();*/
/*
function addTwoNumbers(num1 , num2){
    console.log(num1);
    return num1 + num2;
}
let result = console.log(addTwoNumbers(12,12));*/

// User Loin Hua messege to ki h login ho gya
/*
function userlogin(userlogins){
    if(!userlogins){
        console.log("Please enter the Value");
        return;
    }
    return `${userlogins} Just Logged In`;
}
console.log(userlogin());*/

// Spread Operator(...)

/*function cart(val1 , val2 , ... num1){
    return num1;
}

console.log(cart(12,13,14,15));*/


// Obj using function

/*const hello = {
    name : "Pranjal",
    Address : "marui",
    Price : "1299"
}

function hi(objget){
    return objget;
}
console.log(hi(hello.name));*/

/*
let a;

function greet(){
     return a;  // Access global Variable in Function.
}
console.log(greet("Hello")); // Cal in them*/

/*function good(){
    var mor = 12  // Decalre in f(x) local Variable
    console.log(mor); // acccesible
    }

  console.log(good(mor));  // Not accessible 


  if(true){
    let a = 10; 
    var b = 20;
}

console.log(a);
console.log(b);*/ 








/*
const pranjal = {
    name : "Pranjal",
    Price : 299,
    address : "Varanasi" ,

     Show : function(){
        console.log(this.name);
        console.log(this);
    }
}*/

//pranjal.Show();


/* const pranjal = {
    name : "Sukla",
    showname : function(){
         const show = () =>{
        console.log(this)
    }
    show();
}
}
console.log(pranjal.name); */

//console.log(typeof function(){});

const pr ={
    name : "Hello Pranjal",
    Address : "Marui , Varanansi",
    showname : function(){
      const show = () =>{
            console.log(this.name);
            console.log(this);
        }
        show();
      }
      
}
pr.showname();