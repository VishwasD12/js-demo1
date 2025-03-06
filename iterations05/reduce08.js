// reduce 

const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currentValue){
//     console.log(`acc: ${acc} and currVal: ${currentValue}`);
    
//     return acc + currentValue
// }, 0)

const myTotal = myNums.reduce( (acc,curr) => acc + curr, 0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "py course",
        price: 2999
        
    },
    {
        itemName: "js course",
        price: 999

    },
    {
        itemName: "java course",
        price: 12999

    }
]

const totPrice = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(totPrice);
