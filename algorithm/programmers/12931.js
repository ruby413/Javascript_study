const solution = (n) => {
    let answer = 0;
    [...String(n)].forEach((el)=>{answer += Number(el)})
    return answer
}