const solution = (arr) => {
    let answer = []
    arr.forEach((el,i)=>{
        if(i===0){
            answer.push(arr[0])
        }else{
            if(el !== arr[i-1]){
                answer.push(el)
            }
        }
    })
    return answer
}