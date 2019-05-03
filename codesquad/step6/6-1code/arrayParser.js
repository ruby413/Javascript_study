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


// const Token = class {
//     constructor(str){
//         this.type = typeof this.value;
//         this.value = this.value;
//         this.child = this.child;
//     }

//     toString(){
//         return this.child + this.value + "," + this.child;
//     }
// }

// const token = new Token();

// console.log(token("[123, 22, 33]"))


const Token  = class {
    constructor(str){
        this.tokenArr = str.split("");
        this.contentArr = str.match(/\d+/g);
        this.arrayStack = [];
    }

    signCheck(){
        tokenArr.forEach((el)=>{if(el === "[" || el === "]"){arrayStack.push(el)}});
    }
}

const Lexer = class {
    constructor(str){
        this.lexerType = typeof(str);
        this.lexerValue = str;
        this.child = this.child;
    }
}

const Parser = class {
    constructor(str){
        this.contentArr = {"type": type, "value": value, "child": contentChild};
        this.child = [];
        this.arrayParserForm = {"type": type, "child": child};
    }
    excution(){
        
    }

}


const str = "[123, 22, 33]";;
const arrayStack = []
str.split("").forEach((el)=>{if(el === "[" || el === "]"){arrayStack.push(el)}})
console.log(arrayStack)
// console.log(str.split(""))

// if (str.split("")[0]==="[")

// const number = str.match(/\d+/g)
// Number(number[0])


console.log(str.match(/\w+/g))
