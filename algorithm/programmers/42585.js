const solution = (arr) => {
    let stack = [];
    let cutQue = [];
    let answer = 0;
    for(let i=0; i<arr.length; i++){
        if((arr[i]==="(" && arr[i+1] === ")") || (arr[i-1]==="(" && arr[i] === ")")){   
            cutQue.push(arr[i])
            if(arr[i]===")"){
                answer += stack.length;
            }
        }else if(arr[i]==="("){
            stack.push(arr[i])
        }else if(arr[i]===")"){
            stack.pop();
            answer += 1;
        }
    }
    return answer
}