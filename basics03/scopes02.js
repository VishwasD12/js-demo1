// var c =300
let a =300
if(true){
    let a = 10
    const b = 20
    // console.log("Inner:", a);
    
    
}



// console.log(a);
// console.log(b);

function one(){
    const userName = "Vishwas"
    function two(){
        const website = "youtube"
        // console.log(userName);
        
    }
   // console.log(website);
    two()
}

one()

if(true){
    const username = "Vishwas"
    if(username === "Vishwas"){
        const website = " youtube"
        // console.log(username + website);
        
    }
   // console.log(website);
    
}
// console.log(username);

// ************************** 


console.log(addone(5));

function addone(num){
    return num + 1
}



const addTwo = function(num){
    return num + 2
}

addTwo(5)