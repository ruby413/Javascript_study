const arr = [1, 5, 2, 6, 3, 7, 4];
const commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]];



const solution = (arr, commands) => {
    const startIdx = commands.map(el => el[0]); //[2,4,1]
    const lastIdx = commands.map(el => el[1]);  //[5,4,7]
    const IdxArr = commands.map(el => el[2]);  //[3,1,3]
    const answer = [];
    for(let i = 0; i<startIdx.length; i++){
        let spliceArr = new Array;
        let newArr = Array.prototype.slice.call(arr);
        spliceArr = newArr.splice(startIdx[i]-1,lastIdx[i]-startIdx[i]+1)
        spliceArr.sort();
        let spliceIdx = IdxArr[i]-1
        answer.push(spliceArr[spliceIdx])
        newArr = arr;
    }
    
    return answer
}

const spliceArr = (arr) => {


}

solution(arr,commands)