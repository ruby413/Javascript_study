> 목요일 오시기 전까지 셀프시험을 보도록 해주세요. (종이나 워드에 작성)

> 제출은 없습니다.

> 각 항목 2줄이상작성. 3분내에 작성완료(빠르게 답변해야 하는게 중요) 

> 총 제한시간 30분.(시간재고. 매우 중요)

> 동료와 상의 금지. 집에서 혼자 보기.

> 셀프채점하시고, 
틀렸으면 책 통해서 공부하시기 바랍니다. 
(본 시험은  조만간 다시 봅니다)

<br/>

1.  클로저에 대해서 설명해보세요.
    
- 클로저가 있기 때문에 내부함수가 외부함수보다 더 오래 남아있을 때, 외부함수 밖의 내부함수가 호출되더라도, 외부의 지역변수에 접근가능 하다. 함수 자신이 선언되었던 때의 스코프를 기억하여, 외부에서 내부함수를 호출할 때 그 환경에 접근할 수 있다. 

<br/>

2. let과 const의 차이에 대해서 설명해보세요.

- let과 const 는 둘다 block scope 내부에서 작동한다. let 은 재선언이 불가능한 변수선언이며, const 는 재선언 뿐만 아니라, 값의 변동도 불가능한 변수선언이다. 하지만 변수 선언 자체가 메모리가 있는 위치를 참조하고 있는 원리이기에, 메모리 안에서 발생되는 '배열에서 값을 추가하는 방식'은 const 에서도 가능하다.

<br/>

3. 비동기 코드에서 콜백큐와 콜스택에 관계에 대해서 설명해보세요.

- 비동기 코드가 실행될 때, 비동기 코드는 콜스택에 들어간다. 콜스택에서 실행될 때, 비동기 코드는 웹 API에 들어가게 되며, 웹 API에 있는 기능에 따라 비동기 코드는 콜백큐로 들어가게 된다. 이때 setTimeout 과 같은 비동기 코드는 선언된 시간동안 웹 API에서 대기한 후, 내부 콜백함수가 콜백큐에 들어가게 되며, 콜백큐에서는 들어온 순서에 따라 이벤트 루프를 통해 다시 콜스택에 들어가 함수가 실행하게 된다.

<br/>

4. prototype chain은 무엇인가요? 

- prototype 체인에 따라 prototype에 메소드가 없을 때, 부모 prototype의 메소드를 찾게 된다. prototype chain에 따라 자식 prototype은 부모 prototype의 property 와 method를 사용할 수 있으며, 이러한 구조는 prototype chain으로 묶여있다.

<br/>

5. constructor 는 무엇인가요? 

- 생성자는 new 연산자와 같이 사용되어 클래스로부터 객체를 생성할 때 호출되어 객체의 초기화를 담당한다. 연산자 new 에 의해 class의 인스턴스가 생성되며, class 함수가 호출되어 수행하게 된다.

<br/>

6. this키워드의 상황별 동작에 대해서 설명해보세요.

- this 는 상위 scope을 가리킨다. 따라서 일반 일차 함수 내에서 this 키워드를 사용하면, 전역을 바라보게 된다. class 객체를 사용할 때에는 constructor 에 this 를 붙여 class 내부의 property로 선언되며, 같은 class 내부에서 method를 사용할 때, property 앞에 동일하게 this를 붙여 선언한다.

```js
var foo = function () {
  console.dir(this);
};

// 1. 함수 호출
foo(); // window
// window.foo();

// 2. 메소드 호출
var obj = { foo: foo };
obj.foo(); // obj

// 3. 생성자 함수 호출
var instance = new foo(); // instance

// 4. apply/call/bind 호출
var bar = { name: 'bar' };
foo.call(bar);   // bar
foo.apply(bar);  // bar
foo.bind(bar)(); // bar
```

<br/>

7. Node.js에서 require 를 통한 모듈관리 방법의 원리는 무엇인가요? 

- 모듈이 분리되어 있을 때, export 한 모듈을 받는 역할을 한다. require 로 export 한 모듈의 위치를 적어 호출한 후, 호출 경로를 변수로 받아, 해당 변수를 통해 export 모듈의 object 객체를 받는다.

<br/>

8. bind는 무엇을 할때 쓰는 것인가요? 동작방식에 대해서 설명해보세요.

- 일반함수에서 선언되어 있는 this 의 스코프를 설정할 수 있다. bind 메소드에 있는 객체가 this 가 가리키는 함수가 된다. arrow function은 this 가 지정되어 있기 때문에 bind 를 쓸 수 없다.

<br/>

9. destructuring 예시코드를 작성해보세요.

```js
let [first,second,third] = ["Tony","Torr","Hurk"];
```

<br/>

10. arrow function과 일반 function의 차이에 대해서 설명하세요.

-  arrow function 과 일반 function 은 this 에 관해 가장 큰 차이를 가지고 있다. 일반함수는 메소드를 제외한 내부함수와 콜백함수의 this가 전역을 바라보며, 함수를 어떻게 호출하느냐에 따라 동적으로 결정된다. arrow function 의 this 는 언제나 상위 scope의 this 를 가리킨다.