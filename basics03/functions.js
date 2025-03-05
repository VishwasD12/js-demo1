


function sayMyName(){
    console.log("V");
    console.log("i");
    console.log("s");
    console.log("h");
    console.log("w");
    console.log("a");
    console.log("s");
}

// sayMyName()

// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
    
// }

function addTwoNumbers(num1, num2){
    // let result = num1 + num2
    // return result
    
    return num1 + num2
    
}

// addTwoNumbers(2, "2")
const result = addTwoNumbers(2, 3)
// console.log("Result: ", result);

function loginUserMessage(username = "vish"){
    if(username === undefined){
        console.log("Please enter a username");
        return 
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Vishwas"))

function claculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(claculateCartPrice(200, 400, 500));

const user = {
    username: "Vishwas",
    price: 999
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(user)
handleObject({
    username: "Vish",
    price: 100
})

const myNewArray = [200, 300, 400, 500]

function returnSecondValue(getArray){
    return getArray[0]
}
console.log(returnSecondValue(myNewArray));
