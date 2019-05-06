// 가변형 Stack
class Stack {
    constructor(){
        this.stack = [];
        this.size = this.stack.length;
        this.peek = this.stack[this.size-1];
    }
    push(item){
        this.stack.push(item);
    }
    pop(){
        this.stack.pop(this.peek);
    }
    size(){
        return this.size;
    }
    peek(){
        return this.peek;
    }
    isEmpty(){
        return this.stack === [] ? true : false;
    }
}

const stack = new Stack();

// 고정형 Stack
class fixStack {
    constructor(){
        this.stack = []
    }
}

// Tdd  - 가변형 Stack
stack.push(3);
stack.pop();
stack.push(5);
const sizeTest = stack.size();
const peekTest = stack.peek();
const emptyTest = stack.isEmpty();

console.log(stack)
console.log(sizeTest)
console.log(peekTest)
console.log(emptyTest)



