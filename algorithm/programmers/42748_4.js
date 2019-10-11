const solution = (arr, commends) => {
    const answer = [];
    commends.forEach((comArr)=>{
        let [i,j,k] = comArr;
        let number = arr.slice(i-1,j).sort((a,b) => {return a-b})[k-1];
        answer.push(number)
    })
    return answer
}
