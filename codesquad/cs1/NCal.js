const NandF = (sth1, sth2) =>{
    const boolSth1 = Boolean(sth1);
    const boolSth2 = Boolean(sth2);
    return (boolSth1 && boolSth2 == true) ? false : true ;
}

const NorF = (sth1, sth2) =>{
    const boolSth1 = Boolean(sth1);
    const boolSth2 = Boolean(sth2);
    return !(boolSth1 || boolSth2) ;
}



// change
const changeNumF = (sth) => {
    return sth === false ? 0 : 1;
}

//adder
const carryF = (sth1, sth2) => {
    const carry = !NandF(sth1,sth2);
    return changeNumF(carry);
};

const sumF = (sth1, sth2) => {
    const Nand = NandF(sth1,sth2);
    console.log('nand : ' + Nand);
    const Or = !NorF(sth1,sth2);
    console.log('!norf : ' + Or);
    const sumValue = Nand && Or;
    console.log('sumValue : ', sumValue);
    return changeNumF(sumValue);
 };


// halfAdder
const halfAdderF = (sth1, sth2) => {
    let firstNum = carryF(sth1, sth2);
    let lastNum = sumF(sth1, sth2);
    
    return [firstNum, lastNum];
}

//fullAdder

const fullAdderF = (sth1, sth2, carry) => { 
   
    let halfAdder = halfAdderF(sth1,sth2);
    let sum1 = halfAdder[1];
    let carry1 = halfAdder[0];
    let halfAdderF2 = halfAdderF(carry, sum1);
    let carry2 = halfAdderF2[0];
    const fullCarry = carry1 || carry2;
    const fullSum = halfAdderF2[1];

    return [fullCarry,fullSum];
}


const sampleArr1 = [ 1, 1, 0, 1, 1, 0, 1, 0 ];
const sampleArr2 = [ 1, 0, 1, 1, 0, 0, 1, 1 ];
//결과 = [ 0, 0, 0, 1, 0, 1, 0, 0, 1 ]
//미션

const mission = (sth1, sth2) => {
    const defaultCarry = 0;
    const carryArr = [];
    const answer = [];

    //carryArr.push(defaultCarry);
    for (let i=0; i<sth1.length; i++){
        const arr1 = sth1[i];
        const arr2 = sth2[i];
        if (i === 0){   //처음
            let fullAns = fullAdderF(arr1, arr2, defaultCarry);
            answer.push(fullAns[1]);   //sum
            carryArr.push(fullAns[0]); //carry
        }else if (i === sth1.length-1){  //마지막
            let fullAns = fullAdderF(arr1, arr2, carryArr[i-1]);
            answer.push(fullAns[1],fullAns[0]);   //carry
        }else{   //중간
            let fullAns = fullAdderF(arr1, arr2, carryArr[i-1]);
            answer.push(fullAns[1]);   //sum
            carryArr.push(fullAns[0]); //carry
        }
    }

    return answer;
}
console.log(mission(sampleArr1, sampleArr2));


