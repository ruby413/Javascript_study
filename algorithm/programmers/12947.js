const solution = (arr) => {
    let answer = 0;
    [...String(arr)].forEach((el)=>{answer += Number(el)})
    return arr%answer === 0 ? true : false
}