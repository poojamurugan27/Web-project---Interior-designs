var http= require('http');
var dt =require('./module');
http.createServer(function(req,res)
{
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write("THE DATE AND TIME ARE CURRENTLY:"+dt.myDateTime());
    res.end();
}).listen(9000);
console.log("SERVER INPROGESS");
