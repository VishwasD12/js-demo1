const marvel_heros = ["thor", "Ironman", "Spiderman"]
const dc = ["superman", "flash", "batman"]

// marvel_heros.push(dc)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const all_heros = marvel_heros.concat(dc)
// console.log(all_heros);

const all_new_heros = [...marvel_heros, ...dc]
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_arrary = another_array.flat(Infinity)
console.log(real_arrary);

console.log(Array.isArray("Vishwas"));
console.log(Array.from("Vishwas"));
console.log(Array.from({name: "Vishwas"}));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
