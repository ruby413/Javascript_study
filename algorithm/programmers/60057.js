const solution = (s) => {
    const sArray = s.split(""); // [a,b,c...]
    let strArray = []
    let makeStr = "";
    sArray.forEach((el, i)=>{
        if(sArray[i-1] !== el ){
            strArray.push(makeStr)
            makeStr = el;
        }else if(i === sArray.length-1){
            makeStr += el
            strArray.push(makeStr)
        }else{
            makeStr += el
        }
    })
    console.log("strArray", strArray)
    
    return num
}
