
class User {
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
        
    }

    static createId(){
        return `123`
    }
}

const vishwas = new User("vishwas")
// console.log(vishwas.createId());


class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email=email
    }
}

const ram = new Teacher("Ram", "ram@gmail.com")
ram.logMe()

console.log(ram.createId());

