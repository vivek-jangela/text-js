







const myNum =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newnum = myNum.filter( (num)=>num>4
// )
// console.log(newnum);

// const newnum = myNum.filter( (num)=>{
//     return num>4
// }
// )

const newnum = []

myNum.forEach( (num)=>{
    if (num>4) {
        newnum.push(num)
        
    }

})

console.log(newnum);


// const username = books.filter((bk)=> bk.genzroick ===histroy)
// username = book.filter((bk)=>{retun bk.genzroi === history && publice >= 19node 05_iteration/six.js95})
// console.log(username);
