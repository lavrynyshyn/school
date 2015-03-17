var http = require('http');
var url = require('url');
var count = 0;

var server = new http.Server(function(req,res){
   // console.log(req.headers);
    var url_parts = url.parse(req.url, true);
    console.log(url_parts.path);
    if (url_parts.path == "/index.html") {
        count++;
        res.setHeader('Content-type','text/html; charset=utf-8');
        res.end("Привіт світ!");
    } else if(url_parts.path == "/count.html"){
        res.setHeader('Content-type','text/html; charset=utf-8');
        res.write('<!doctype html>\n<html>\n<body>\n'+count+'</body>\n</html>\n');
        res.end();

    } else {
        res.writeHead(404, {"Content-Type": "text/plain"});
        res.write("404 Not found");
        res.end();

    }

});

server.listen(8081,'127.0.0.1');
