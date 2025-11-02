(function start(){
    console.log(`DB connected`);
})(); // Named IIFE

((Start)=>{
    console.log(`DB Connected ${Start}`);
})("Hello")  // Empty IIFE 