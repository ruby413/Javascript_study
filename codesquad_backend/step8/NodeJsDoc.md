# Node.js v10.15.3 Documentation

## Assert
Assert는 유닛 테스트를 위해서 Node.js에서 사용할 수 있는 테스트 모듈이다. 별도의 설치없이도 import하면 바로 사용할 수 있다.

## Async Hooks
Async Hooks는 Node.js 어플리케이션 안에서 생성된 비동기 리소스의 콜백을 API에 등록하는 모듈이다.

## Buffer
자바스크립트 언어는 바이너리 데이터를 조종하거나 읽는 장치가 없다. 버퍼 클래스는 TCP stream, 파일 시스템, 다른 컨텍스트들과 함께 상호작동 할 수 있도록 Node.js API의 부분을 제공한다.

## C++ Addons
Node.js 의 javascript 와 C/C++ 라이브러리 사이에서 인터페이스를 우선으로 제공한다.

## C++ N-API
C++ N-API는 native Addons를 빌딩하기 위한 API이다.

## Child Process
Child Process는 popen(3)과 비슷하면서도 동일하지 않은 방식 안에서 child process 들을 구현한다.

## Cluster
node.js의 하나의 인스턴스는 하나의 스레드 안에서 구동된다. 멀티 코어 시스템에서 유리하게 사용하기 위해 사용자들은 때때로 node.js 프로세스의 cluster을 시작하길 원한다.

## Command Line Options
node.js 는 다양한 CLI 옵션과 함께한다. 이 옵션들은 디버깅과 스크립트가 실행되는 다양한 방법들, 그리고 다른 런타임 옵션에서 노출된다.

## Console
console은 웹 브라우져에서 제공하는 자바스크립트 콘솔 메커니즘과 비슷한 디버깅 콘솔을 제공한다.

## Crypto
crypto 모듈은 OpenSSL's hash, HMAC, cipher, decipher, sign 과 다양한 함수들에 대한 암호 기능을 제공한다.

## Debugger
node.js는 v8 inspector 롸 빌트인 디버깅 클라이언트를 통해 접근가능한 디버깅 유틸 프로세스를 포함한다. 이것을 사용하기 위해, 스크립트 패스가 있는 argument inspect로 node.js를 시작하라. 그러면 프롬프트 화면은 디버거를 성공적으로 실행시키며 나타날 것이다.

## Deprecated APIs
node.js는 안전하지 못한 곳에서 API를 사용할 때나 다른 것을 API 대안으로 사용할 수 있을 때, 그리고 나중에 큰 프로젝트를 릴리즈할 때 변화가 불가피해 보인다면 APIs를 피할 것 이다. 

## DNS
dns 모듈은 두가지 다른 카테고리에 속해있다.
- 도메인 이름찾을 때
- 반환된 ip 주소를 도메인으로 처리할 떄

## Domain
이 모듈은 항의가 걸려있는 상태에 있다. domains는 한 싱클 그룹에서 다른 여러 io operations 를 다루는 방법을 제공한다.

## ECMAScript Modules
node.js 는 Node.js EP for ES Modules에 기반해서 es modules 을 제공한다.

## Errors
node.js 로 구동되는 application 은 4가지의 에러를 출력한다.
- 일반적인 자바스크립트 에러
- 존재하지 않은 파일을 열려고 하거나 소켓이 닫힌 데이터를 보내려할 떄 발생하는 시스템 에러
- 코드에서 사용자가 명시한 에러
- 로직에서 절대 발생할 수 없는 예외상황을 node.js가 발생시킬 수 있을 때 AssertionError 를 일으킨다

## Events
- Node.js 의 핵심 API의 대부분은 특유의 비동기 이벤트 아키텍쳐로 이뤄졌다. 

## File System
fs 모듈은 기본 POSIX 함수를 모델링한 파일 시스템을 API 로 제공한다.

## Globals
이 오브젝트들은 모든 모듈에서 사용할 수 있다. 
- __dirname
- __filename
- exports
- module
- require()

## HTTP
HTTP 서버를 사용하기 위해서는  require('http') 를 써야한다.
node.js 에 있는 HTTP 인터페이스는 전통적으로 사용하기 어려웠던 프로토콜의 많은 특징들을 지원하는 방식으로 설계되어있다. 이 인터페이스는 전체 요청과 응답에 버퍼가 걸리지 않도록 되어 있다.

## HTTP/2
HTTP/2 모듈을 사용하기 위해서는  require('http2') 를 써야한다.
http2 Core API 는 http API 보다 서버와 클라이언트 사이가 더 대칭을 이룬다.

## HTTPS
https 는 TLS/SSL 위에 있는 http 프로토콜 이다. node.js 에서 이것은 분리된 모듈로 사용된다.

