const str = "['1a3',[null,false,['11',[112233],112],55, '99'],33, true]"

const ArrayParser = class {
    constructor(){
        this.tokenArr = []
        this.lexerArray = [];
    }
    tokenizer(str){
        let word = ""
        for(let i = 0; i<str.length; i++){
            if(str[i] === "[" || str[i] === "," || str[i] === "]"){
                this.tokenArr.push(word)                                        //일반토큰 푸쉬
                word = ""
                if(str[i] === "[" || str[i] === "]"){this.tokenArr.push(str[i])} //배열 토큰 푸쉬
            }else{
                if(!(str[i] ===" " && str[i] === "[")){word = word + str[i]} //일반 토큰 생성
            }
        }
        this.removeToken(this.tokenArr,"")
        return this.tokenArr
    }

    removeToken(arr,token){
        arr.forEach((arrParam) => {if(arrParam===token){arr.splice(arr.indexOf(token),1)}})
    }


    lexer(arr){
        this.removeToken(arr,"]")
        arr.forEach((token)=>{
            const lexerObj = {}
            let lexerToken
            if (token === '['){
                lexerObj.type = "array"
            }else if(token !== ']'){
                if (!isNaN(token)){
                lexerToken = Number(token)
                }
                lexerObj.type = typeof(lexerToken)
                lexerObj.value = lexerToken
            }
            lexerObj.child = []
            this.lexerArray.push(lexerObj);
        });
        return this.lexerArray;
    }
}

const arrayParser = new ArrayParser()
const token = arrayParser.tokenizer(str)
console.log(token.length)
console.log(arrayParser.lexer(token))

