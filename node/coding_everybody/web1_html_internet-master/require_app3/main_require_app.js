var http = require('http');
var fs = require('fs');
var url = require('url');

    var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    
    // console.log(url.parse(_url, true))
    if(url.parse(_url, true).pathname === "/"){
      if(queryData.id === undefined){
        //fs.readFile(`data/${queryData.id}`,`utf8`,  (err, description) => {
          var description = "Hello Node.js";
          var title = "Welcome!";
          var template = `
          <!doctype html>
          <html>
          <head>
          <title>WEB1 - ${title}</title>
          <meta charset="utf-8">
          </head>
          <body>
          <h1><a href='/'>WEB</a></h1>
          <ol>
              <li><a href="/?id=html">HTML</a></li>
              <li><a href="/?id=css">CSS</a></li>
              <li><a href="/?id=javascript">JavaScript</a></li>
          </ol>
          <h2>${title}</h2>
          <p>${description}</p>
          </body>
          </html>
          `
          response.end(template);
          response.writeHead(200);
      
       // });
      }else{
        fs.readFile(`data/${queryData.id}`,`utf8`,  (err, description) => {
          var title = queryData.id;
          var template = `
          <!doctype html>
          <html>
          <head>
          <title>WEB1 - ${title}</title>
          <meta charset="utf-8">
          </head>
          <body>
          <h1><a href='/'>WEB</a></h1>
          <ol>
              <li><a href="/?id=html">HTML</a></li>
              <li><a href="/?id=css">CSS</a></li>
              <li><a href="/?id=javascript">JavaScript</a></li>
          </ol>
          <h2>${title}</h2>
          <p>${description}</p>
          </body>
          </html>
          `
          response.end(template);
          response.writeHead(200);
      
        });
      }
      
    }else{
      response.end("Not Found");
      response.writeHead(404);
    }
    
});
app.listen(3000);

