const net = require('net');
const readline = require('readline')
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
const client = net.connect(
    {host:'localhost', port:5000},
    function(){
        console.log(client.localPort + ' is connection!' );
        rl.prompt();
});
let answer = ""
  
client.on('data', function(data){   
    console.log("someone : " + data.toString());
    rl.prompt();
});

rl.on('line', function(line){
    if (line == 'exit'){
        console.log('request disconnect');
        client.write(line);
        rl.close()
    }else{
        answer = line
        client.write(line);
    }
    rl.prompt()
});
