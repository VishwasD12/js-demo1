class User{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email=email
        this.password=password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }
}

const vishwas = new Teacher("Vishwas", "vish@gmail.com", "123")
vishwas.addCourse()

const ram = new User("Ram")
ram.logMe()

console.log(vishwas instanceof Teacher);

