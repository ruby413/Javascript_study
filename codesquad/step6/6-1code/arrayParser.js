// const str = "[123, 22, 33]";
// const result = ArrayParser(str);
// console.log(JSON.stringify(result, null, 2)); 

// //result는 해당 배열을 분석한 형태이다.
// //예를들어, 다음과 같은 결과일 수 있다. (꼭 아래 형태일 필요 없음)

// { type: 'array',
//   child: 
//    [ { type: 'number', value: '123', child: [] },
//      { type: 'number', value: '22', child: [] },
//      { type: 'number', value: '33', child: [] } 
//     ] 
// }


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

const token = new Token();
token.signArr(str)
token.numberArr(str)

console.log(token.arrayStack)
console.log(token.numberStack)


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


const lexer = new Lexer();
lexer.makeChildObj(["123", "22", "33"])
console.log(lexer.child)

const Parser = class {
    constructor(str){
        this.contentArr = {"type": type, "value": value, "child": contentChild};
        this.child = [];
        this.arrayParserForm = {"type": type, "child": child};
    }
    excution(){
        
    }

}



// const arrayStack = []
// str.split("").forEach((el)=>{if(el === "[" || el === "]"){arrayStack.push(el)}})
// console.log(arrayStack)
// // console.log(str.split(""))

// // if (str.split("")[0]==="[")

// // const number = str.match(/\d+/g)
// // Number(number[0])


// console.log(str.match(/\w+/g))
