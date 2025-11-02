/// for loops
/*for(let i = 1; i<=5 ; i++){
    console.log(i);
}*/

// While loop

/*let i = 1;
while (
    i<=5
) {
    console.log(i);
    i++
}
*/
// why we use for mainly not while 

/* let i = 1;
do{
    console.log(i);
    i++;
}while(i <= 5); */

// For Of.....Array ke liye

/* let arr = ['Apple' , "Banana" , "Grapes"];

for(let fruit of arr){
    console.log(fruit);
} */


// For in for Object 

let person = {name : "Rahul" , age : '20'};

for(let key in person){
    console.log(key , person[key]);
}


// Break Loop ko turrant rokta hai

// continue iteration skip krta hai