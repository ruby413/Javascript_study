const solution = (n) => {
    for (let j=n+1; j<n+100; j++){
        let now = count(n);
        let another = count(j)
        if(now === another){
            return j
        }
    }
}
    
const count = (n) => {
    let bin = (n).toString(2);
    let count = 0;
    for(let i=0; i<bin.length; i++){
        if(bin[i] === "1"){
            count = count + 1;
        }
    }
    return count;
}