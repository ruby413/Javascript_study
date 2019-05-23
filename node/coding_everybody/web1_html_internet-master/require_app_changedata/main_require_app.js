var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');

    var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    function templateHTML(title, list, body, control){
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
          ${control}
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
          var template = templateHTML(title, list,`<h2>${title}</h2> <p>${description}</p>`, `<a href="/create">create</a>` )
          response.end(template);
          response.writeHead(200);
        })
      }else{
        fs.readdir('./data', function(error, filelist){
          fs.readFile(`data/${queryData.id}`,`utf8`,  (err, description) => {
            var list = templateList(filelist);
            var title = queryData.id;
            var template = templateHTML(title, list, `<h2>${title}</h2> <p>${description}</p>`, `<a href="/create">create</a> <a href="/update?id=${title}">update</a>`)
            response.end(template);
            response.writeHead(200);
          });
        });
      }
  }else if(url.parse(_url, true).pathname === "/create"){
    fs.readdir('./data', function(error, filelist){
      var list = templateList(filelist);
      var title = 'WEB - create';
      var template = templateHTML(title, list, `<form action="/create_process" method="post">
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
  }else if(url.parse(_url, true).pathname === "/update"){
    fs.readdir('./data', function(error, filelist){
      fs.readFile(`data/${queryData.id}`,`utf8`,  function (err, description){
        var list = templateList(filelist);
        var title = queryData.id;
        var template = templateHTML(title, list, `<form action="/update_process" method="post">
        <input type="hidden" name="id" value=${title}>
        <p><input type="text" name="title" placeholder="title" value=${title}></p>
        <p>
          <textarea name="description" placeholder="description">${description}</textarea>
        </p>
        <p>
          <input type="submit">
        </p>
        </form>`,`<a href="/create">create</a> <a href="/update?id=${title}">update</a>`)
        response.writeHead(200);
        response.end(template);
      });
    });
    
  }else if(url.parse(_url, true).pathname === "/create_process"){
    var body = '';
    request.on('data', function (data) {
        body += data;
    });
    request.on('end', function () {
        var post = qs.parse(body);
        var title = post.title;
        var description = post.description;
        fs.writeFile(`data/${title}`, description, 'utf8', function(err) {
          response.writeHead(302, {Location: `/?id=${title}`}); //302 - 강제이동
          response.end();
      }); 
    });
  }else if(url.parse(_url, true).pathname === "/update_process"){
    var body = '';
    request.on('data', function (data) {
        body += data;
    });
    request.on('end', function () {
        var post = qs.parse(body);
        var id = post.id;
        var title = post.title;
        var description = post.description;

        fs.rename(`data/${id}`, `data/${title}`, function(error){
          fs.writeFile(`data/${title}`, description, 'utf8', function(err){
            response.writeHead(302, {Location: `/?id=${title}`});
            response.end();
          })
        });
    });
  }else {
      response.writeHead(404);
      response.end('Not found');
  }
    
});
app.listen(3000);

