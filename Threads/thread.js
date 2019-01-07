/** This benchmark suggests that node is not truly single threaded(Event loop is single threaded),
 *  some function of node leverages C++ thread pool through libuv.
 * */ 
process.env.UV_THREADPOOL_SIZE=5;// Doesnot seem to work in windows
//https://stackoverflow.com/questions/51224868/process-env-uv-threadpool-size-not-working
//in cmd -> set UV_THREADPOOL_SIZE=5 & node app.js

const os = require('os');
console.log(os.cpus().length);

const crypto=require("crypto");
const start=Date.now();
crypto.pbkdf2("a","b",100000,512,'sha512',()=>{
  console.log("1.", Date.now()-start);
});
crypto.pbkdf2("a","b",100000,512,'sha512',()=>{
  console.log("2.", Date.now()-start);
});
crypto.pbkdf2("a","b",100000,512,'sha512',()=>{
  console.log("3.", Date.now()-start);
});
crypto.pbkdf2("a","b",100000,512,'sha512',()=>{
    console.log("4.", Date.now()-start);
});
crypto.pbkdf2("a","b",100000,512,'sha512',()=>{
  console.log("5.", Date.now()-start);
});
  