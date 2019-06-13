const solution = (d, budget) => {
    let num = 0
    let answer = 0
    d.sort((a,b)=>{return a-b})
    d.forEach((el)=>{
        if(num <= budget){
            answer += 1
            num += el
        }
    })
    return num <= budget ? answer : answer-1
    
}
