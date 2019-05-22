const solution = (n, m) => {
    var answer = [];
    answer = [smallMath(n,m) , (n*m)/smallMath(n,m)]
    return answer
}

const smallMath = (r, m) => {
    return r % m === 0 ? m : smallMath(m, r % m)
}
 