var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');

    var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    function templateHTML(title, list, body){
      return `
          <!doctype html>
          <html>
          <head>
          <title>WEB1 - ${title}</title>
          <meta charset="utf-8">
          </head>
          <body>
          <h1><a href='/'>WEB</a></h1>
          ${list}
          <a href="/create">create</a>
          ${body}
          </body>
          </html>
          `
    }
    function templateList(filelist){
      var list = `<ul>`
      var i = 0;
      while(i<filelist.length){
        list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
        i = i + 1;
      }
      list = list + `</ul>`
      return list;
    }
    
    if(url.parse(_url, true).pathname === "/"){
      if(queryData.id === undefined){
        fs.readdir('./data', function(error, filelist){
          var description = "Hi Node.js!";
          var title = "Welcome!";
          var list = templateList(filelist);
          var template = templateHTML(title, list,`<h2>${title}</h2> <p>${description}</p>` )
          response.end(template);
          response.writeHead(200);
      
          console.log(filelist);
        })
      }else{
        fs.readdir('./data', function(error, filelist){
          fs.readFile(`data/${queryData.id}`,`utf8`,  (err, description) => {
            var list = templateList(filelist);
            var title = queryData.id;
            var template = templateHTML(title, list, `<h2>${title}</h2> <p>${description}</p>`)
            response.end(template);
            response.writeHead(200);
          });
        });
      }
  }else if(url.parse(_url, true).pathname === "/create"){
    fs.readdir('./data', function(error, filelist){
      var list = templateList(filelist);
      var title = queryData.id;
      var template = templateHTML(title, list, `<form action="http://localhost:3000/create_process" method="post">
      <p><input type="text" name="title" placeholder="title"></p>
      <p>
        <textarea name="description" placeholder="description"></textarea>
      </p>
      <p>
        <input type="submit">
      </p>
      </form>`)
      response.end(template);
      response.writeHead(200);
    });
  }else if(url.parse(_url, true).pathname === "/create_process"){
    var template = 'Sucess!';
    var body = '';
    request.on('data', function (data) {
        body += data;
    });
    request.on('end', function () {
        var post = qs.parse(body);
        console.log(post);
    });
    response.end(template);
    response.writeHead(200);
  }else {
      response.writeHead(404);
      response.end('Not found');
  }
    
});
app.listen(3000);

