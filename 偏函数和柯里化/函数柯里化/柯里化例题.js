// compose(f1, f2)(f3)(f4)([1, 2, 3]) => f4(f3(f2(f1([1,2,3]))))
//
function compose(...args) {
    //todo
    // const args = Array.from(arguments);

    return (...rest) => {
        if (rest.length === 1 && rest[0] instanceof Array) {
            // let res = rest[0];
            // for (let fn of args) {
            //     res = fn.call(null, res);
            // }
            // return res;
            return args.reduce((pre, fn) => fn.call(null, pre), rest[0]);
        } else {
            let _allArgs = [...args, ...rest];
            return compose(..._allArgs);
        }
    }
}

function f1(args) {
    return args.map((a) => a * 1);
}

function f2(args) {
    return args.map((a) => a * 2);
}

function f3(args) {
    return args.map((a) => a * 3);
}

function f4(args) {
    return args.map((a) => a + 3);
}

const res = f4(f3(f2(f1([1, 2, 3]))));
const conRes = compose(f1, f2)(f3)(f4)([1, 2, 3]);
console.log(res);
console.log(conRes);