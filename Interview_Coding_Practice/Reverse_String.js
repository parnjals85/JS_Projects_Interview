// const str = 'Pranjal';
// const reverse = str.split('').reverse().join('');
// console.log(reverse);


// Reverse The Array

// const arr = [1,2,3,4,5,6];
// const reverse = []
// for(let i = arr.length - 1 ; i>=0 ;i--){
//     reverse.push(arr[i]);
// }
// console.log(reverse);

const str = 'Pranjal';
let reverse = '';
for(let i = str.length-1 ; i>=0 ; i--){
    reverse += str[i]
}

console.log(reverse);