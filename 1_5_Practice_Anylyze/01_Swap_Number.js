/* let a = 5;
let b = 6;

let c = b;
b = a;

console.log(`${b} And ${c}`);*/

/* let a = 4;
let b = 12;

const swap  = (num1 , num2) =>{
     num1 = a;
     num2 = b;
    console.log(num1 , num2);
}
swap(); */

/* let a = 4;
let b = 12;

const swap = () => {
  a = a + b;
  b = a - b;
  a = a - b;
  console.log(a, b);
}

swap(); */

/*Correct Swap (Without Third Variable)

Strings ko hum concatenate + slice se swap kar sakte hai:

let a = "Pranjal";
let b = "Hello";

a = a + b;       // "PranjalHello"
b = a.slice(0, a.length - b.length); // "Pranjal"
a = a.slice(b.length); // "Hello"

console.log(a, b);


Output:

Hello Pranjal
*/
