//reduce

const mynum = [1, 2, 3]

// const mytotal = mynum.reduce(function (acc, currval) {
//        console.log(`acc:${acc} and currval: ${currval}`);
//        return acc + currval
       
// }, 0)


const mytotal = mynum.reduce( (acc, curr) => acc+curr,0 )
// console.log(mytotal);

const shoppingCart = [
    {
        itemName : "js course",
        price:2000
    },
    {
        itemName : "py course",
        price:12000
    },
    {
        itemName : "java course",
        price:2999
    },
    {
        itemName : "mobile dev course",
        price:2199
    },
    {
        itemName : "Data science course",
        price:19999
    }
]

const payment = shoppingCart.reduce( (acc ,item) => acc + item.price ,0)
console.log(payment);
