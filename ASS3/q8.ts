function processUnkonwn(input:unknown):void{
    if(typeof input==="string")console.log("string value:",(input as string).length)
    else if(typeof input==="number")console.log("squared value:",(input as number)**2)
    else if(Array.isArray(input))console.log("Array length:",(input as any[]).length)
    else ("unknown process")
}

processUnkonwn ("Hello")
processUnkonwn (10)
processUnkonwn ([1,2,3,4])
processUnkonwn (true)