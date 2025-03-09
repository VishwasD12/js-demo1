const user = {
    userName: "Vishwas",
    loginCount: 8,
    signedIn: true,
    getUserDetails: function(){
        console.log("Got user details from database");
        console.log(`Username: ${this.userName}`);
        console.log(this);
        
    }
}
// console.log(user.userName);
// console.log(user.getUserDetails());

// console.log(this);

function user1(username, loginCount, isLoggedIn){
    this.username=username
    this.loginCount=loginCount
    this.isLoggedIn=isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
        
    }
    return this
}

const userOne = new user1("Vishwas", 5, true)
const userTwo = new user1("Ram", 6, true)

console.log(userOne);
// console.log(userTwo);
