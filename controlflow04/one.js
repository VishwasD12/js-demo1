// if

// if (2 == "2"){
//     console.log("Done");
    
// }

// if (2 === "2"){
//     console.log("Done");
    
// }

// const temp = 50
// if(temp < 50){
//     console.log("less than 50");
    
// }
// else{
//     console.log("Temparature is greater than 50");
    
// }

// const score = 200

// if(score > 100){
//     const power = "fly"
//     console.log(`User power: ${power}`);
    
// }



// <, >, <=, >=, ==, !=, ===

// const balance = 1000
// if (balance > 500) console.log("test"), console.log("test1");

// if (balance < 500) {
//     console.log("less than 500");
    
// }
// else if (balance < 750){
//     console.log("less than 750");
    
// }
// else if(balance < 900){
//     console.log("less than 900");
    
// }
// else{
//     console.log("less than 1200");
    
// }

const userLoggedIn = true
const debitCard =true

if (userLoggedIn && debitCard){
    console.log("Allow to buy course");
    
}

if (userLoggedIn || debitCard){
    console.log("Allow to buy course");
    
}

// Nullist coalescing Operator (??) null undefined

let val1;
//val1 = 5 ?? 10

// val1 = null ?? 10

// val1 = undefined ?? 5

val1 = null ?? 10 ?? 15
console.log(val1);


// Terniary operator 

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") :
console.log("more than 80");

