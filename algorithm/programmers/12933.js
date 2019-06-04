const solution = (n) => {
    let numberArr = [...String(n)];
    let answer = ""
    numberArr.sort((a,b) => {return b-a}).forEach((el)=>{answer += el})
    return Number(answer)
}