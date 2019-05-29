/**
 * Created by AvILoS on 6/16/15.
 */
var net = require('net');
var readline = require('readline')
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
var client = net.connect(
    {host:'localhost', port:5000},
    function(){
        console.log(client.localPort + ' is connection!' );
        rl.prompt();
});
//process.stdin.resume();         // 표준입력처리(입력받을수 있도록 변경)


client.on('data', function(data){       // 서버로부터 데이터 수신시 콘솔에 출력
    console.log("someone : " + data.toString());
    rl.prompt();
});

client.on('end', function(data){
    console.log(data.toString());
});

client.on('close', function(){
    console.log('close client....');
});

rl.on('line', function(line){
    if (line == 'exit'){
        console.log('request disconnect');
        client.write(line);
        rl.close()
    }else{
        client.write(line);
    }
    rl.prompt()
});
rl.on('close', function() {
    process.exit()
})
// // 사용자가 콘솔에서 텍스트를 입력하였을 경우 write함수로 서버에 전송
// process.stdin.on('data', function(data){
//     if(data.toString().trim().toLowerCase() == 'quit'){
//         console.log('request disconnect');
//         client.write(data);
//         process.stdin.end();
//     }else{
//         client.write(data);
//     }
// })