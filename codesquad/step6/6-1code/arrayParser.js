const Token  = class {
    constructor(){
        this.arrayStack = []; 
    }

    signArr(str){
        str.split("").forEach((el)=>{if(el === "[" || el === "]"){this.arrayStack.push(el)}});
    }
    numberArr(str){
        return str.match(/\w+/g);
    }
}

const Parser = class {
    constructor(){
        this.child = [];
        this.lastChild = [];
        this.parseForm = {};
    }
    lexer(val){ 
        if(Number(val) !== NaN) {
           val = Number(val);
        }
        return typeof(val) 
    }

    makeChildObj(val){
        val.forEach((el)=>{
            const childObj = {}
            childObj.type = this.lexer(el);
            childObj.value = el;
            childObj.child = this.lexer(el) === "number" ? this.lastChild : this.child;
            
            this.child.push(childObj);
        });
    }

    makeArrayParser(lexerChild, signStack){ 
        if (signStack[signStack.length-1] === ']'){
            this.parseForm.type = 'array';
        }
        this.parseForm.child = lexerChild;
    }
}


const token = new Token();
const parser = new Parser()

const ArrayForm = (str) => {
    token.signArr(str);
    const numberStack = token.numberArr(str)
    parser.makeChildObj(numberStack)
    parser.makeArrayParser(parser.child, token.arrayStack)
    return parser.parseForm
}

const str = "[123, 22, 33]";
const result = ArrayForm(str);
console.log(JSON.stringify(result, null, 2))
