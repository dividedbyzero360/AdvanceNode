
const cluster=require("cluster");

console.log(cluster.isMaster);

// Is the file being executed in master mode?
if(cluster.isMaster)
{
//Cause index.js to execute again but in child mode
cluster.fork();// One child one eventloop
cluster.fork();
/**
 * Having many clusters will lead to diminishing returns. (Think multithreading) Benchmark when not sure.
 */
//cluster.fork();   
// cluster.fork();
}
else
 {
//I am a child, I'm going to act like a server and do nothing else. 
    const express=require('express');
    const app=express();
// To simulate some heavy work load to process the request
function doWork(duration){
    const start=Date.now();
    while(Date.now()-start < duration){}
}


app.get("/",(req,res)=>{

    doWork(5000);//This work is performed by event loop. So while its doing this work it can absolutely do nothing else.
    res.send("Hi there "+'worker:' + cluster.worker.id + " going to send response " );
});

app.get("/fast",(req,res)=>{
    res.send("This is fast"+'worker:' + cluster.worker.id + " going to send response ");
});

app.listen(3002);
}

