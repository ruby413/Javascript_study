const errorMsg = require('./errorMsg.js');
const Node = require('./node.js');

const str = "['1a3', [null, false, ['11', [112233], 112], 55, '99'], 33, true]"

// Error Case
// const str = "['1a'3']"
// const str = "[3d3]"

const ArrayParser = class {
    constructor(){
        this.tokenArr = []
        this.lexerArr = [];
        this.openBracketIdxStack = [];
        this.parserArr = [];
    }
    tokenizer(str){
        let word = ""
        for(let token of str){
            if(token === "[" || token === "," || token === "]"){
                this.tokenArr.push(word)                                        
                word = ""
                if(token === "[" || token === "]"){this.tokenArr.push(token)} 
            }else{
                word = word + token.trim() 
            }
        }

        this.removeToken(this.tokenArr,"")
        
        return this.tokenArr
    }

    removeToken(arr,token){
        this.tokenArr  =  arr.filter(el => el !== token)
    }
    

    lexer(tokenArr){
        tokenArr.forEach((token)=>{
            let lexerObj = this.makeLexerNode(token)
            this.lexerArr.push(lexerObj);
        });
        return this.lexerArr;
    }

    isArray(token){
        return token === '[' || token === ']' ? true : false
    }
    
    isNumber(token){
        return !isNaN(token) ? true : false
    }
    
    isString(token){
        return token[0] === "'" ? true : false
    }

    isNull(token){
        return token === "null" ? true : false
    }

    isBoolean(token){
        return token === "true" || token === "false" ? true : false
    }


    makeLexerNode(token){
        if (this.isArray(token)) {
            return new Node("array", token)
        }
        else if (this.isNumber(token)) {
            return new Node("number", Number(token))
        }
        else if (this.isNull(token)) {
            return new Node("null", null)
        }
        else if (this.isBoolean(token)) {
            token === "true" ? token = true : token = false 
            return new Node("boolean", token)
        } 
        else if (this.isString(token)) {
            if(token.match(/'/g).length % 2 === 0){
                token = token.match(/\w+/g)[0]
                return new Node("string", token)
            }else{
                throw new Error(errorMsg.notString(token))
            }
        }
        else {
            throw new Error(errorMsg.syntaxError(token))
        }
    }

    parser(str) {
        const token = this.tokenizer(str)
        const lexerArr = this.lexer(token)

        lexerArr.forEach((node)=>{
            this.makeParserArray(node)
        })
        this.parserArr.reverse();

        this.parserArr.forEach((parserArrObj)=>{
            this.parserArrayInOrder(parserArrObj)
        })
        
        this.parserArr = this.parserArr[this.parserArr.length-1]
        
        return this.parserArr 
    }

    makeParserArray(node){
        const token = this.tokenizer(str)
        const lexerArr = this.lexer(token)

        const nodeIndex = lexerArr.indexOf(node)
        if(node.value === '['){
            this.openBracketIdxStack.push(lexerArr.indexOf(node))
            this.parserArr.push(lexerArr[nodeIndex])
        }else if(node.value === ']'){ 
            this.openBracketIdxStack.pop();
        }else{
            this.parserArr[this.openBracketIdxStack.length-1].child.push(node)
        }
        return this.parserArr
    }

    parserArrayInOrder(parserArrObj){
        const parserObjIndex = this.parserArr.indexOf(parserArrObj)
        if(parserObjIndex !== 0){
            parserArrObj.child.push(this.parserArr[parserObjIndex-1])
        }
        return this.parserArr
    }
 }

const arrayParser = new ArrayParser()

const parser = arrayParser.parser(str)
console.log(JSON.stringify(parser, null, 2))


