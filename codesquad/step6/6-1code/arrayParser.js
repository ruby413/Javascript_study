// const str = "[123, 22, 33]";
// const result = ArrayParser(str);
// console.log(JSON.stringify(result, null, 2)); 

// //result는 해당 배열을 분석한 형태이다.
// //예를들어, 다음과 같은 결과일 수 있다. (꼭 아래 형태일 필요 없음)




// const token = new Token();

// console.log(token("[123, 22, 33]"))

const str = "[123, 22, 33]";;
const Token  = class {
    constructor(){
        this.arrayStack = [];   // ["[", "]"]
        this.numberStack = this.numberArr(str)   //["123", "22", "33"]
    }

    signArr(str){
        str.split("").forEach((el)=>{if(el === "[" || el === "]"){this.arrayStack.push(el)}});
    }
    numberArr(str){
        return str.match(/\w+/g);
    }
}


const Lexer = class {
    constructor(){
        this.child = [];
        this.lastChild = [];
    }
    typeCheck(val){ // 입력 : value,  출력 : type
        if(Number(val) !== NaN) {
           val = Number(val);
        }
        return typeof(val) 
    }
    makeChildObj(val){ // 입력 : token.numberStack, ["123", "22", "33"] 출력 : { type: 'number', value: '123', child: [] }
        val.forEach((el)=>{
            const childObj = {}
            childObj.type = this.typeCheck(el);
            childObj.value = el;
            childObj.child = this.typeCheck(el) === "number" ? this.lastChild : this.child;
            
            this.child.push(childObj);
        });
    }
}

// const token = new Token();
// const lexer = new Lexer();
// token.signArr(str)
// token.numberArr(str)
// lexer.makeChildObj(token.numberStack)

// console.log(token.arrayStack)
// console.log(token.numberStack)

// console.log(lexer.child)

// { type: 'array',
//   child: 
//    [ { type: 'number', value: '123', child: [] },
//      { type: 'number', value: '22', child: [] },
//      { type: 'number', value: '33', child: [] } 
//     ] 
// }

const Parser = class {
    constructor(){
        this.parseForm = {};
    }
    makeArrayParser(lexerChild, signStack){ // 입력 : signStack 마지막, 출력 : 폼
        if (signStack[signStack.length-1] === ']'){
            this.parseForm.type = 'array';
        }
        this.parseForm.child = lexerChild;
    }
}
const token = new Token();
const lexer = new Lexer();
const parser = new Parser()
token.signArr(str)
token.numberArr(str)
lexer.makeChildObj(token.numberStack)
parser.makeArrayParser(lexer.child, token.arrayStack)

console.log(token.arrayStack)
console.log(token.numberStack)
console.log(lexer.child)
console.log(parser.parseForm)



// const arrayStack = []
// str.split("").forEach((el)=>{if(el === "[" || el === "]"){arrayStack.push(el)}})
// console.log(arrayStack)
// // console.log(str.split(""))

// // if (str.split("")[0]==="[")

// // const number = str.match(/\d+/g)
// // Number(number[0])


// console.log(str.match(/\w+/g))
