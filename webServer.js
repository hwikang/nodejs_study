const http =require('http'); //http모듈ㅇ ㅣ필요해
const hostname ="172.16.1.13"
const port = 3030;
const server = http.createServer((req,res) => {  //
    res.writeHead(200,{'Content-Type' : 'text/plain'})  //
    res.end('Hello world');

}).listen(port,hostname,() =>{
    console.log(`server running at http://${hostname}:${port}/`);
});