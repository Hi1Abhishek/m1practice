function returnPromise(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("success!");
        },1000)
    });
}
returnPromise().then(result=>console.log(result))