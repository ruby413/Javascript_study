function solution(n, lost, reserve) {
    
    reserve.forEach((el)=>{
        let an = lost.find((d)=>{return d == el+1 || d == el-1 || d == el})
        if(an !== undefined ){lost.splice(lost.indexOf(an),1); }
    })
    return n-lost.length;
}