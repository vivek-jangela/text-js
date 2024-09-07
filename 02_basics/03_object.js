// singleeton

// Object.create 
// object literal

const mySym = Symbol("key1")
const jsUser = {
    name:"hitesh",
    age:18,
    location:"jaipur",
    "full name":"vivek",
    [mySym]:"myKey1",
    email:"hitesh@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","sunday"]

}
// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log( jsUser[mySym]);

jsUser.email = "hitesh@chat123"
// Object.freeze = (jsUser)
jsUser.email = "hitesh@yet"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello js user");
    
}
jsUser.greeting2 = function(){
    console.log(`hello js user, ${this.name}`);
    
}
console.log(jsUser.greeting());
console.log(jsUser.greeting2());