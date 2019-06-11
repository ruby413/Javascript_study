const solution = (n) =>{
    let answer = n;
    
    for(let i=0; i<500; i++){
        if(answer === 1){
            return i;
        }else{
            answer%2===0 ? answer = answer/2 : answer = answer*3+1
        }
    }
    answer = -1;
    return answer
}