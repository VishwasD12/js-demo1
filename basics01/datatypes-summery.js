// Primitive datatypes

//7 types: String , Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 123456796432312n



// Reference (Non Primitive)
// Array, Objects, Functions

const heros = ["a","b","c"]

let myObj = {
    name:"Vishwas",
    age: 22,
}

const myfunction = function(){
    console.log("Hello World");
    
}

console.log(typeof bigNumber);

console.log(typeof myfunction);

