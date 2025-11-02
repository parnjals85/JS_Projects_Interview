// // const check = document.getElementById('Hello').innerHTML = "Hello Sunny";
// // document.getElementById('check').innerText = "Mukti Nandan";
// // document.getElementById('color').onclick = () =>{
// //     document.getElementById('color').style.background = 'Red';
// // }

// // document.getElementById('hello').innerHTML = "Hello Pranjal See You";
// // document.getElementById('color').onclick = () =>{
// //         document.body.style.backgroundColor = 'Red';
// // }



// /*Query Selector - selcet the first element of tag,class,name 
//  Query Selector - select the All element available in the webpage - tag , class , name etc.
//  And Query Selector Alwayd Give Node List rember Not Array Node list both are differnet and when we tell them
// to change their styling they change by below example.
// */
// //document.querySelector('h1');


// // const myul = document.querySelector('ul');
// // const myli = myul.querySelector('li').style.backgroundColor = 'Green';
// // myul.querySelector('li').style.padding="10px"

// // const check = document.querySelectorAll('h1');

// // check[0].style.color = ' green '


// // const checkcolor = document.querySelectorAll('.check');

// // checkcolor.forEach((l)=>{
// //       l.style.background = 'green';
// // })


// /* Now its Time for the - Collection use and change into array becoause in Dome they Give Us Node
// List  */

// // const check = document.getElementsByClassName('color');
// // Array.from('check');

// //const bomb = [...(document.getElementsByClassName('color'))];
// // const bomb = document.getElementsByClassName('color');
// // const check2 = Array.from(bomb);
// // check2.forEach((li)=>{
// //    li.style.color = 'orange';
// // })


// // Children check

// const check2 = document.querySelector('.parent');

// //console.log(check2); //parent 

// //console.log(check2.children[0].innerHTML);   children acces

// // classical loop on dom

// // for(let i = 0 ;i< check2.children.length ; i++){
// //     console.log(check2.children[i].innerHTML);
// // }

// // FirstElement Child and Last ElementChild

// // console.log(check2.firstElementChild);
// // console.log(check2.lastElementChild)


// // Go to the Direct Parent and Sibling(bhai)
// const check = document.querySelector('.div');
// // console.log(check.parentElement);
// // console.log(check.nextElementSibling);

// // console.log(check.parentNode);


// /// Create a Element in js (Dome)

// const div = document.createElement('div');
// console.log(div)
// div.className = 'main'
// div.id = Math.round(Math.random() * 10 +1 );
// div.style.backgroundColor = 'green';
// div.style.padding = '12px'

// const addtext = document.createTextNode("Hello Pranjal");
// div.appendChild(addtext);
// document.body.appendChild(div);

// const add = document.getele('check');

// add = () =>{
//     document.createElement('li');
//     li.className = "li"
//     li.id = '8'
//     li.style.background = 'blue'
//     const addtext = document.createTextNode('Hello');
//     li.appendChild(addtext);
//     document.body.append(li);
// }


// function addclass(language){
//  const li =  document.createElement('li');
//  const checking = document.createTextNode(language);
//  li.appendChild(checking);
//  document.querySelector('.Parent').appendChild(li);
// }
// addclass("Pranjal");
// addclass("Janvi");
// addclass("Bhupati");
// addclass("Check");

function addnode(language){
    const li = document.createElement('P');
    const checking = document.createTextNode(language);
    li.appendChild(checking);
    document.querySelector('.Parent').appendChild(li);
    li.style.background = "Green";
    li.style.padding = '15px';
    li.style.fontFamily = 'Arial';
}
addnode("Pranjal"); 
addnode("Pranjal"); 
addnode("Pranjal"); 


// edit the text node
const secondlang = document.querySelector('P:nth-child(3)');
secondlang.innerHTML = "Hello";

// add outerhtml
const change = document.querySelector('P:nth-child(2)');
change.outerHTML = "<i>Piyush</i>";

// delete the node
const change2 = document.querySelector('P:last-child');
change2.remove();






