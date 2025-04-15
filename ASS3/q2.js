var globalVar = "I am var";
var blockLet = "I am let";
var constantVar = " I am const";
function scopeTest() {
    if (true) {
        var functionScope = "functionscope";
        var blockScope = "blockScope";
        var constantScope = "constantscope";
        console.log(blockScope, constantScope);
    }
    console.log(functionScope);
}
scopeTest();
blockLet = "Ressagined let";
console.log(globalVar, blockLet);
