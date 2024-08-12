http=require('http');
url=require('url');
querystring=require('querystring');
function onRequest(request,response)
{
    var path=url.parse(request.url).pathname;
    console.log('Request for '+path+' received.');
    var query=url.parse(request.url).query;
    console.log(query);
    var name=querystring.parse(query)["username"];
    var email=querystring.parse(query)["email"];
    response.write('hello '+name+',your email id'+email+'has been registered successfully!! ');
    response.write('Thankyou!');
    response.end();
}

http.createServer(onRequest).listen(7000);
console.log('Server has started....');