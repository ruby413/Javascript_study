const solution = (arr) => {
    let answer = 0;
    for(let i of arr){
        answer = answer + i
    }
    answer = answer / arr.length
    return answer 
}