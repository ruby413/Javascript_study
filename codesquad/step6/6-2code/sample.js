//const str = "['1a3',[null,false,['11',[112233],112],55, '99'],33, true]"
const str = "['1a3',null,33, '99', true]"

const arr = str.split("");
//console.log(arr)

const makeArr = (arr) => {
    if (arr[0] === "["){
        answer = [];
        arr.shift()
       // answer.push(문자)
        arr.pop()
        arr.push(",") //배열 재구성
    }
    //return answer
}

const makeQue = (arr) => {
    let i = 0;
    let Que = [];
    let word = "";
    while(i<= arr.length-1){
        // 띄어쓰기
        if (arr[0] ===" "){
            arr.shift()
        }
        // string
        else if (arr[0] ==="'"){
            arr.shift() // string 시작 "'" 제거
            word = ""
            while(i<= arr.indexOf(',')){
                if(arr[i] === "'"){
                    arr.shift() // string 마지막 "'" 제거
                }else{
                    word = word+ arr[i];
                    arr.shift()
                } 
                if(arr.indexOf(',') === 0) {
                    break
                }
            }
            Que.push(word)
            arr.shift()
        }
        // array 
        // makeArr(arr); 
        // Que.push(answer)
        // }

        // not string, array => number, boolean, null
        else{
            word = ""
            while(i<= arr.indexOf(',')){
                word = word+ arr[i];
                arr.shift()
                if(arr.indexOf(',') === 0) {
                    break
                }
            }
            // boolean or null OR Number check
            if(word === "true" || word === "false"){
                word = Boolean(word)
            }else if(word === "null"){
                word = null;
                //break
            }else if(typeof(Number(word))==="number"){
                word = Number(word)
            }
            arr.shift()
            Que.push(word);
        }
    }
    return Que
}

makeArr(arr)
console.log(makeQue(arr))
//console.log(arr)