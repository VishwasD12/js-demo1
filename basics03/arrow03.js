const user = {
    username: "Vishwas",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
    }

}

// user.welcomeMessage()
// user.username = "ram"
// user.welcomeMessage()

// console.log(this);

// function one(){
//     let username = "Vishwas"
//     console.log(this.username);
    
// }

// one()

// const one = function(){
//     let username = "Vishwas"
//     console.log(this.username);
// }
// one()


// arrow function
const one = () => {
    let username = "Vishwas"
    console.log(this);
}
// one()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


// implicit function

// const addTwo = (num1, num2) =>  num1 + num2

const addTwo = (num1, num2) =>  ({username: "Vishwas"})

console.log(addTwo(3, 4));


// const myArr = [2, 3, 4, 5]
// myArr.forEach(() => )

