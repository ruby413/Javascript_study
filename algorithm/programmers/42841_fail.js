const solution = (baseball) => {
    let answer = 0;
    const strike = [];
    const ball = []; 
    baseball.forEach((cases)=>{
        cases[1] !== 0 ? strike.push(cases[0]) : false;
        cases[2] !== 0 ? ball.push(cases[0]) : false;
    })
    let newStrike = strike.map((number)=>{
       return String(number).split('');
    })
    // console.log(newStrike)
    
    // return answer
}