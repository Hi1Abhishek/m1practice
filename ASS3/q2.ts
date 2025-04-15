var globalVar = "I am var"
let blockLet = "I am let"
const constantVar =" I am const"

function scopeTest(){
    if (true){
        var functionScope="functionscope"
        let blockScope= "blockScope"
        const constantScope= "constantscope"
        console.log(blockScope,constantScope)
    }
    console.log(functionScope)
}

scopeTest();
blockLet="Ressagined let"
console.log(globalVar,blockLet)