process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    let [n,m] = data.split(" ");
    let answer = "";
    for(let j=1; j<=m; j++){
        for(let i=1; i<=n; i++){
            answer += "*"
        }
        if(j!==m){
            answer += `\n`
        }
    }
    console.log(answer)
})
