const  mypromise = new Promise((resolve , reject)=>{
      setTimeout(() => {
          let error = true;
          if(!error){
            resolve({name : "Pranjal Jio" , Age : "22"})
          }else{
            reject("Sorry!! Something Went Wrong")
          }
      }, 3000);
})

async function  check() {
     try{
        const resopnese = await mypromise;
        console.log(resopnese);
     }catch(error){
        console.log(error);
     }
}

check();