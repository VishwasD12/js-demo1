const User = {
    _email: "vishwas@gmail.com",
    _password: "abc",

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email=value
    }
}

const vish = Object.create(User)
console.log(vish.email);
