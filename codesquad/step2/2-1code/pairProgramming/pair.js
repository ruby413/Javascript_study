/*
1. 반지름을 입력받아 원의 넓이를 계산하는 함수를 만든다.
2. 필요한 인자를 입력받아 사각형의 넓이를 계산하는 함수를 만든다.
3. 필요한 인자를 입력받아 사다리꼴의 넓이를 계산하는 함수를 만든다.
4. 필요한 인자를 입력받아 원기둥의 넒이를 계산하는 함수를 만든다.
5. 숫자가 아니면 에러를 반환하도록 구현한다.
6. 인자의갯수가 부족하면 에러를 반환한다.
*/
const areaCalc = require("./areaCalc.js");

// console.log(areaCalc.roundArea()); // error
// console.log(areaCalc.roundArea("123")); // error
// console.log(areaCalc.roundArea(3));
// areaCalc.roundArea(3)
areaCalc.getArea('circle', 3);

// console.log(areaCalc.squareArea(3)); // error
// console.log(areaCalc.squareArea(3, "5")); // error
// console.log(areaCalc.squareArea(3, 5));
// areaCalc.squareArea(3, 5)
areaCalc.getArea('rect', 3, 4);

// console.log(areaCalc.trapezoidArea(2,5)); // error
// console.log(areaCalc.trapezoidArea("abc",3,5)); // error
// console.log(areaCalc.trapezoidArea(2,5,3)); 
// areaCalc.trapezoidArea(2, 5, 3)
areaCalc.getArea('trapezoid', 2, 5, 3);

// console.log(areaCalc.cylinderArea(3)); // error
// console.log(areaCalc.cylinderArea("cc", 3)); // error
// console.log(areaCalc.cylinderArea(2, 4));
// areaCalc.cylinderArea(2, 4)
areaCalc.getArea('cylinder', 2, 4);

// 1부터 n까지의 반지름 n인 원의 넓이의 합
areaCalc.getArea('circle', 1, 4);

// 지금까지 호출된 함수가 무엇인지 알려주는 함수
areaCalc.printExecutionSequence();

// 에러 테스트 코드
// console.log(getArea('rect', 10)); // 인자의 개수 부족 에러
// console.log(getArea('rect', 10, undefined)); // 인자가 숫자가 아닌 에러