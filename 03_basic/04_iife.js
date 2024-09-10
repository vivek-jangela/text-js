//Imediately invoked function expresion(IIFE)

// function chai(){
//     console.log(`db connect`);
    
// }
// chai()
(function chai(name){
    //named IIFE
    console.log(`db connect ${name}`);
    
})('vivek');

( () =>{
    console.log(`db connected`);
    
})()