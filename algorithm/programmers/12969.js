const solution = (n,m) => {
    let answer = ""
    let print =""
    for(let i=0; i<n; i++){
        answer += "*"
    }
    for(let j=0; j<m; j++){
        print = print + answer + "\n"
    }
    return print
}


console.log (solution(5,3))