var http=require('http');
var querystring=require('querystring');
var qs,name,email;
http.createServer(function(req,res){
    var data1='';
    req.on('data',function(chunk){
        console.log(chunk);
        data1+=chunk;
        console.log("Data in string format: "+data1);
    });
    req.on('end',function(){
        qs=querystring.parse(data1);
        console.log(qs);
        name=qs['username'];
        email=qs['email'];
        res.write("hello "+name+", your email id "+email+"has been successfully registered" );
        res.end();
    })
}).listen(8000);``
console.log("server started");