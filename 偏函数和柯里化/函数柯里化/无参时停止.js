// 公式类型二: 无参数传入时并且参数数量已经满足函数要求
// fn(a, b, c, d) => fn(a)(b)(c)(d)();
// fn(a, b, c, d) => fn(a);fn(b);fn(c);fn(d);fn();

const { add2 } = require('./func.js')

const createCurry = (fn, ...args) => {
    let _args = args || [];
    return (...rest) => {
        // let _allArgs = all.slice(0);
        // _allArgs.push(...rest);
        let _allArgs = [..._args, ...rest];
        if (rest.length > 0) {
            // 调用时参数不为空或存储的参数不满足原始函数参数数量时，返回curry函数
            return createCurry.call(this, fn, ..._allArgs);
        } else {
            // 调用参数为空(),且参数数量满足时，触发执行
            return fn.apply(this, _allArgs);
        }
    }
}
const curryAdd = createCurry(add2, 2);
let sum = curryAdd(3)(4)(5)(); // 14
console.log(sum);

// ES5写法
function createCurry2() {
    var fn = arguments[0];
    var _args = [].slice.call(arguments, 1);
    var length = fn.length;

    return function() {
        var _allArgs = _args.slice(0);
        _allArgs = _allArgs.concat([].slice.call(arguments));
        if (arguments.length > 0 || _allArgs.length < length) {
            _allArgs.unshift(fn);
            return createCurry.apply(this, _allArgs);
        } else {
            return fn.apply(this, _allArgs);
        }
    }
}