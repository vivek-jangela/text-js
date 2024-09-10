//if

const isuserloggrdin = true
if(2 !=3){
    // console.log("executed");
    
}
// if (temperature ===41) {
//     console.log("less than 50");
    
// }else{
//     console.log("temperature is >50");
    
// }
// console.log("executed");

//<,>,<=,>=,=,==,!=,===,!==

const score = 200
if (score > 100) {
    const power = "fly"
    // console.log(`user power :${power}`);
    
    
}
// console.log(`user power:${power}`);

//if (balance > 500)console.log("test") , console.log("test2")
const balance = 1000
if (balance < 500) {
    // console.log("less tgan 500 ");
    
} else if(balance < 750){
    // console.log("less than 750");
    
} else if(balance < 900){
    // console.log("les than lod");
    
} else {
    // console.log("infinity");
    
}
const userloggedin = true
const debitcard = true
const loggedinfromgoogle = false
const loggedinemail = true

if(userloggedin && debitcard){
     console.log("Allow to buy course")
}
if(loggedinfromgoogle || loggedinemail){
       console.log("userloggedin");
       
}