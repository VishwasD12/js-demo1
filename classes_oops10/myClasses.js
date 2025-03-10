
class User {
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const vishwas = new User("Vishwas", "vish@gmail.com", "123")
console.log(vishwas.encryptPassword());
console.log(vishwas.changeUsername());

function User(username, email, password){
        this.username = username
        this.email = email
        this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const ram = new User("Ram", "ram@gmail.com", "123")
console.log(ram.encryptPassword());
console.log(ram.changeUsername());