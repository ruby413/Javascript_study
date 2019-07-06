// 정수 n이 주어지면, n개의 여는 괄호 "("와 n개의 닫는 괄호 ")"로 만들 수 있는 괄호 조합을 모두 구하시오. (시간 복잡도 제한 없습니다).
// Given an integer N, find the number of possible balanced parentheses with N opening and closing brackets.

// 예제)
// Input: 1
// Output: ["()"]
// Input: 2
// Output: ["(())", "()()"]
// Input: 3
// Output: ["((()))", "(()())", "()(())", "(())()", "()()()"]

var lexerArray = [ { type: 'array', value: '[', child: [] },
  { type: 'string', value: '1a3', child: [] },
  { type: 'array', value: '[', child: [] },
  { type: 'object', value: null, child: [] },
  { type: 'boolean', value: true, child: [] },
  { type: 'array', value: '[', child: [] },
  { type: 'string', value: '11', child: [] },
  { type: 'array', value: '[', child: [] },
  { type: 'number', value: 112233, child: [] },
  { type: 'array', value: ']', child: [] }, 
  { type: 'number', value: 112, child: [] },
  { type: 'array', value: ']', child: [] },
  { type: 'number', value: 55, child: [] },
  { type: 'string', value: '99', child: [] },
  { type: 'array', value: ']', child: [] },
  { type: 'number', value: 33, child: [] },
  { type: 'boolean', value: true, child: [] },
  { type: 'array', value: ']', child: [] } ] 

var tokenArrayStack = [];
lexerArray.forEach((el)=>{
            if(el.value==="["){
                tokenArrayStack.push(lexerArray.indexOf(el))
            }

        })