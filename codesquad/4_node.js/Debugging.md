# 디버깅
- breakpoints 란?
  프로그램을 실행하는 도중에 유저가 필요한 시점에서 프로그램을 일시정지 시키는 역할.
  디버깅할 코드를 찾아 해당하는 라인의 좌측 영역을 클릭하면 중단점이 설정된다.

- watch 사용법?
  variables 에 있는 expression 중 보고자 하는 설정한 값의 변동값을 프로그램 실행 중에 확인한다.
  variables 의 수많은 값들 중, 실제 봐야하는 값을 확인 할 수 있을 것 같다.

- call stack 의 의미? (=호출스택)
  코드 실행에 따라 호출 스택이 쌓이는 곳.
  호출 스택은 기본적으로 우리가 프로그램 상에서 어디에 있는지를 기록하는 자료구조이다. 
  만약 함수를 실행하면(실행 커서가 함수 안에 있으면), 해당 함수는 호출 스택의 가장 상단에 위치한다. 
  함수의 실행이 끝날 때(리턴 값을 돌려줄 때), 해당 함수를 호출 스택에서 제거한다. 

- step over / step into / step out
  1. step over : 다음 줄에 나오는 명령을 실행하고 다음 줄로 점프한다.
  2. step into : 다음 줄에 함수 호출이 포함되어 있다면 Step Into는 해당 함수로 점프하고 첫 줄에서 멈춘다.
  3. step out : 현재 함수의 나머지 부분을 실행한 다음 함수 호출 뒤 다음 명령문에서 일시 중지한다.


# 모듈
- main.js
  console.log('main starting');
  const a = require('./a.js');
  const b = require('./b.js');
  console.log('in main, a.done = %j, b.done = %j', a.done, b.done);

- a.js
  console.log('a starting');
  exports.done = false;
  const b = require('./b.js');
  console.log('in a, b.done = %j', b.done);
  exports.done = true;
  console.log('a done');

- b.js
  console.log('b starting');
  exports.done = false;
  const a = require('./a.js');
  console.log('in b, a.done = %j', a.done);
  exports.done = true;
  console.log('b done');

- console
  main starting
  a starting
  b starting
  in b, a.done = %j false
  b done
  in a, b.done = %j true
  a done
  in main, a.done = %j, b.done = %j true true
  
