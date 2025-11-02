const arr = [1,2,3,4,5,6,7,8];
let num = 0;
for (const array of arr) {
    num+= array;
   // console.log(array)
}

const greetings = 'Hello World';
for (const greet of greetings) {
    //console.log(greet);
} 

const map = new Map()
map.set('IN',"India");
map.set('USA',"USA states of America");
map.set('Fr',"France");
map.set('IN','India');

//console.log(map);


/*const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }*/


//for object we should change the --

const array = [
    {
        game : "FreeFire",
        shooter : "Prranjal",
    }
]

for (const key of array) {
   console.log(key);
}

/* const obj = {
    name : "Pranjal",
    Place : "Marui"
}

for (const [item , value] of obj) {
    // console.log(item , value);
} */

// const posh = [1,2,3,4,"Green",1,12];

// for (const item of posh) {
//     console.log(item);
// }

