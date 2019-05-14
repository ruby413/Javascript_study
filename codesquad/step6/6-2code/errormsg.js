const notString = (token) => { return `${token}은 올바른 문자열이 아닙니다!` }
const syntaxError = (token) => { return `${token}은 알 수 없는 타입입니다` }

module.exports = {
    notString, 
    syntaxError
}
