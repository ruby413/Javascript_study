const solution = (arr) => {
   let minNum = Math.min(...arr)
   arr.splice(arr.indexOf(minNum),1);
   if(arr.length === 0){
       arr.push(-1)
       return arr
   }else {
       return arr
   }
}