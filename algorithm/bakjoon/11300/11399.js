const solution = (input) => {
    input.sort((a,b)=>{return a-b})
    let answer = 0;
    let answerArr = [];
    for(let i=0; i<input.length; i++){
        answer += input[i];
        answerArr.push(answer);
    }
    let realAnswer = 0;
    for(let i=0; i<answerArr.length; i++){
        realAnswer += answerArr[i]
    }
    return realAnswer
}

console.log(solution([3,1,4,3,2]))

