const coding = ["jk" , "ml", "op"]

// coding.forEach( function (val) {
//     console.log(val);
    
    
// })
// coding.forEach( (val)=>{
//        console.log(val);
       
// })

function printMe(item) {
    console.log(item);
    
}
// coding.forEach( printMe)
coding.forEach((item, index, arr)=>{
    // console.log(item, index, arr);
    
})

const mycoding =[
    {
        languageName:"javascript",
        languageFileName:"js"
    },
    {
        languageName:"java",
        languageFileName:"java"
    },
    {
        languageName:"python",
        languageFileName:"py"
    }
]

mycoding.forEach((item)=>{
    console.log(item.languageFileName);
    
})