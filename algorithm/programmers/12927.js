const solution = (s) => {
    let stringArray = [...s];
    let answer = ""
    stringArray.sort();
    stringArray.reverse();
    stringArray.forEach((el)=>{
        answer = answer + el
    })
    return answer
}
