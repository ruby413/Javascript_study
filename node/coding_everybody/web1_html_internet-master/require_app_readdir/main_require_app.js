var http = require('http');
var fs = require('fs');
var url = require('url');

    var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    
    if(url.parse(_url, true).pathname === "/"){
      if(queryData.id === undefined){
        fs.readdir('./data', function(error, filelist){
          var description = "Hello Node.js";
          var title = "Welcome!";
          var list = `<ul>`
          var i = 0;
          while(i<filelist.length){
            list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
            i = i + 1;
          }
          list = list + `</ul>`
          var template = `
          <!doctype html>
          <html>
          <head>
          <title>WEB1 - ${title}</title>
          <meta charset="utf-8">
          </head>
          <body>
          <h1><a href='/'>WEB</a></h1>
          ${list}
          <h2>${title}</h2>
          <p>${description}</p>
          </body>
          </html>
          `
          response.end(template);
          response.writeHead(200);
      
          console.log(filelist);
        })
      }else{
        fs.readdir('./data', function(error, filelist){
        var list = `<ul>`
        var i = 0;
        while(i<filelist.length){
          list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
          i = i + 1;
        }
        list = list + `</ul>`
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
          ${list}
          <h2>${title}</h2>
          <p>${description}</p>
          </body>
          </html>
          `
          response.end(template);
          response.writeHead(200);
        });
      });
    }
      }else{
      response.end("Not Found");
      response.writeHead(404);
    }
    
});
app.listen(3000);

