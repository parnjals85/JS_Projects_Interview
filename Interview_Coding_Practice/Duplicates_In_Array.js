let str = [12,12,34,34,56,67,89,67];
let newarray = [];

for(let i = 0 ; i<str.length ;i++){
    if(!newarray.includes(str[i])){ 
        newarray.push(str[i]); 
    }
}

console.log(newarray);