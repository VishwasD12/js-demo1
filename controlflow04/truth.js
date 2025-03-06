const userEmail = "vish@gmail.com"

if(userEmail){
    console.log("Got user email");
    
}
else{
    console.log("dont have user email");
    
}

// false value : false, 0, -0, BigInt 0n, "", null, undefined, Nan

// true value: "0", 'false', " ", [], {}, function(){}, 

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
    
}