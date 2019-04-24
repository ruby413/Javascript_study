# step5-1
## 객체지향 프로그래밍
- 객체의 상태(state)와 행동(behavior)을 구체화하는 형태의 프로그래밍이 바로 객체 지향 프로그래밍

## class
- class 란 객체를 정의하는 틀 또는 설계도
- class 를 통해 여러 객체를 생성하여 사용함
- class 는 객체의 상태를 나타내는 "속성"과 행동을 나타내는 "메소드"로 구성됨.

## 캡슐화
- 연관있는 변수와 함수를 클래스로 묶는 작업
- 캡슐화에는 은닉성이 있어 클래스에 담는 내용 중 중요한 데이터나 기능을 외부에서 접근하지 못하게 할 수 있음.
- 외부의 잘못된 사용으로 인해 객체가 손상되지 않도록 하는데 이유가 있음.
- 일반 OOP 에서 지원하는 캡슐화
    - public
    - protected
    - private
- 자바스크립트의 캡슐화
    - 기본 public
    - private, protected 에 _붙여 선언
```js
function MyClass() {

    //public 프로퍼티
    this.프로퍼티이름 = 값;

    //private/protected 프로퍼티
    this._프로퍼티이름 = 값;
}

// public 메서드
MyClass.prototype.메서드이름 = function() {

}
// private/protected 메서드
MyClass.prototype._메서드이름 = function() {

}


//출처: https://webclub.tistory.com/156 [Web Club]
```

## 상속 (inheritance)
- 프로그래밍에서 상속은 자식이 부모를 선택해서 물려받는 것을 말함
- 자식 class 가 부모 class 의 멤버를 물려받는 것
- 상속 대상 : 부모의 속성과 메소드
- 부모 클래스를 한번만 수정하면 자식 클래스를 수정할 필요가 없다.
- 객체의 다형성을 구현할 수 있다.

## 다형성 (polymorphism)
- 다형성은 같은 타입이지만 실행 결과가 다양한 객체를 대입할 수 있는 성질을 말한다.
- 특정 기능을 선언 부분과 구현 부분으로 분리시킨 후, 구현 부분을 다양한 방법으로 만들어 사용하게 함.
- 선언부분과 구현 부분은 1:N 의 다형성 관계가 형성된다.
- ex ) USB 규격은 설계 부분인 인터페이스에 해당, USB기기들은 구현 부분
- 자바스크립트에서 다형성
    - 다형성 선언 부분 : 인터페이스(interface) 와 추상클래스 (abstract class)
    - 다형성 구현 부분 : class





- 참고 : https://webclub.tistory.com/156 [Web Club]
http://tcpschool.com/java/java_polymorphism_concept
https://webclub.tistory.com/406
