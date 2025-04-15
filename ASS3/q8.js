function processUnkonwn(input) {
    if (typeof input === "string")
        console.log("string value:", input.length);
    else if (typeof input === "number")
        console.log("squared value:", Math.pow(input, 2));
    else if (Array.isArray(input))
        console.log("Array length:", input.length);
    else
        ("unknown process");
}
processUnkonwn("Hello");
processUnkonwn(10);
processUnkonwn([1, 2, 3, 4]);
processUnkonwn(true);
