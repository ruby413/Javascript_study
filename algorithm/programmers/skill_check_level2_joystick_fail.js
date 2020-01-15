function solution(name) {
    const alphabet = {0:"A",1:"B",2:"C",3:"D",4:"E",5:"F",6:"G",7:"H",8:"I",9:"J",10:"K", 11:"L", 12:"M", 13:"N",14:"O", 15:"P", 16:"Q", 17:"R", 18:"S", 19:"T", 20:"U", 21:"V", 22:"W", 23:"Y", 24:"X", 25:"Z"};
    let answer = 0
    for(let i=0; i<name.length; i++){
        for(let j in alphabet) {
           if(name[i] === alphabet[j]){
               Number(j) > 13 ? answer += 26-Number(j) : answer += Number(j)
           }
        }
        if(i!==0&& name[i]!=="A"){
            answer ++
        }
    }
    return answer
}
