const https=require("https");
const start=Date.now();
function doRequest(){
    https.request("https://www.google.com",res=>{
        res.on('data',()=>{});
        res.on("end",()=>{
            console.log("1.", Date.now()-start);
        });
    }).end();
}


/**Operating system does the real http request. See  Video 16 for more details.
 *  Livuv has no say on this as it completely depends on the operating systems*/
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
