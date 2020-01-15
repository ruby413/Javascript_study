const solution = (n) => {
    let bin = n.toString(2)
    let answer = 0;
    for (let i=0; i<bin.length; i++){
        bin[i] === "1" ? answer ++ : false
    }
    return answer
}
