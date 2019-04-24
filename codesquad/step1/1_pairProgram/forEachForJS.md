# JavaScript 에서 배열의 forEach 사용법

forEach() 메소드는 배열의 인자값만큼 fucntion이 반복된다.
3개의 매개변수 를 사용할수 있다.

- item : 배열 내 현재 값
- index : 배열내 현재값의 인덱스
- array : 현재 배열

## forEach 예시

var sum = 0;
var obj = [5,13,8];

obj.forEach(function(item,index,array){
  sum +=item;
});

console.log(sum);
