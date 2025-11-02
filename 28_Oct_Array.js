/*
Simple Array
let fruit = [12,14,15];
console.log(fruit[0]);*/

// Loop In array

/*let array = [10,20,30];
for(let i=0 ; i<array.length ; i++){
    console.log(array[i])
}*/

/* let users = [
    {
        name : "Pranjal"
       
    },
    {
     age : 12
    }
]
console.log(users[0].name); */

/*let items = []; // empty array initially

function showList() {
  console.log("🧾 Current List:", items);
}

function addItem(item) {
  items.push(item);
  console.log(`✅ '${item}' added successfully!`);
  showList();
}

function removeItem(item) {
  const index = items.indexOf(item);
  if (index !== -1) {
    items.splice(index, 1);
    console.log(`❌ '${item}' removed successfully!`);
  } else {
    console.log(`⚠️ '${item}' not found in list.`);
  }
  showList();
}

// Example Run:
addItem("Apple");
addItem("Banana");
addItem("Mango");

removeItem("Banana");
removeItem("Orange");*/

/* let array = [];

function showList(){
    console.log(array);
}

function addItem(arrays){
    arrays.push[arrays];
    console.log("Items Added Sunncefully")
    showList();
}

(arrays) =>{
   const index = array.indexOf(arrays);
   if(index !== -1){
    arrays.splice(index,1);
    console.log("Item removed Sunccessflully");
   }else{
    console.log("Doest Not Fine Items");
   }
   showList();
}

addItem('mango');
addItem("Banana");
addItem("Sweetpotato");
addItem("Ginger");

("Banana");
("mango"); */

/* let array = [];

function showList() {
  console.log(array);
}

function addItem(item) {
  array.push(item);
  console.log("Item Added Successfully!");
  showList();
}

const removeItem = (item) => {
  const index = array.indexOf(item);
  if (index !== -1) {
    array.splice(index, 1);
    console.log("❌ Item Removed Successfully!");
  } else {
    console.log("⚠️ Item Not Found!");
  }
  showList();
};

// 🧩 Testing:
addItem("Mango");
addItem("Banana");
addItem("Sweetpotato");
addItem("Ginger");

removeItem("Banana");
removeItem("Mango");
 */

/* et num = [12,23,24,24,25,25,77];

function showList(){
    console.log(num);
}
// Duplicate Array

function change(item){
    const index = num.indexOf(item);
    const filters = num.filter(item);
    console.log(filters);
   showList();

}
change(); */

let num = [12, 23, 24, 24, 25, 25, 77];

function removeDuplicates() {
  // filter() will keep only the first occurrence of each element
  let unique = num.filter((item, index) => {
    return num.indexOf(item) === index;
  });

  console.log("✅ Unique Elements:", unique);
}

removeDuplicates();



















