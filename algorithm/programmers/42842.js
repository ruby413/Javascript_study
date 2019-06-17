const solution = (brown, red) => {
    let answer = [];
    for(let b =0; b<=5000; b++){
        for(let r =0; r<=5000; r++){
            let bro =  2*r+4+2*b;
            let re = b*r;
            if(bro=== brown && re === red){
             answer.push(r+2)
             answer.push(b+2)
             return answer   
            }
        }
    }
}
