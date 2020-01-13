function solution(citations) {
    let answer = 0;
   for(let i =0; i<10000; i++){
       let ansArr = [];
       for(let j =0; j<citations.length; j++){
            citations[j]>=i ? ansArr.push(citations[j]) : false
        }    
        if(ansArr.length >= i){
            answer = i;
        }
    }
     return answer
}
