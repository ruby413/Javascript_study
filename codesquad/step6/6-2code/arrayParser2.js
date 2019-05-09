const str = "['1a3',[null,false,['11',[112233],112],55, '99'],33, true]"

const ArrayParser = class {
    constructor(){
        this.tokenArr = []
    }
    tokenizer(str){
        let word = ""
        for(let i = 0; i<str.length; i++){
            if(str[i] === "[" || str[i] === "," || str[i] === "]"){
                this.tokenArr.push(word)                                        //일반토큰 푸쉬
                word = ""
                if(str[i] === "[" || str[i] === "]"){this.tokenArr.push(str[i])} //배열 토큰 푸쉬
            }else{
                if(!(str[i] == " " && str[i] == "[")){word = word + str[i]} //일반 토큰 생성
            }
        }
        this.tokenArr.forEach((token) => this.RemoveWhitespace(token))
        return this.tokenArr
    }
    RemoveWhitespace(token){
        if(token===""){this.tokenArr.splice(this.tokenArr.indexOf(""),1)}
    }
}

const arrayParser = new ArrayParser()
console.log(arrayParser.tokenizer(str).length)