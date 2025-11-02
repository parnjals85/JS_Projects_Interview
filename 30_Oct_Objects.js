// // const mysym = Symbol("hello Pranjal") // Symbol Using 
// // let Object = {
// //         "name" : "pranjal",
// //         "class" : 12,
// //         "Full Name":"Pranjal Singh",
// //         [mysym] : "Pranjal_Bhusan",
// //         Address : "Marui",
// //         DOB : 30/8/2003,
// //         Designation : "Software Developer"
// // }

// // console.log(Object.name);
// // console.log(Object.class);
// // console.log(Object["Full Name"]); // [] Use bracket as well for acces the Object's
// // console.log(typeof mysym)
// // console.log(typeof Object[mysym]);  // Constructor Calling

// // Objects -- Combine or merge

// const obj1={
//     c : "Pranjal",
//     p : 12
// }
// const obj2 = {
//     name : "Shreya Singh",
//     Class : 16
// }

// // const obj3 = Object.assign( obj1 , obj2);
// // console.log(obj3);

// // Spread Operator

// const obj3 = {...obj1,...obj2};
// console.log(obj3);
// // const tinderUser = new Object()
// const tinderUser = {}

// tinderUser.id = "123abc"
// tinderUser.name = "Sammy"
// tinderUser.isLoggedIn = false

// // console.log(tinderUser);

// const regularUser = {
//     email: "some@gmail.com",
//     fullname: {
//         userfullname: {
//             firstname: "hitesh",
//             lastname: "choudhary"
//         }
//     }
// }

// // console.log(regularUser.fullname.userfullname.firstname);

// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "a", 4: "b"}
// const obj4 = {5: "a", 6: "b"}

// // const obj3 = { obj1, obj2 }
// // const obj3 = Object.assign({}, obj1, obj2, obj4)

// const obj3 = {...obj1, ...obj2}
// // console.log(obj3);


// const users = [
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
// ]

// users[1].email
// // console.log(tinderUser);

// // console.log(Object.keys(tinderUser));
// // console.log(Object.values(tinderUser));
// // console.log(Object.entries(tinderUser));

// // console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// const course = {
//     coursename: "js in hindi",
//     price: "999",
//     courseInstructor: "hitesh"
// }

// // course.courseInstructor

// const {courseInstructor: instructor} = course

// // console.log(courseInstructor);
// console.log(instructor);

// // {
// //     "name": "hitesh",
// //     "coursename": "js in hindi",
// //     "price": "free"
// // }

// [
//     {},
//     {},
//     {}
// ]
// const student = { name: "Aman", grade: "A" };
// student.city = "Delhi";
// delete student.grade;
// console.log(student);

// const obj = { a: 1, b: 2 };
// const copy = { ...obj, c: 3 };
// console.log(copy);


// // Objects - Create a student object, access/update properties program.

// const obj1 = {
//     name : "pranjal",
//     class : 12,
//     Address : "Marui , Varanasi"
// }

// const obj2 =  Object.keys(obj1).length;
// const obj3 = Object.values(obj1).length;

// console.log(`Keys :- ${obj2} and  Value :- ${obj3}`);

// Object to Array entry

// const obj1 = {
//       name : "pranjal",
//       class : 12,
//       Address : "Marui , Varanasi"
// }

// const obj2 = Object.entries(obj1);
// console.log(obj2);


// Objects - Create a student object, access/update properties program.

const check = {
    name : "Pranjal",
    Age : 22,
    DOB : "30/8/2003",
    Class : 12,
    Grade : "A"     
}
// Access the Whole Oject
//console.log(check);
//console.log(check.name);
//console.log(check.DOB);

// check.name = "Pranjal Singh";
// console.log(check.name);

// const check2 = Object.entries(check);
// console.log(check2); 


