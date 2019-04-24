//0부터 256 미만의 Int 정수형 10진수를 [Bool] 2진수 배열로 변환하는 dex2bin 함수를 구현한다.

const answerArray = [];
const doubleNumber = (Num) => {
    for(let i=0; i<=8; i++){
        if (parseInt(Num/(2**i)) === 1){return i}
    }
}
const dex2bin = (Num) => {
	for(let i=0; i<=doubleNumber(Num); i++){
		const answer = parseInt(Num/(2**i)%2);
		answerArray.push(answer);
    }
    return answerArray;
}
console.log(dex2bin(173))



//[Bool] 2진수 배열을 Int 정수형 10진수로 변환하는 bin2dec 함수를 구현한다.

const bin2dec = (arr) => {
    let answer = 0;
    for (let i in arr) {
        let binAnswer;
        arr[i]===0 ? binAnswer=0 : binAnswer= 2**i;
        answer = answer+binAnswer;
    }
    return answer;
}
console.log(bin2dec([1,1,1,1,0,1,0,1]));
