//Double each number in an array (using map)

// const array = [12,13,16,17,19];

// const check = array.map((item)=>{
//   return item * 2;
// })

// console.log(check);

// Get Only even Number Using Filter

// const array  = [12,14,15,17,20,22];

// const check = array.filter((item)=>{
//     return item % 2 === 0
// })

// console.log(check);

// Find the Number Length > 8 Using Filter

// const array = ['Pranjal', 'PranjalSingh',"Tannu",'TannuSinghYadav',"Ayusi","AyusiGupta"];

// const check = array.filter((item)=>{
//        return item.length < 8
// })

// console.log(check);

// Add ₹10 to each product price (using forEach

// const array = [12,200,300,400,500,600];

// const newcheck = array.forEach((item)=> item + 10);
// console.log(newcheck);


// const array = [12,26,27,28,30];

// const check = array.forEach((item , index , arr)=>{
//     console.log(arr)
//     index[item] = arr +10;
// })
// console.log(check);


// const array = [12,23,24,27]
// const a = array.forEach((item) => {
//   item = item + 10; // Add the current item to the external 'sum' variable
// });

// console.log(`The total sum of the array is: ${a}`);


//Convert array of names to uppercase (using map)

// const check = ["pranjal","singh"];

// const check2 = check.map((item)=>{
//   return item.toUpperCase();
// })
// console.log(check2);

// let prices = [50, 100, 150, 200];

// prices.forEach((price, index, arr) => {
//   arr[index] = price + 10; // add ₹10 to each price
// });

// console.log(prices);

// const array = [50,100,20,340,40]

// array.forEach((item , index , arr)=>{
//    arr[index] = item + 10;
// })
// console.log(item);

// add 10 and then add +1 on them and use filter in map;

const newcheck = [12,13,14,15,16,17,18,19,20];

// const check = newcheck.map((item)=>{
//             return item + 10;
// })
// console.log(check);

const check = newcheck.map((item)=> item + 10)
                       .map((item)=> item + 1)
                       .filter((item) => item <= 25);

                       console.log(check);