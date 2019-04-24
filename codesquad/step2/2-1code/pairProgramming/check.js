const errorMsg = require("./errorMsg.js");

module.exports  = (rightNum, ...arg) => {
    checkParamNumber(rightNum, arg.length);
    checkNumber(arg);
}

// 인자가 숫자가 아닌지 검사하는 함수
const checkNumber = (argArr) => {
    for (let i of argArr) {
        if (typeof i !== "number"){
            throw new Error(errorMsg.NOT_A_NUMBER);
        }
    }
};

// 인자의 개수가 rightNum 보다 부족한지 검사하는 함수
const checkParamNumber = (rightNum, argNum) => {
    if (rightNum > argNum) {
        throw new Error(errorMsg.WRONG_PARAM_NUMBER);
    };
};


