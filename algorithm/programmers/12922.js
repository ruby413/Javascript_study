const solution = (n) => {
    var answer = '';
    for(let i=1; i<=n; i++){
        answer = i%2 === 0 ? answer + "박" : answer = answer + "수"
    }
    return answer;
}

solution(4)