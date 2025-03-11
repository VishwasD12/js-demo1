class User {
    constructor(email, password){
        this.email=email
        this.password=password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email=value
    }
    get password(){
        return this._password.toUpperCase()
    }

    set password(value){
        this._password=value.toUpperCase()
    }
}

const vishwas = new User("vish@gmail.com", "abc")
console.log(vishwas.password);
console.log(vishwas.email);
