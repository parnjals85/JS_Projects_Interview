const mynumber = [1,2,4,5,6,7,8];

// const newnumber = mynumber.filter((num) => num % 4 === 0)
// console.log(newnumber);


// const newnumber = mynumber.filter((num)=>{
//        return num > 4;     // Jab ham bracket me likhte hai then - hame return lagana hota hai explicit return
// }) 

// console.log(newnumber)

// const check2 = mynumber.filter((item)=>{
//   return item+10;
// })
// console.log(check2);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  // Aisa boook Jiks genere History Ho.

  //let userbook = books.filter((bk)=> bk.genre === 'History')

  // Aisa Book Jo publish hua 2000 ke baad
  let userbook = books.filter((bk) => {
    
    return  bk.publish > 2000 && bk.edition > 2000  &&  bk.genre === 'History';
})
   
console.log(userbook);


