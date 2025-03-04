// singleton

// object literals

//Object.create

const mySym = Symbol("key1")
const jsUser = {
    name: "Vishwas",
    "full name": "Vishwas D",
    [mySym]: "mykey1",
    age: 23,
    email: "vish@gmail.com",
    location: "Bellary",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

jsUser.email = "vishwas@gmail.com"
// Object.freeze(jsUser)
jsUser.email = "vishwas@microsoft.com"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello JS user");
    
}

jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
    
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());