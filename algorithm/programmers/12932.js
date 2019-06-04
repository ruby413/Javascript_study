const solution = (n) => {
    let numberArr = [...String(n)]
    let answer = []
    numberArr.reverse().forEach((el)=>{answer.push(Number(el))});
    return answer
}