const express=require('express');
const app=express();

// To simulate some heavy work load to process the request
function doWork(duration){
    const start=Date.now();
    while(Date.now()-start < duration){}
}


app.get("/",(req,res)=>{
    doWork(5000);//This work is performed by event loop. So while its doing this work it can absolutely do nothing else.
    res.send("Hi there");
});

app.listen(3000);