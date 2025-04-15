const prompt=require("prompt-sync")()

function * fibonacciGenerator(){
    let [a,b]=[0,1]
    yield a;
    yield b;
    for (let i=2;i<5;i++){
        [a,b]=[b,a+b];
        yield b;
    }
}

const count=parseInt(prompt("Enter the number:"))
const fib= fibonacciGenerator(count);
console.log(`first ${count} of fibonacci`)
for (let num of fib){
    console.log(num)
}