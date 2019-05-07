const ArrayParser = class {
    constructor(){
        this.lexerArray = [];
        this.parseForm = {};
    }

    tokenize(str){
        const tokenArray = str.match(/\w+/g);
        const arrBlacket = str.split("");
        if(arrBlacket[0] === "["){
            tokenArray.unshift(arrBlacket[0]);
            tokenArray.push(arrBlacket[arrBlacket.length-1]);
        } 
        return tokenArray // '[','123','22','33',']'
    }

    lexer(arr){
        arr.pop();
        arr.forEach((el)=>{
            const lexerObj = {}
            if (el === '['){
                lexerObj.type = "array"
            }else if (!isNaN(Number(el))){
                lexerObj.type = typeof(el)
                lexerObj.value = el;
            }
            lexerObj.child = []
            this.lexerArray.push(lexerObj);
        });
        return this.lexerArray; // [{type : ... value : ... child : ...}]
    }

    parser(arr){ 
        if(this.lexerArray[0].type === "array"){
            this.lexerArray.shift();
            this.parseForm.type = "array";
            this.parseForm.child = this.lexerArray;
        }
        return this.parseForm
    }
}


const arrayParser = new ArrayParser()

const ArrayForm = (str) => {
    const tokenizer = arrayParser.tokenize(str)
    const lexer = arrayParser.lexer(tokenizer);
    const parser = arrayParser.parser(lexer)
    return parser;
}

const str = "[123, 22, 33]";
const result = ArrayForm(str);
console.log(JSON.stringify(result, null, 2)); 
