const solution = (arr,divisor) => {
    let answer = []
    arr.filter((el) => {
        if(el%divisor===0){
            answer.push(el)
        }
    })
    if(answer.length === 0){
        answer.push(-1)
    }
    answer.sort((a,b)=>{return a-b})
    return answer
}
console.log(solution([3, 2, 6], 10))