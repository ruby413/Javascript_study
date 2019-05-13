const str = "['1a3',[null,false,['11',[112233],112],55, '99'],33, true]"

//   { type: 'array', value: '[', child: [
//     { type: 'string', value: '1a3', child: [] },
//     { type: 'array', value: '[', child: [
//         { type: 'object', value: null, child: [] },
//         { type: 'boolean', value: true, child: [] },
//         { type: 'array', value: '[', child: [
//             { type: 'string', value: '11', child: [] },
//             { type: 'array', value: '[', child: [
//                 { type: 'number', value: 112233, child: [] },
//             ] },
//             { type: 'number', value: 112, child: [] },
//         ] },
        
//         { type: 'number', value: 55, child: [] },
//         { type: 'string', value: '99', child: [] },
//       ] },
//       { type: 'number', value: 33, child: [] },
//       { type: 'boolean', value: true, child: [] },
//   ] }

 


const ArrayParser = class {
    constructor(){
        this.tokenArr = []
        this.lexerArray = [];
        this.openBracketIdxStack = [];
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

    parser(lexerArr) {
        lexerArr.forEach((lexerObj)=>{
            if(lexerObj.value ==="["){
                this.openBracketIdxStack.push(lexerArr.indexOf(lexerObj))
            }
        })

        lexerArr.forEach((el)=>{
            let elIndex = lexerArr.indexOf(el)
            if (el.value !=='['){
                lexerArr[elIndex-1].child.push(lexerArr[elIndex])
                lexerArr.splice(elIndex,1)
                // if(lexerArr[elIndex-1].value ==='['){
                //     lexerArr[elIndex-1].child.push(lexerArr[elIndex])
                //     lexerArr.splice(elIndex,1)
                // }
            }
        })
        // for(let i=0; i<lexerArr.length; i++){
        //     if(lexerArr[i].value === '['){
        //         for(let j=i; j<openBracketIdxStack[i]; j++){
        //             lexerArr[j].child.push(lexerArr[j+1]);
        //             lexerArr.splice(j+1,1);
        //         }
                
        //         // if(lexerArr[i].value !== '['){
        //         //     continue;
        //         // }
        //     }
        // }
        return lexerArr
    }
 }

const arrayParser = new ArrayParser()
const token = arrayParser.tokenizer(str)
const lexer = arrayParser.lexer(token)
console.log(lexer)
const parser = arrayParser.parser(lexer)
// console.log(token)
// console.log(lexer)
 console.log(parser)
 console.log(JSON.stringify(parser, null, 2))

   // const openBracketLastIdx = this.openBracketIdxStack[this.openBracketIdxStack.length-1]
        // for (let stackIdx = 0; stackIdx<this.openBracketIdxStack.length; stackIdx++ ){
        //     for (let i = this.openBracketIdxStack[stackIdx]; i<this.findFirstTokenIdx(lexerArray,"]"); i++){
        //         lexerArray[i].child.push(lexerArray[i+1])
        //         lexerArray.splice(i+1,1)
        //     }
        //     lexerArray.splice(this.findFirstTokenIdx(lexerArray,"]"),1)
        // }
        // console.log(lexerArray)