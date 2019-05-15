const errorMsg = require('./errorMsg.js');
const str = "['1a3',[null,false,['11',[112233],112],55, '99'],33, true]"
// const str = "['1a'3']"
// const str = "[3d3]"

const ArrayParser = class {
    constructor(){
        this.tokenArr = []
        this.lexerArray = [];
        this.openBracketIdxStack = [];
        this.parserArr = [];
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
        arr.map((el)=>{
            return this.lexerArray.push({type : })
        })

        arr.forEach((token)=>{
            const lexerObj = {}
            let lexerToken
            if (token === '[' || token === ']'){
                lexerObj.type = "array"
                lexerObj.value = token
                lexerObj.type = "array"
            }else{
                if (!isNaN(token)){
                    lexerToken = Number(token)
                }else if(token[0] === "'"){
                    if(token.match(/'/g).length%2 === 0){
                        lexerToken = token.match(/\w+/g)[0]
                    }else{
                        throw new Error(errorMsg.notString(token))
                    }
                }else if(token === "null"){
                    lexerToken = null
                }else if(token === "true" || token === "false"){
                    token === "true" ? lexerToken = true : lexerToken = false 
                }else{
                    throw new Error(errorMsg.syntaxError(token))
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
            let lexerObjIndex = lexerArr.indexOf(lexerObj)
            if(lexerObj.value ==="["){
                this.openBracketIdxStack.push(lexerArr.indexOf(lexerObj))
                this.parserArr.push(lexerArr[lexerObjIndex])
            }else if(lexerObj.value === ']'){ 
                this.openBracketIdxStack.pop();
            }else{
                this.parserArr[this.openBracketIdxStack.length-1].child.push(lexerObj)
            }
        })
        this.parserArr.reverse();
        this.parserArr.forEach((parserObj)=>{
            let parserObjIndex = this.parserArr.indexOf(parserObj)
            if(parserObjIndex !==0){
                parserObj.child.push(this.parserArr[parserObjIndex-1])
            }
        })
        this.parserArr = this.parserArr[this.parserArr.length-1]
        
        return this.parserArr 
    }


 }

const arrayParser = new ArrayParser()
const token = arrayParser.tokenizer(str)
const lexer = arrayParser.lexer(token)
console.log(token)
console.log(lexer)
const parser = arrayParser.parser(lexer)
// console.log(token)
// console.log(lexer)
 console.log(arrayParser.openBracketIdxStack)
console.log(JSON.stringify(parser, null, 2))
