function multiplyBy5(num){
    return num*5
}

console.log(multiplyBy5(5));

console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);


function createUser(username, score){
    this.username=username
    this.score=score
}

createUser.prototype.increment=function(){
    this.score++
}

createUser.prototype.printME=function(){
    console.log(`price is ${this.score}`);
    
}

const chai=new createUser("chai", 25)
const tea=new createUser("tea", 250)

chai.printME()