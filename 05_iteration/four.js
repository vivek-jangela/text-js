const myObject = {
    js:'javascript',
    cpp:'c++',
    rb:"ruby",
    swift:"swift by apple"
}
for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
    

}
const programming = ["js", "ruby", "java", "py","cpp"]
for (const key in programming) {
    // console.log(programming[key]);
    
}

const map = new Map()
map.set('IN',"India")
map.set('US',"united state")
map.set('Fr',"france")

for (const key in map) {
    console.log(map);
    

    }
