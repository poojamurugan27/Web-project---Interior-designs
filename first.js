var http=require("http");
var server=http.createServer(function(request,response)
{
    if(request.url=="/")
    {
        response.writeHead(200,{"Content-Type":"text/html"});
        response.write("<h1>this is our 1st page</h1>");
        response.end("<html><body> home URL: "+request.url+"</body></html>");
    }
    else if(request.url=="/student")
    {
        response.writeHead(200,{"Content-Type":"text/html"});
        response.write("<h1>student of kec</h1>");
        response.end("<html><body> student URL: "+request.url+"</body></html>");
    }
    else if(request.url=="/admin")
    {
        response.writeHead(200,{"Content-Type":"text/html"});
        response.write("<h1>login!!</h1>");
        response.end("<html><body> admin URL: "+request.url+"</body></html>");
    }
    else
    {
        response.end("Invalid Request");
    }
    
});
server.listen(3000);
console.log("Server running");