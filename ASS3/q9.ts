function getfirstElement<T>(arr:T[]):T | undefined{
    return arr.length > 0 ? arr[0]:undefined 
}

console.log(getfirstElement([1,2,3,4]))
console.log(getfirstElement(["a","b","c"]))
console.log(getfirstElement([]))
