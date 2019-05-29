// // Import net module.
// var net = require('net');

// // This function create and return a net.Socket object to represent TCP client.
// function getConn(connName){

//     var option = {
//         host:'localhost',
//         port: 9999
//     }

//     // Create TCP client.
//     var client = net.createConnection(option, function () {
//         console.log('Connection name : ' + connName);
//         console.log('Connection local address : ' + client.localAddress + ":" + client.localPort);
//         console.log('Connection remote address : ' + client.remoteAddress + ":" + client.remotePort);
//     });

//     client.setTimeout(1000);
//     client.setEncoding('utf8');

//     // When receive server send back data.
//     client.on('data', function (data) {
//         console.log('Server return data : ' + data);
//     });

//     // When connection disconnected.
//     client.on('end',function () {
//         console.log('Client socket disconnect. ');
//     });

//     client.on('timeout', function () {
//         console.log('Client connection timeout. ');
//     });

//     client.on('error', function (err) {
//         console.error(JSON.stringify(err));
//     });

//     return client;
// }

// // Create a java client socket.
// var javaClient = getConn('Java');

// // Create node client socket.
// var nodeClient = getConn('Node');

// javaClient.write('Java is best programming language. ');

// nodeClient.write('Node is more better than java. ');

// var net = require('net');
// var client = new net.Socket();
// client.connect(52275, '127.0.0.1', function() {
// 	console.log('Connected');
// 	client.write('Hello, server! Love, Client.');
// });
// var i = 0;
// client.on('data', function(data) {
// 	console.log('Received: ' + data);
// 	i++;
// 	if(i==2)
// 		client.destroy(); 
// });
// client.on('close', function() {
// 	console.log('Connection closed');
// });

/**
 * Created by AvILoS on 6/16/15.
 */
// var net = require('net');
// // 5000번 포트로 TCP서버 접속 요청
// var client = net.connect({port:5000}, function(){
//      console.log('클라이언트가 서버에 연결되었습니다.;;;;)');

//     // 서버측으로 'hello'담아서 데이터 전송
//     client.write('hello', function(){
//         //client.end();
//     });
// });

// // 서버측으로부터 데이터 수신시 이벤트 잡아 출력
// client.on('data', function(data){
//     console.log('from server:'+data);
//     //client.end();
// });

// client.on('end', function(){
//     console.log('클라이언트가 서버에서 연결 해제되었습니다.');
// });



/**
 * Created by AvILoS on 6/16/15.
 */
var net = require('net');
    
process.stdin.resume();         // 표준입력처리(입력받을수 있도록 변경)
var client = net.connect(
        {host:'localhost', port:5000},
        function(){
            console.log(client.localPort + ' is connection!' );
        });

client.on('data', function(data){       // 서버로부터 데이터 수신시 콘솔에 출력
        console.log("someone : " + data.toString());
});

client.on('end', function(data){
    console.log(data.toString());
});

client.on('close', function(){
    console.log('close client....');
});

// 사용자가 콘솔에서 텍스트를 입력하였을 경우 write함수로 서버에 전송
process.stdin.on('data', function(data){
    if(data.toString().trim().toLowerCase() == 'quit'){
        console.log('request disconnect');
        client.write(data);
        process.stdin.end();
    }else{
        client.write(data);
    }
})