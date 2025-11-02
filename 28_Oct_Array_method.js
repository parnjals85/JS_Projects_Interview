/* //
let a = [12,13,14,15,16,17];
console.log(a.length);
/* a.push(21);
console.log(a);
a.pop();
console.log(a);
a.unshift(12);
console.log(a);
a.shift(); */
/*console.log(a);

console.log(a.includes(50));
console.log(a.indexOf(22));

const newarray = [12,14,23,65,65];
console.log(typeof newarray);
console.log(typeof newarray.join());
*/
//Splice

/*let fruits = ["Apple", "Banana", "Mango", "Kiwi"];
let removed = fruits.splice(1, 2, "Orange", "Grapes");

console.log("Removed:", removed); 
// ["Banana", "Mango"]

console.log("After splice:", fruits); 
// ["Apple", "Orange", "Grapes", "Kiwi"]*/

/* let fruits = ["Apple","Bananana","Mango","Kiwi"];
let a = fruits.slice(2,3);
console.log(fruits);
 */

/* let colors = ["Red", "Green", "Blue", "Yellow"];
colors.splice(1, 1, "purple");
//array.splice(startIndex, deleteCount, itemToAdd1, itemToAdd2, ...);
console.log(colors); */

/* let colors = ["Red","Green","Purple","Yellow"];
let sliced= colors.slice(1,3);
console.log(sliced); */

/*let fruits = ["Apple", "Banana", "Mango", "Kiwi"];
let newFruits = fruits.slice(1, 3);

console.log("New:", newFruits);
// ["Banana", "Mango"]

console.log("Original:", fruits);
// ["Apple", "Banana", "Mango", "Kiwi"]*/

//concate --

let marvel = ['Spiderman',"ironman",'thor'];
console.log(marvel);
let dc = ['Superman','Aquaman','batman'];
console.log(dc)
/* console.log("After Merging");
const check = marvel.concat(dc);
console.log(check)
 */
// One more method -- without using concate

const newcheck = [...marvel , ...dc];
console.log(newcheck);



