const str = "['1a3',[null,false,['11',[112233],112],55, '99'],33, true]"

[ { type: 'array', value: '[', child: [
        { type: 'string', value: '1a3', child: [] },
        { type: 'array', value: '[', child: [
            { type: 'object', value: null, child: [] },
            { type: 'boolean', value: true, child: [] },
            { type: 'array', value: '[', child: [
                    { type: 'string', value: '11', child: [] },
                    { type: 'array', value: '[', child: [
                            { type: 'number', value: 112233, child: [] },
                            ] },
                    { type: 'number', value: 112, child: [] },
            ] },
            { type: 'number', value: 55, child: [] },
            { type: 'string', value: '99', child: [] },
        ] },
        { type: 'number', value: 33, child: [] },
        { type: 'boolean', value: true, child: [] },
    ] },
]

 


const ArrayParser = class {
    constructor(){
        this.tokenArr = []
        this.lexerArray = [];
        this.tokenArrayStack = [];
    }
    tokenizer(str){
        let word = ""
        for(let i = 0; i<str.length; i++){
            if(str[i] === "[" || str[i] === "," || str[i] === "]"){
                this.tokenArr.push(word)                                        //일반토큰 푸쉬
                word = ""
                if(str[i] === "[" || str[i] === "]"){this.tokenArr.push(str[i])} //배열 토큰 푸쉬
            }else{
                if(!(str[i] ===" " && str[i] === "[")){word = word + str[i].trim()} //일반 토큰 생성
            }
        }
        this.removeToken(this.tokenArr,"")
        return this.tokenArr
    }

    removeToken(arr,token){
        arr.forEach((arrParam) => {if(arrParam===token){arr.splice(arr.indexOf(token),1)}})
    }


    lexer(arr){
        arr.forEach((token)=>{
            const lexerObj = {}
            let lexerToken
            if (token === '[' || token === ']'){
                lexerObj.type = "array"
                lexerObj.value = token
            }else{
                if((token === '[' || token === ']')){
                    lexerObj.type = "array"
                    lexerToken = token
                }else if (!isNaN(token)){
                    lexerToken = Number(token)
                }else if(token[0] === "'"){
                    lexerToken = token.match(/\w+/g)[0]
                }else if(token === "null"){
                    lexerToken = null
                }else if(token === "true" || token === "false"){
                    lexerToken = Boolean(token)
                }
                lexerObj.type = typeof(lexerToken)
                lexerObj.value = lexerToken
            }
            lexerObj.child = []
            this.lexerArray.push(lexerObj);
        });
        return this.lexerArray;
    }

    parser(lexerArray){ 

        1. arr 마지막 "[" 일 때,
        "[" 인덱스 < x < "]" 인덱스 푸쉬 , "[" 인덱스에
        "]" 인덱스 삭제
      
        2. (arr "[")의 끝에서 두번째 .value =="[" 의 인덱스 < x < "[" 인덱스
        "]" 인덱스 삭제
      
        lexerArray.forEach((el)=>{
            if(el==="["){
                this.tokenArrayStack.idx = lexerArray.indexOf(el)
            }

        })

        // for(let lexerParam of arr){
        //     if(lexerParam.value === "["){
        //         this.arrayStack.push(lexerParam.value)
        //     }
        // }
        for(let i=0; i<lexerArray.length-1; i++){
            if(lexerArray[i].type === "array"){
                lexerArray[i].child.push(lexerArray[i+1])
                lexerArray.splice(i+1,1)
            }
            if(lexerArray[i+1].type !== "array"){
                lexerArray[i].child.push(lexerArray[i+1])
                lexerArray.splice(i+1,1)
            }
        }
        // for(let i=0; i<lexerArray.length-1; i++){
        //     if(lexerArray[i].value === "]"){
        //         lexerArray[i-1].child.push(lexerArray[i].child[0])
        //         lexerArray.splice(i,1)
        //     }
        // }
        // for(let i=lexerArray.length/2-1; i>0; i--){
        //         lexerArray[i-1].child.push(lexerArray[i])
        //         lexerArray.splice(i,1)
        //         lexerArray[i-1].child.push(lexerArray[i+1].child[0])
        //         console.log(lexerArray[i])
        //         console.log(lexerArray[i+1])
        //         lexerArray.splice(i+1,1)
        // }
        return lexerArray
    }
}

const arrayParser = new ArrayParser()
const token = arrayParser.tokenizer(str)
const lexer = arrayParser.lexer(token)
console.log(lexer)
const parser = arrayParser.parser(lexer)
console.log(token)
console.log(lexer)
console.log(JSON.stringify(parser, null, 2))

