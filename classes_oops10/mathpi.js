// const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descriptor);


const myObj = {
    name: "chai",
    price: 250,
    isAvailable: true,
    orderChai: function(){
        console.log("function");
        
    }
}

console.log(Object.getOwnPropertyDescriptor(myObj, "name"));

// Object.defineProperty(myObj, 'name', {
//     Writable:false,
//     enumerable: false
// })
// console.log(Object.getOwnPropertyDescriptor(myObj, "name"));

for (let [key, value] of Object.entries(myObj)) {
    console.log(`${key}: ${value}`);
    
}