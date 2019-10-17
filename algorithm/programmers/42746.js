const solution = (numbers) => {
    let newNumber = numbers.sort((a,b)=>{
        return String(b).repeat(4).slice(0,4) - String(a).repeat(4).slice(0,4);
    })
    let answer = newNumber.reduce((a,b)=>{return String(a)+String(b)})
    return Number(answer) == 0 ? "0" : answer
}