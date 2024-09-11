//for off

//["","",""]
//[{},{},{}]

const arr = [2, 4, 6, 8]

for (const num of arr) {
    // console.log(num);
    
}

const greetings = "hello world"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
    
    
}

//Maps

const map = new Map()
map.set('IN',"India")
map.set('US',"united state")
map.set('Fr',"france")

// console.log(map);
for (const [key, value] of map) {
    console.log(key,':-', value);
    
    
}
const myObject = {
    game1:'NFS',
    game2:'Spiderman'
}
for (const [key, value] of myObject) {
    console.log(key, ':-', value);
    
    
}
