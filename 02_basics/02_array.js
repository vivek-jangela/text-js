const marvel_heros = ["thor","ironman","spderman"]
const dc_heros = ["superman","flash","batsman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

// const allheros = marvel_heros.concat(dc_heros)
// console.log(allheros);

const all_new_heros=[...marvel_heros, ...dc_heros]
// console.log(all_new_heros);

const another_array=[1,2,3,4,[2,4,5],5,6,7,[8,9,[1,2,3]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("vivek"));
console.log(Array.from("vivek"));
console.log(Array.from({name: "vivek"}));//interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

