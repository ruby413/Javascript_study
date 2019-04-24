# javascript 기본문법
## 자바스크립트의 데이터 타입
- 원시타입 (primitive data type)
    - number
    - string
    - boolean
    - null
    - undefined
    - symbol (New in Exmascript 6)
- 객체타입 (Object data type)
    - object

자바스크립트는 다른 프로그래밍 언어와 다르게 데이터 타입이 동적으로 변수의 타입이 결정된다.

## 자바스크립트의 연산자
```js
// 산술 연산자
var area = 5 * 4; // 20

// 문자열 연결 연산자
var str = 'My name is ' + 'Lee'; // "My name is Lee"

// 할당 연산자
var color = 'red'; // "red"

// 비교 연산자
var foo = 3 > 5; // false

// 논리 연산자
var bar = (5 > 3) && (2 < 4);  // true

// 타입 연산자
var type = typeof 'Hi'; // "string"

// 인스턴스 생성 연산자
var today = new Date(); // Sat Dec 01 2018 00:57:19 GMT+0900 (한국 표준시)
```

- 암묵적 타입 강제 변환
```js
var foo = 1 + '10'; // '110'
var bar = 1 * '10'; // 10
```

