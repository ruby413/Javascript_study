const solution = (a, b) => {
    const cal = {1:31,2:29,3:31,4:30,5:31,6:30,7:31,8:31,9:30,10:31,11:30,12:31}
    const week = ["FRI","SAT","SUN","MON","TUE","WED","THU"]
    let day = 0;
    for (let i = 1; i < a; i++) {
       day = day + cal[i];
    }
    day = day + b
    return day % 7 !== 0 ? week[day % 7 - 1] : week[6]
}