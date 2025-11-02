/* let price = 300;
let quantity = 6;

let total = price * quantity;

if(total > 1000){
  let discount = total * 0.10;
  total = total - discount;
  console.log("10% Discount Applied")
}else{
    console.log("No Discount");
}

console.log("Final Bill :", total); */


/* let price = Number(readline("Enter the Price : "));
let quantity = Number(readline("Enter the Quantity Of the Product: "));

let total = price * quantity;

console.log("Orginal Price Of the Product : " , total)
console.log("Quantity Of the Product Is: ", quantity)

if(total > 1000){
    let discount = total * 0.10;
    total = total - discount;
    console.log("10% Discount Applied");
}else{
    console.log("No Discount");
}

console.log("Final Billl After Discount: ", total); */




/* const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter price: ", (priceInput) => {
  rl.question("Enter quantity: ", (quantityInput) => {

    let price = Number(priceInput);
    let quantity = Number(quantityInput);
    let total = price * quantity;

    console.log("Original Price:", total);

    if (total > 1000) {
      let discount = total * 0.10;
      total = total - discount;
      console.log("10% Discount Applied");
    } else {
      console.log("No Discount");
    }

    console.log("Final Bill:", total);
    rl.close();
  });
});
 */


 let age = 19;
    let result = age >= 18 ? "Adult" : "Eligible";
    console.log(result);