// const mynum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newnum = mynum.map( (num)=>{ return num + 10 })
// console.log(newnum);

// const mynum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const value = mynum.forEach((num)=>{
//     console.log(num+10);
//     return num
// }
// )
// console.log(value);

const mynum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newnum = mynum
          .map( (num) => num+10)
          .map( (num) => num-10)
          .filter( (num) => num>=4)
console.log(newnum);
