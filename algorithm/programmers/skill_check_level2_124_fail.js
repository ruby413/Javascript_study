const solution = (n) => {
    if (n === 1) {return "1"}
    if (n === 2) {return "2"}
    if (n === 3) {return "4"}
    if (n === 4) {return "11"}
    if (n === 5) {return "12"}
    if (n === 6) {return "14"}
    if (n > 6){
        let number = n-4;
        let thirdNumberStr = number.toString(3);
        let answerStr = ""
        for(let i=0; i<thirdNumberStr.length; i++){
            if (thirdNumberStr[i] === "1") {
                answerStr += "2"
            }
            if (thirdNumberStr[i] === "2") {
                answerStr += "4"
            }
            if (thirdNumberStr[i] === "0") {
                answerStr += "1"
            }
        }
        return answerStr
    }
}
