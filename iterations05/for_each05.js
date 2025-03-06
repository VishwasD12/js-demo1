const  codeing = ["js", "ruby", "java", "python","cpp"]


codeing.forEach( function (iteam) {
    // console.log(iteam);
    
})

codeing.forEach( (iteam) => {
    // console.log(iteam);
    
})

function printMe(iteam){
   // console.log(iteam);
    
}

// codeing.forEach(printMe)

codeing.forEach( (item, index, arr) => {
   // console.log(item, index, arr);
    
})

const myCoding = [
    {
        languageName: "JS",
        languageFileName: "js"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageFileName);
    
})