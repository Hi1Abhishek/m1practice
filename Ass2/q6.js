function fetchdata(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("MOCK API DATA");
        },1000)
    })
}

async function logdata(){
    const result = await fetchdata();
    console.log(result);
}

logdata();