//실행결과
//["width", "height", "hOffset", "vOffset", "size", "hOffset", "vOffset"]

/* 중요한 것 
    for in -> key가 있을 때 key를 출력함.
    array[key] -> value 
*/

const data = require('./data1.js');

const arry = data.data1;
const keyArray = [];
const answer = () => {
    for(let name in arry) {
        for(let name2 in arry[name]){
            const arry2 = arry[name];
            if(typeof arry2[name2] === "number"){
                keyArray.push(name2);
            }
        }
    }
    return keyArray
};


console.log(answer());


