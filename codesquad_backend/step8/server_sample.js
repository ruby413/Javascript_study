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
    console.log(clientSockets.length + "번째 접속자입니다.")
    socket.on('data', function(data){
        console.log(socket._peername.port +" : "+ data.toString())
        if(data.toString().trim().toLowerCase() == 'quit'){
            socket.write('>>>> disconnect client....');
            return socket.end();
        }
        clientSockets.forEach(function(otherSocket){
            if(otherSocket!=socket){
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

});

server.on('error', function(err){
    console.log('error:'+err.message);
});

server.on('close', function(){
    console.log('stop server...');
});
server.listen(port);