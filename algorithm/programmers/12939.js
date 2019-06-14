const solution = (s) => {
    let strArr = s.split(' ')
    let numStr = []
    strArr.forEach((el)=>{ numStr.push(Number(el))})
    return Math.min(...numStr) +" "+ Math.max(...numStr); 
}