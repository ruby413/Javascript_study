const solution = (clothes) => {
    let clothesJson = {};
    let answer = 0;
    clothes.forEach((el)=>{
        let spacies = el[1];
        !clothesJson.hasOwnProperty(spacies)? clothesJson[spacies]= 1 : clothesJson[spacies]++;
    });
    Object.keys(clothesJson).length === 1 ? answer = clothesJson[Object.keys(clothesJson)[0]] : answer = doubleNum(clothesJson) -1;
    return answer
}

const doubleNum = (json) =>{
    let double = 1;
    for (let keys in json) {
      double *= json[keys]+1;
    }
    return double
} 