## Inspector
Inspector 모듈은 v8 inspector   과 상호호환되는 API를 제공한다.

## Internationalization Support
node.js 는 프로그램을 국제화하여 쉽게 사용하는 데에 특장이 있다. 

## Modules
node.js 의 모듈 시스템에서 각각의 파일은 나눠진 모듈로 간주된다.

## Net
net 모듈은 TCP 나 IPC 서버들을 기반으로 만들어지는 비동기 네트워크 API 를 제공한다.

## OS
os 모듈은 시스템과 연관된 유틸리티 메소드를 발생시키는 것을 제공한다. 

## Path
path 모듈은 파일과 디렉토리의 경로에 대한 작업 유틸을 제공한다.

## Performance Timing API
Performance Timing API 는 W3C Performance Timeline의 특징을 실행시킨다. 이 API 의 목적은 매트릭스 퍼포먼스의 높은 해결 집합을 지원하는데 있다.

## Process
Process 객체는 현재 node.js 프로세스에 대한 정보를 지원하는 global 이다. global 로서 require() 없이도 node.js 어플리케이션을 사용할 수 있다.

## Punycode
이 모듈은 항의가 걸려있는 상태에 있다.
Punycode 모듈은 Punycode.js 모듈버전의 번들이다.

## Query Strings
Query Strings 모듈은 url 쿼리 스트링의 포멧과 파싱에 대한 유틸을 제공한다.

## Readline
Readline 모듈은 읽을수 있는 한줄의 스트림에서 데이터를 읽는 인터페이스를 제공한다.

## REPL
REPL 모듈은 Read-Eval-Print-Loop 실행을 제공한다. 이는 윈도우 커맨드, 혹은 UNIX/LINUX Shell 처럼 사용자가 커맨드를 입력하면 시스템이 값을 반환하는 환경을 가르킨다.
- Read – 유저의 값을 입력 받아 JavaScript 데이터 구조로 메모리에 저장한다.
- Eval – 데이터를 처리(Evaluate) 한다.
- Print – 결과값을 출력한다.
- Loop – Read, Eval, Print 를 유저가 Ctrl+C를 두번 눌러 종료할때까지 반복한다.

## Stream
stream 은 node.js 에서 data stream 으로 작업하는 가상의 인터페이스 이다. Stream 모듈은 Stream 인터페이스를 실행할 수 있는 객체를 쉽게 만드는 API 의 기본을 제공한다.

## String Decoder
String Decoder 모듈은 멀티 바이트 utf-8 이나 utf-16 캐릭터로 인코딩 된 스트링이 있는 buffer 객체를 디코딩하기 위한 API를 제공한다.

## Timers
Timers 모듈은 미래 시간까지 부를 수 있는 스케쥴링 함수로써 글로벌한 API 로 노출되어 있다.

## TLS/SSL
tls 모듈은 Transport Layer Security (TLS) 와 Secure Socket Layer (SSL) 프로토콜의 실행을 제공한다.

## Trace Events
Trace Events는 node.js code, 유저스페이스 코드, v8로 부터 생성되는 정보 자취를 집중화 시키는 메커니즘을 제공한다.

## TTY
TTY 모듈은 tty.ReadStream 과 tty.WriteStream class 를 제공한다. 대부분의 경우에서 직접적으로 호출하지 않아도 사용가능하다

## UDP/Datagram Sockets
dgram 모듈은 UDP/Datagram Sockets의 실행을 제공한다.

## URL
URL 모듈은 URL 결정과 파싱에 대한 유틸을 제공한다.

## Util
Util 모듈은 node.js 가 자신의 내부 API 의 필요를 지원하고자 우선적으로 만들어졌다. 하지만 또한 많은 유틸리티들은 어플리케이션과 모듈 개발자들이 많이 사용한다.

## V8
V8 모듈은 V8의 빌트된 버전의 정보를 보여준다.

## VM
VM 모듈은 V8 가상 머신 환경에서 실행되거나 컴파일 되는 코드를 위한 API를 제공한다. vm 모듈은 보안 메커니즘이 아니며 신뢰하지 못하는 코드의 실행을 위해서도 사용하지 않는다

## Worker Threads
Worker Threads 모듈은 독립 스레드가 실행되는 멀티환경을 만드는 방법과 이들 사이의 메세지 채널을 만드는 방법을 제공한다.

## ZLIB
ZLIB 모듈은 Gzip 과 Deflate/Inflate 을 실행하는 기능을 제공한다.

<br/>

--- 
## 출처
- https://nodejs.org/dist/latest-v10.x/docs/api/index.html
- https://velopert.com/235