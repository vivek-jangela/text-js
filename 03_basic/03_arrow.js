const user = {
    username:"vivek",
    price : 999,
    welcomemessage:function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
    }

}
// user.welcomemessage()
// user.username = "sam"
// user.welcomemessage()
// console.log(this);

// function chai() {
//     let username ="vivek"
//     console.log(this.username);
// }
// chai()


// const chai = function() {
//     let username ="vivek"
//     console.log(this.username);
// }


const chai = ()=> {
    let username ="vivek"
    console.log(this);
}
// chai()

// -----basic arrow function
// const sum = (num1, num2) =>{
//     return num1 + num2
// }


// ----implicit return
// const sum = (num1, num2) =>( num1 + num2)
const sum = (num1, num2) =>({username:"vivek"})

console.log(sum(3,4))