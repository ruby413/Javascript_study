function solution(s) {
    let sArr = s.split(' ');
    let newWord = "";
    let answer = "";
    sArr.forEach((word)=>{
        for(let i=0; i<word.length; i++){
            i%2==0 ? newWord += word[i].toUpperCase() : newWord += word[i].toLowerCase();
        }
        newWord = newWord + " "
    })
    answer = newWord.substr(0,newWord.length-1)
    return answer
}
