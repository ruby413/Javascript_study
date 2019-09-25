const pipe = (...args) =>  {
    return function (init) {
        return args.reduce((acc, cur) => {
        return cur(acc)   
    }, init);
    }
}

pipe(fn, fn2, fn3)('2018')

const double = (i) => i*2
const add2 = (i) => i+2
const add5 