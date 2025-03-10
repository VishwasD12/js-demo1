// let myName = "Vishwas   "

// console.log(myName.truelength);

let myHeros = ["thow","superman"]

let heroPower = {
    thor: "hammer",
    superman: "tech",

    getSuperPower: function(){
        console.log(`Superman power is ${this.superman}`);
        
    }
}
Object.prototype.vishwas = function(){
    console.log(`vishwas is present in all objects`);
    
}

Array.prototype.heyvishwas=function(){
    console.log(`Hi vishwas`);
    
}
// myHeros.vishwas()
// heroPower.vishwas()
// heroPower.heyvishwas()

// inheritance

const Teacher = {
    makeVideo: true,

}
const TeachingSupport = {
    isAvailable: false
}

const User = {
    name: "vishwas",
    email: "vish@gmail.com"
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "VishwasVd  "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
    
}
anotherUsername.trueLength()
"vishwas".trueLength()