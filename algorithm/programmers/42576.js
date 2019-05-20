
const solution = (participant, completion) => {
    let partPeople = participant.sort()
    let completePeople = completion.sort();
    for (let i = 0; i < participant.length; i++) {
        if (partPeople[i] !== completePeople[i]) {
            return partPeople[i] 
        }
    }
}

console.log(solution(["mislav", "stanko", "mislav", "ana"],["stanko", "ana", "mislav"]))