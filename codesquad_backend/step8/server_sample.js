// // Import net module.
// var net = require('net');

// // Create and return a net.Server object, the function will be invoked when client connect to this server.
// var server = net.createServer(function(client) {

//     console.log('Client connect. Client local address : ' + client.localAddress + ':' + client.localPort + '. client remote address : ' + client.remoteAddress + ':' + client.remotePort);

//     client.setEncoding('utf-8');

//     client.setTimeout(1000);

//     // When receive client data.
//     client.on('data', function (data) {

//         // Print received client data and length.
//         console.log('Receive client send data : ' + data + ', data size : ' + client.bytesRead);

//         // Server send data back to client use client net.Socket object.
//         client.end('Server received data : ' + data + ', send back to client data size : ' + client.bytesWritten);
//     });

//     // When client send data complete.
//     client.on('end', function () {
//         console.log('Client disconnect.');

//         // Get current connections count.
//         server.getConnections(function (err, count) {
//             if(!err)
//             {
//                 // Print current connection count in server console.
//                 console.log("There are %d connections now. ", count);
//             }else
//             {
//                 console.error(JSON.stringify(err));
//             }

//         });
//     });

//     // When client timeout.
//     client.on('timeout', function () {
//         console.log('Client request time out. ');
//     })
// });

// // Make the server a TCP server listening on port 9999.
// server.listen(9999, function () {

//     // Get server address info.
//     var serverInfo = server.address();

//     var serverInfoJson = JSON.stringify(serverInfo);

//     console.log('TCP server listen on address : ' + serverInfoJson);

//     server.on('close', function () {
//         console.log('TCP server socket is closed.');
//     });

//     server.on('error', function (error) {
//         console.error(JSON.stringify(error));
//     });

// });




// var net = require('net');
// var textChunk = '';
// var server = net.createServer(function(socket) {
// 	socket.write('Echo server\r\n');
// 	socket.on('data', function(data){
// 		console.log(data);
// 		textChunk = data.toString('utf8');
// 		console.log(textChunk);
// 		socket.write(textChunk);
// 	});
// });
// server.listen(52275, '127.0.0.1');


/**
 * Created by AvILoS on 6/16/15.
 */
var net = require('net');
var port = 5000;
var server = net.createServer(function(client){
    console.log(client.remotePort + '가 접속되었습니다.');
});
    //!!!! 아래의 clientSockets 배열 중요
    var clientSockets = [];     // 클라이언트가 접속할경우 소켓을 저장할 배열

    // Connection 이벤트는 클라이언트가 접속할때마다 계속 호출된다.
    server.on('connection', function(socket){
        clientSockets.push(socket);     // 사용자가 접속시 마다 소켓을 저장(향후 텍스트 전송시 이 배열만 조회하면 된다.
        // 사용자가 접속시마다 데이터를 전송해오면 접속한 클라이언트의 소켓을
        // clientSockets배열에서 비교하여 모두 전송처리
        console.log(clientSockets.length)
        if(clientSockets.length <= 2){
            socket.on('data', function(data){
                if(data.toString().trim().toLowerCase() == 'quit'){
                    socket.write('>>>> disconnect client....');
                    return socket.end();
                }
                clientSockets.forEach(function(otherSocket){
                    if(otherSocket!=socket){
                        console.log(otherSocket._peername.port +" : "+ data.toString())
                        otherSocket.write(data);
                    }
                });
            });
            socket.on('close', function(){
                // 종료된 소켓의 인덱스값을 알아낸다.
                console.log(clientSockets[clientSockets.length-1]._peername.port+"의 접속이 끊겼습니다.");
                var index = clientSockets.indexOf(socket);
                if(index != -1){
                    clientSockets.splice(index, 1); // 리스트에서 제거
                }
            })
        }else{
            console.log("두명 넘어감")
        }


    });

    server.on('error', function(err){
        console.log('error:'+err.message);
    });

    server.on('close', function(){
        console.log('stop server...');
    });
server.listen(port);