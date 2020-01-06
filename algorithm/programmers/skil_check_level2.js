const solution = (n) =>{
    let binArr = n.toString(2).split("")
    let oneNum = 0
    binArr.forEach((el) => {
        el === "1" ? oneNum++ : false
    })

    for(let i =n+1; i<=1000000; i++){
        let oneNumNew = 0
        i.toString(2).split("").forEach((el)=>{el === "1" ? oneNumNew++ : false})
        if(oneNumNew === oneNum){
            return i
        }
    }
    return oneNum
}
