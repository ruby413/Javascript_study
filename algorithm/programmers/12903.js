const s = "abcde"
//const s = "qwer"

const solution = (s) => {
    var answer = '';
    answer = s.length % 2 === 0 ? s[s.length / 2  - 1] + s[s.length / 2] : s[parseInt(s.length / 2)]
    return answer;
}

solution(s)