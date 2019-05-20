const solution = (A,B) => {
    let answerNumber = 0
    A.sort(sortFuc);
    B.sort(sortReverseFuc);
    
    for( let i = 0; i < A.length; i++ ) {
       answerNumber =  answerNumber + (A[i] * B[i])
    }
    return answerNumber;
}
const sortFuc = (a,b) => {return a-b};
const sortReverseFuc = (a,b) => {return b-a};