// const mypromise = new Promise(function(resolve , reject){
//          setTimeout(()=>{
//             const data = {
//                 name : "Pranjal",
//                 Age : "21"
//             } 
//             resolve(data);
//             reject(data);
//          },1000);
// })

// mypromise.then(function(result){
//       console.log("Resolve :" , result)
// }).catch(function(err){
//    console.log("Failed" , err);
// })

new Promise(function(resolve , reject){
    setTimeout(() => {
         let error = false;
         if(!error){
            resolve({name : "Pranjal" , Age : "22"})
         }else{
            reject("Error ! Something Went Wrong");
         }
    }, 1000);
}).then((user)=>{
   console.log(user);
}).then((username)=>{
    console.log(username);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log('The Promises Has Been Done or Reject')
});