var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    console.log(queryData);
    if(request._url == '/'){
      _url = '/index.html';
    }
    if(request._url == '/favicon.ico'){
        response.writeHead(404);
        response.end();
        return;
    }
    response.writeHead(200);
    response.end(queryData.id);
 
});
app.listen(3000);

// http://localhost:3000/?id=HTMjjj