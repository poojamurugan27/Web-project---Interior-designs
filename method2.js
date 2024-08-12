var http=require("http");

function samp1(request,response)
{
    response.writeHead(400,{"Content-Type":"text/html"});
    response.write("Hello");
    response.write("<h1>Hello World</h1>");
    response.end("<html><body>Home,URL was: "+request.url+"</body></html>")
    console.log("Request received");
}

var server=http.createServer(samp1);
server.listen(2000);
console.log("Server running");