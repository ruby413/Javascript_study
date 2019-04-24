// checkParam은 5와 6을 체크합니다.
const checkParam = require("./check.js");
const PI = Math.PI;

// printExecutionSequence 실행을 위한 call stack 저장소
const callStack = [];

// 1. 반지름을 입력받아 원의 넓이를 계산하는 함수를 만든다.
const roundArea = (r) => {
    callStack.push('roundArea');
    // checkParam(1, r);
    return PI * r ** 2;
}

// 2. 필요한 인자를 입력받아 사각형의 넓이를 계산하는 함수를 만든다.
const squareArea = (w, h) =>  {
    callStack.push('squareArea');
    // checkParam(2, w, h);
    return w * h;
}

// 3. 필요한 인자를 입력받아 사다리꼴의 넓이를 계산하는 함수를 만든다.
const trapezoidArea = (w1, w2, h) => {
    callStack.push('trapezoidArea');
    // checkParam(3, w1, w2, h);
    return squareArea(w1+w2, h/2);
};

// 4. 필요한 인자를 입력받아 원기둥의 넒이를 계산하는 함수를 만든다.
const cylinderArea = (r, h) => {
    callStack.push('cylinderArea');
    // checkParam(2, r, h);
    let cyRoundArea = roundArea(r);
    let cySquareArea = squareArea(2 * PI * r, h);
    return cyRoundArea * 2 + cySquareArea;
};

// 1부터 n까지의 반지름 n인 원의 넓이의 합
const sumRoundArea = (start, end) => {
    callStack.push('sumRoundArea');
    return end===1 ? roundArea(start) : roundArea(end)+ sumRoundArea(1, end-1)
};

// 모든 넓이의 합을 구하는 함수
const getArea = (shape, ...num) => {
    switch (shape) {
        case 'circle':
            if (num.length === 2) {
                return sumRoundArea(...num);    
            }
            checkParam(1, ...num)
            return roundArea(...num);
        case 'rect':
            checkParam(2, ...num)
            return squareArea(...num);
        case 'trapezoid':
            checkParam(3, ...num)
            return trapezoidArea(...num);
        case 'cylinder':
            checkParam(2, ...num)
            return cylinderArea(...num);
    }
}

// 지금까지 호출된 함수가 무엇인지 알려주는 함수
const printExecutionSequence = () => console.log(callStack);

module.exports = {
    roundArea,
    trapezoidArea,
    squareArea,
    cylinderArea,
    getArea,
    sumRoundArea,
    printExecutionSequence
}