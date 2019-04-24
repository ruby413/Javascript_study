//f(n) = f(n-1)*n

// factorior
const factorior = (num) => {
    
        if (num > 1){
            return factorior(num-1) * num;
        }else if(num === 1){
            return 1;
        }

}

//console.log(factorior(5));


//binary search
const targetNum = 2;
const arr = [1,2,3,4,5,6,7,8,9,10];
const firIdx = 0;
const lastIdx = arr.length-1;

const binarySearch = (firIdx, lastIdx, targetNum, arr) => {

    let midIdx = Math.floor((firIdx + lastIdx) / 2);
    
    if (arr[midIdx] > targetNum){
        lastIdx = midIdx -1;
        return binarySearch(firIdx, lastIdx, targetNum, arr);
    }else if (arr[midIdx] < targetNum) {
        firIdx = midIdx +1;
        return binarySearch(firIdx, lastIdx, targetNum, arr);
    }else if (arr[midIdx] === targetNum){
        return midIdx;
    }

};

console.log(binarySearch(firIdx, lastIdx, targetNum, arr))

