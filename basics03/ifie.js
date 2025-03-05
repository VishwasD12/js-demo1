// Immedietly invoked function expression(iife)

(function one(){
    // named iife
    console.log(`DB Connected`);
    
})();

// one()

( (name) =>{
    console.log(`DB Connected ${name}`);
    
})("Vishwas")
