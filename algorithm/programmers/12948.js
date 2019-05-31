const solution = (phone_number) =>{
    let arr = [...phone_number]
    let answer = ""
    for(let i =0; i<arr.length-4; i++){
        arr[i] = "*"
    }
    answer = arr.join('')
    return answer
}
console.log(solution("01033334444"))