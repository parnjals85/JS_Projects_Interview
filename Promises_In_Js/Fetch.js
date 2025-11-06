// const url = "https://api.github.com/users/parnjals85";

// fetch(url)
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Network response was not ok " + response.statusText);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log("User data:", data);
//   })
//   .catch((error) => {
//     console.error("Fetch error:", error);
//   });


async function check() {
    try{
         const url = await fetch ('https://api.github.com/users/parnjals85');  // declare varible
         const data = await url.json();     // Data convert into Json
         console.log(data);     // Print API
    }
    catch(erro){
              console.log("Ahh! Something Went Wrong !" , erro);   // For Errror!
    }
}

check();