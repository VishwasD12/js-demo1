// for of

// ["", "", ""]
// [{},{},{}]

const arr = [1, 2, 3, 4, 5]

for (const element of arr) {
   // console.log(element);
    
}

const greetings = "Hello world!"
for (const greet of greetings) {
   // console.log(`Each char is ${greet}`);
    
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United states of america")
map.set('Fr', "French")

// console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
    
}

const myObj = {
    'game1': 'Nfs',
    'game2': 'pubg'
}

// for (const [key, value] of myObj) {
//     console.log(key, ':-', value);
// }