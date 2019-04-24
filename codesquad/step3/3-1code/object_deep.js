//실행결과
//["Yong", "hary", "solvin", "hani", "chulsu"]

/* 중요한 것 
    
*/

const data = require('./data2.js');
function x(data) {
    const answerArry = [];
    
    (function answer(obj){
        for (const key in obj) {
            if (obj[key].type === "sk"){
                answerArry.push(obj[key].name)
            }
            if(typeof obj[key] === "object"){
                for (const value in obj[key]) {
                    answer(obj[key][value])
                }
            }
        }
    })(data)

    return answerArry;
}


console.log(x(data));


