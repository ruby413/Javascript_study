/* const numberList = [1000, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 
const initValue = 0;
 
const totalResult = numberList.reduce((initialValue, currentValue, currentIndex, array) => {
    return initialValue + currentValue;
},[]);

console.log(totalResult);  */


const myReduce = (arr, callback, initialValue) => {
    let answer = 0 
    for(let i in arr){
        callback.cur = arr[i];
        callback.initial = arr[0];
        answer  = 
    };


    callback = (cur, initial) => {
        let accumulate = callback.cur;
        let initialValue = callback.initial;
        for(let i of arr){
            initialValue = i;
            initialValue += accumulate;
        } 
    }
    return callback.accumulate;
}

console.log(myReduce([0,1,2,3], (cur, initial) => {cur+initial}, []));

//const result = myReduce(arr, (next,prev) => {...}, []);

//acc : 중첩된 더해진 값
//initial : 더해지는 수