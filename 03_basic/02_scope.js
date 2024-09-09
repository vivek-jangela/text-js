// var c = 300
let a= 300
if (true) {
    let a= 10;
    const b=20
    console.log("inner;", a);
    

}
// console.log(a);

function one() {
    const username = "hitesh"
    function two() {
        const website = "youtube"
        console.log(username);
        
        
    }
    // console.log(website);
    // two()
    
    
}
// one()
// console.log(username);

if (true) {
    const username = "vivek"
    if (username==="vivek") {
        const website ="youtube"
        console.log(username + website);
        
        
    }
    // console.log(website);
    
}
// console.log(username);


// +++++++++++++++++++interesting+++++++++++++++++++++++++++++

function addone(num) {
    return num + 1
    
}
addone(5)
function addtwo(num) {
    return num + 1
    
}
addone(5)