// const tinderUser = new Object()<--------singletone object
// const tinderUser = {}<----------nonsingletone object

const tinderUser = {}
tinderUser.id = "12345"
tinderUser.name = "vivek"
tinderUser.isloggedIn = false

// console.log( tinderUser);

const regularuser = {
    email :"son@gmail.com",
    fullname :{
        userfullname:{
            firstname:"vivek",
            lastname:"jan"

        }
    }
}
// console.log(regularuser.fullname.userfullname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c",4:"d"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({},obj1, obj2)

const obj3 ={...obj1,...obj2}
// console.log(obj3);

const user =[
    {
        id:"1",
        email:"v@gmail.com"
    },
    {
        id:"1",
        email:"v@gmail.com"
    },
    {
        id:"1",
        email:"v@gmail.com"
    }
]



// console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isloggedIn'));




