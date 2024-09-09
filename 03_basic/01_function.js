
function sm(){
    console.log("h");
    console.log("u");
    console.log("i");
    console.log("p");
}
// sm()

function addtwonumber(number1, number2){
    // let result = number1 + number2
    // return result
    return number1+number2

}
const result = addtwonumber(3,5)
// console.log("results:",result);


function loginusername(username ="sam" ){
    // if(username ===undefined){
    //     console.log("please enter your name");
        
    // }
    // if(username === undefined){
    //     console.log("please enter your name");
    //     return
        
    // }
    if(!username){
        console.log("please enter your name");
        return
        
    }
    return`${username} just log in`
}
// console.log(loginusername("vivek"))
// console.log(loginusername("user"));


// ----------------------#################-------------------

function calculationcarprice(val1 ,val2,...num1){
    return num1

}
// console.log(calculationcarprice(3000,4000,6000,8000));
